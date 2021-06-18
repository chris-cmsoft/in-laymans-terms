---  
title: Kubernetes  
description: Kubernetes is a container orchestrator  
categories:  
 - api  
 - web  
author:  
  name: Chris  
---  
  
Saying Kubernetes is a container orchestrator often confuses people, 
and does not make sense to new comers to the Container Orchestration world.  
So I'll try to explain Kubernetes here in more concrete terms, and why it exists.   
  
This is not an exhaustive guide to the inner workings of Kubernetes,   
but rather a look into why it exists at all, and what it's essential purpose is.   
  
> Kubernetes, also known as K8s, is an open-source system for automating deployment, 
> scaling, and management of containerized applications.  
> \- https://kubernetes.io/  
  
# From the start

Kubernetes solves a problem that has existed for quite some time in the software world. 

Orchestrating distributed systems.

To understand the problem that Kubernetes solves, let's have a look at where it originated from. 

## A traditional deployment

If you've built an application, and run it before,
you'll likely have deployed this application on a virtual machine or server,
and exposed it through a public IP or domain name.

These applications could have multiple parts or pieces (Frontend, Backend, Queue processors),
each with their own running processes and computing requirements.

![Traditional Server Layout](/content/kubernetes/TraditionalServer.png "Traditional Server Layout")


## Updating a traditional deployment

If you want to update the code of a traditional deployment, 
you would typically SSH onto the server where it is deployed,
update the codebase through Git or another version control system,
update all of the packages (if interpreted language is used), 
restart the web server if it has changes, 
and viola, your application is updated.

![Traditional Server Layout](/content/kubernetes/TraditionalServerUpdating.png "Traditional Server Layout")

## Scaled traditional deployment

The traditional model is quite simple. Now let's consider that we start seeing some scale. 

Our user base has grown and you need some more servers to handle the load. 
Not for all of the parts of your application, but only for certain parts.   

Let's say for example the queue processors, and the API. 

So we add a second server, deploy the code, hook it up to the Queue, 
deploy the web server, and start processing extra background jobs and requests.

We also add a load balancer in front of our servers, 
so the load is split across all our servers for the API.

![Traditional Server Layout](/content/kubernetes/ScaledTraditionalServer.png "Traditional Server Layout")

## Updating a scaled traditional deployment 

When we now want to update our application, we need to ssh into each of our servers,
update the codebase, and restart everything. 

Our updates are still fairly simple to manage, but we have to look after these servers. 

When we update server packages for security updates for example,
we need to install new packages, and reboot our servers. 

We now have downtime included as well. We have a bit of time during our application updates and server reboots,
where some of our application is not accessible. 

![Traditional Server Layout](/content/kubernetes/ScaledTraditionalServerUpdating.png "Traditional Server Layout")

## Zero downtime updates in a scaled traditional deployment

We would not like to do application updates without downtime, 
so our application remains accessible throughout updates.

So we go ahead and add 1 more server, to replicate our first server,
add it to the load balancer. 

Then during updates, we remove the updating server from the load balancer,
update and reboot it, and then add it back to the load balancer.

We need to do this for every server, keeping in mind that they might have different components,
and that each server might need to be treated differently. 

![Traditional Server Layout](/content/kubernetes/ScaledTraditionalServerUpdatingWLB.png "Traditional Server Layout")

## More applications

As our business keeps growing, we have more and more applications or APIs, or even microservices
that need to be deployed. So we reuse the infrastructure we have, and deploy these onto our existing servers
to keep networking and server updates simple, and update our procedures for updating all the applications.

We now have a big jumble of apis deployed across our server fleet.  

We need a way to make the deployments simpler, as deploying one of our applications
brings downtime for our other applications which reside on the same machine.

# Containers

So we start packaging all of our applications in [Containers](/blog/container), 
to more easily manage their dependencies, hide implementation details from the server, 
and more easily update our applications on our servers.

Instead of heaving to pull code and update packages and restart processes directly on the servers,
we can build each of these separately, and simply pull the new images onto the servers, update the configs,
and restart the containers. 

The only time we need to restart the servers, is when we have updates to the servers themselves.

![Traditional Server Layout](/content/kubernetes/ScaledContainers.png "Traditional Server Layout")

## Updating scaled container deployments

When we want to update applications, we now need to SSH onto all of the servers where the application is running,
and pull the new image for teh application, and restart the container for that particular application.

There are two things which are hard about this process. 

We have to find only the servers where this application is running,  
and we need to know the correct command and settings for the specific container.

If containers are sufficiently complex (Volumes, Networks, Port mappings), this process can be quite error prone.

![Traditional Server Layout](/content/kubernetes/ScaledContainers.png "Traditional Server Layout")

## Declarative configuration

To solve the error prone problem we have when updating containers, we use a method called declarative config.

Declarative configuration is where we specify all of the settings for the containers 
in a file. Usually this is a json or yaml file.

In this file, we can specify all of the volume mounts, networks, ports, images etc. 

We can then use this file to keep our settings in, and update it before we run our new application.

This helps us avoid errors, as well as make it easy to review changes when we update the fie for new changes.

![Traditional Server Layout](/content/kubernetes/ScaledContainersDeclarative.png "Traditional Server Layout")

# Orchestration

We still have the problem of having to copy declarative files to the correct servers,
and running the new containers. 

There is still a lot of manual effort involved, and this process could be easily automated.

## Dynamic changes in traffic 

Imagine we have scale that goes up and down, or applications that need more processing during the day, 
and queues that need more processing at certain times.

