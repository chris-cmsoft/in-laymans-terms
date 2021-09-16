---  
title: Kubernetes Ingress
description: Kubernetes Ingress  
categories:  
 - api  
 - web  
author:  
  slug: chris
---  

Kubernetes Ingress often seems like magic.

Install it, configure some `Ingress` yaml files, and you have an endpoint to your service.

But how do they ACTUALLY work ?

In this post we'll focus on the Nginx Ingress, but most ingresses will follow a similar pattern.

We'll go through it step by step, digging into each piece a little deeper

--- 

## The Controller

The first thing we need to know is how the Ingress Controller works. Not the paradigm, but the actual Controller.

It works using what's called a reconciliation loop.

It watches for `kind: Ingress` objects in the Kubernetes cluster, and when one is created, updated or delete,
it configures the Ingress Proxy (we'll cover this a bit later on) to match what is in the Ingress Object Definition.

![Ingress Controller Watching Ingress Objects](/content/kubernetes-ingress/IngressWatch.png "Ingress Controller Watching Ingress Objects")

You can see this in the logs when you have installed it, and created an Ingress Object.

```
$ kubectl logs -l app.kubernetes.io/name=ingress-nginx
[...startup logs]
I0916 17:37:14.528274       7 main.go:101] "successfully validated configuration, accepting" ingress="app-all/default"
I0916 17:37:14.551142       7 store.go:365] "Found valid IngressClass" ingress="default/app-all" ingressclass="nginx"
I0916 17:37:14.551699       7 controller.go:150] "Configuration changes detected, backend reload required"
I0916 17:37:14.556446       7 event.go:282] Event(v1.ObjectReference{Kind:"Ingress", Namespace:"default", Name:"app-all", UID:"73f9b804-1486-4e38-877a-edf889fcd4ea", APIVersion:"networking.k8s.io/v1", ResourceVersion:"4685563", FieldPath:""}): type: 'Normal' reason: 'Sync' Scheduled for sync
I0916 17:37:14.694526       7 controller.go:167] "Backend successfully reloaded"
I0916 17:37:14.694883       7 event.go:282] Event(v1.ObjectReference{Kind:"Pod", Namespace:"default", Name:"ingress-nginx-controller-fd7bb8d66-xrn2n", UID:"e6964f08-4dc4-4345-911b-f158d06a06c7", APIVersion:"v1", ResourceVersion:"4557455", FieldPath:""}): type: 'Normal' reason: 'RELOAD' NGINX reload triggered due to a change in configuration
``` 

When you update the Ingress Object and apply it, you'll see the new reload in the logs.

This is the basic workings of how the Ingress Controller works.

Now that we know how changes are realised and updated, 
let's move onto understanding how the Ingress receives traffic.

---

## Traffic to the Ingress

In this section we will demystify how the Ingress actually receives traffic from the internet.

There is a common misconception that the Ingress is an additional `kind: Service` in Kubernetes.

![Ingress As A Service Type](/content/kubernetes-ingress/IngressServiceType.png "Ingress As A Service Type")

The Ingress is in fact just a Deployment running in Kubernetes.

Traffic gets to it through a Service of `type: LoadBalancer` or `type: NodePort`. 

Both of these are very similar in that the `type: LoadBalancer` also creates a NodePort, and then connects some sort of LoadLabancer to it.

![Ingress Load Balancer](/content/kubernetes-ingress/IngressLoadBalancer.png "Ingress Load Balancer")

To show this you can investigate the service created by the Ingress.

```bash
$ kubectl get services
NAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP      PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   10.245.192.106   157.245.27.226   80:32555/TCP,443:32591/TCP   62m
```

On inspection, you'll see that this service points directly at the ingress controller

```bash
$ kubectl get services ingress-nginx-controller -o go-template='{{"selector:\n"}}{{range $key, $value := .spec.selector}}{{"  "}}{{$key}}:{{$value}}{{"\n"}}{{end}}'
selector:
  app.kubernetes.io/component:controller
  app.kubernetes.io/instance:ingress-nginx
  app.kubernetes.io/name:ingress-nginx

$ kubectl get pods -l app.kubernetes.io/component=controller,app.kubernetes.io/instance=ingress-nginx,app.kubernetes.io/name=ingress-nginx
NAME                                       READY   STATUS    RESTARTS   AGE
ingress-nginx-controller-fd7bb8d66-xrn2n   1/1     Running   0          148m
```

So you can now see that any requests to the LoadBalancer, will end up at the Ingress Controller.

This is how traffic gets to the Ingress.

Next, we can see how the Proxy works from there.

---

## The Proxy

The next piece is about actually proxying traffic from the Ingress, to our application pods. 

The common misconception here, is that the Ingress proxies traffic to the Service sitting in
front of our application pods.

![Ingress Proxy Through Service](/content/kubernetes-ingress/IngressThroughService.png "Ingress Proxy Through Service")

This again, is a incorrect in the case of most ingresses.

When we create a Service Object in Kubernetes, it in turn creates an Endpoint Object, 
containing all of the actual IP Addresses of our running pods.

You can see this by inspecting the endpoints in your cluster

```
$ kubectl get endpoints
NAME                                 ENDPOINTS                                               AGE
app                                  10.244.2.15:5000,10.244.2.232:5000,10.244.2.95:5000     158m
ingress-nginx-controller             10.244.5.21:443,10.244.5.21:80                          169m
ingress-nginx-controller-admission   10.244.5.21:8443                                        169m
```

The Ingress Controller uses these endpoints directly.

This means it will be very much influenced by the Service in front of our application 
(as it creates the correct endpoints for our application), but not directly use it's DNS 
to connect to our applications

![Ingress Actual](/content/kubernetes-ingress/IngressActual.png "Ingress Actual")

The reason for this becomes clear when you consider things like Sticky sessions 
(meaning a clients requests will always go to the same pod).

If the Ingress was pointing at the Kubernetes Service, 
it could not ensure that traffic from a client, will always be sent to the same pod.

The Kubernetes Endpoints are loaded into memory for the Nginx Ingress. 

This allows you for example, to create extra LUA extensions at the Nginx level, 
although this is very low-level.

You can inspect the actual Endpoints used by the Nginx Ingress using the [Nginx Ingress Krew Plugin](https://kubernetes.github.io/ingress-nginx/kubectl-plugin/)

```bash
$ kubectl ingress-nginx backends
[
  {
    "name": "default-app-http",
    "service": {
      "metadata": {...},
      "spec": {...},
      "status": {...}
    },
    "port": "http",
    "sslPassthrough": false,
    "endpoints": [
      {
        "address": "10.244.2.15",
        "port": "5000"
      },
      {
        "address": "10.244.2.232",
        "port": "5000"
      },
      {
        "address": "10.244.2.95",
        "port": "5000"
      }
    ],
    "sessionAffinityConfig": {...},
    "upstreamHashByConfig": {...},
    "noServer": false,
    "trafficShapingPolicy": {...}
  }
]
``` 

In the `endpoints` key in the response we can see all the endpoints the Ingress knows about. 

If you increase your application replicas, you will see the new IPs reflected here.

---

## Wrapping up

So far we've discussed pretty much every aspect of how an Ingress Controller works.

Different types of Ingresses will route using different tools (Nginx, HaProxy), 
but their architecture will look very much the same at the end of the day.

Let's now look at a complete example of an Ingress Controller deployed in a cluster

![Ingress Complete](/content/kubernetes-ingress/IngressComplete.png "Ingress Complete")

---

## Footnotes

### LoadBalancers

When using non-cloud infrastructure, probably on-prem, you might use NodePorts directly. 
This is perfectly fine, and the architecture remains largely the same.
In fact, services of `type: LoadBalancer` also use NodePort under the hood, and just hook the LoadBalancer up to that. 

### Multiple LoadBalancers

You could expose your application without the need for a Ingress, 
by simply specifying it's Service type, as `LoadBalancer`.  
This LoadBalancer will then directly point at your application.  
One of the primary problems with this approach is if you deploy a second application, 
you will need more than one LoadBalancer, which would be a waste of resources and money.  
Ingress Controllers help us to prevent this and allows us to create a 
single LoadBalancer as entrypoint for our cluster
   