For the quiet times, we have too much processing power, and for busy times, 
we sometimes have to move containers around to make sure there is enough processing power for everybody. 

If a server gets too busy, we need to move some containers to other servers, which aren't as busy.

If a particular server starts failing, we need to make sure we reschedule the containers that were running there,
to a new server, or to the servers which are all still healthy. 

All of this takes a lot of manual effort.

![Traditional Server Layout](/content/kubernetes/ScaledContainersDynamicOutage.png "Traditional Server Layout")

## Networking for dynamic changes

When we start moving applications around for different reasons, 
we need to administer the load balancer to send traffic to the correct servers which have to correct applications.

## Automated Health checks

When we start implementing solutions like Health checks, or smoke tests, 
so we can automatically switch the load balancer to healthy servers, 
we need to administer this to point it at all the available applications,
as well as add and remove any applications which are no longer there or available.

This becomes a very big manual effort when you consider adding more automated checks or monitoring.

Usually this will happen through some scripting which automatically gets triggered.

![Traditional Server Layout](/content/kubernetes/ScaledContainersDynamicScripts.png "Traditional Server Layout")

# Kubernetes

This is where an orchestration tool like Kubernetes steps in.

Kubernetes is a tool, which allows us to update containers using an API, and declarative files,
and manage all our applications much more simply.

![Traditional Server Layout](/content/kubernetes/Kubernetes.png "Traditional Server Layout")

## Containers 

At the core of Kubernetes is containers. 
It starts, stops, updates, and removes containers from a cluster of servers.

If you want an application deployed onto the servers, 
you can ask Kubernetes to deploy a container onto your fleet of servers.

Kubernetes will then look through your servers, find which server is best for adding the container to,
and run it there.

You can also ask Kubernetes to deploy for example, 5 replicas of your container,
and it will find the best servers where your containers will fit,
and create 5 containers for you on the appropriate servers.

## Networking 
 
Earlier we spoke about having to update a load balancer to remove an updating application.

Kubernetes does this automatically too, 
by updating it's Endpoints to no longer include the updating containers IP,
which in turn means it is no longer included in the pool of containers for the application.

It also sets up networking in such a way, that no matter which one of your servers you call, 
it will route your request to a server which has your application on it.

## Rolling updates

If setup correctly, when Kubernetes updates your application, it will add the new container,
without removing the previous container, update the networking which points at the container to include the new container,
and remove the old container, and continue onto updating the next container.

This is referred to as a RollingUpdate.

## Configuration

Kubernetes also has capabilities to specify your application configurations,
and include them in your containers. This means that you don't need to make sure that 
you configuration is available on all of your servers, but rather specify it once,
and let Kubernetes take care of putting it in all the right places.

## Secrets

Kubernetes has a secret system built in, by which you can semi-securely add secrets for your applications,
like database passwords, or application keys, without having to specify them in your declarative files.

## Dynamic updates

Kubernetes has built in mechanisms to ensure your desired state is continually reconciled.

This means that if for example, one of your servers fails or goes offline, 
Kubernetes will move all of the containers running on that server,
to other servers which are healthy and have enough capacity to accept these new containers.

## Scaling applications

Kubernetes allows you to easily scale up or down containers,
by simply updating how many replicas you would like.

Kubernetes then takes care of adding more containers on your servers, 
or removing some of them if you've scaled down. 

# Kubernetes explained

After reading all of this, the term Container Orchestrator should make a lot more sense.

Kubernetes is exactly that. It is a Container Orchestrator. 
It orchestrates containers onto many servers, taking into account networking, capacity, health of applications etc.

It takes the manual labor out of managing containers. It makes it easier to deploy your containers, 
without having to spend too much time administering the servers on which they run, or worrying about downtime,
or Rolling Updates.

![Traditional Server Layout](/content/kubernetes/KubernetesDeclarative.png "Traditional Server Layout")

# Misconceptions

## Kubernetes handles incoming traffic 

There is a misconception, especially for Kubernetes new comers, 
that Kubernetes handles traffic which is destined for our applications. 

This is not true. It uses Linux tools to direct traffic, but if our Kubernetes servers go down,
and your workload servers stay up, your application will continue to work,
but you will no longer be able to make updates to your application.

## Kubernetes will make your applications better

No. Kubernetes in and of itself, will do nothing to improve your applications.

It will however make it easier to update and roll out changes, 
which in turn frees up your time, so you can work on improving your application

## Kubernetes will make your application more secure

No. Kubernetes by itself will do nothing to improve the security of your application,
and will arguably make your infrastructure less secure if not setup correctly.

Kubernetes runs containers. Containers have many CVEs still popping up today. 
VMs are a long established technology, and by default, probably more secure. 

If you do however make an active effort to understand the fundamentals of container security,
and make sure to setup your Kubernetes clusters correctly with the correct security parameters,
you could very well speed up your Software Delivery process, and keep things secure at the same time.

## Kubernetes will allow my application to scale better

No. If your application was not able to scale before Kubernetes, it will not scale after Kubernetes. 

If however, your application could scale before, but it was a big effort to scale it,
Kubernetes can help you to more easily scale it, and even do it automatically if necessary.

If your scaling problems lie in your integration points like your database or upstream APIs,
your time might be better spent solving those issues first, before trying out Kubernetes
for it's scaling capabilities. 

## Kubernetes is easy

Definitely not. Kubernetes is more than a technology when you start considering it for your business.

It requires a big shift in culture and the most effort spent will be on the adoption of it,
rather than running it. 

You could make many many mistakes along the way, which will require a very involved effort,
and it is not a silver bullet to your organisational problems. 

# Credits

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
