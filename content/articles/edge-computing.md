---  
title: Edge Computing
description: Edge computing refers to “running workloads” closer to the users  
categories:
 - api
 - edge
author:
  slug: chris
---  

This entry came from [Charlotte](https://twitter.com/tinydata42)
  
> Edge computing refers to “running workloads” closer to the users. 
>
> There are different levels (from directly at the user (car, phone, in-house server) 
> to closer to the mobile tower to just not as far away as the next data center.
>
> Basically they’re smaller clouds/data centers, used for latency-sensitive use cases.
>
> Most common are gaming (often mobile), phone apps & connectivity (5G), IoT, AR/VR, connected cars, 
> but there are also upcoming use cases in the health care sector 
> that are kinda cool (remote surgeries that require fast connections).

## Digging into it

When running [APIs](./api) or other server-side applications, 
we run them on a server somewhere, and everybody across the world, connects to that server / group of servers.

If that server is located in the US for example, 
anyone connecting to that server from the US, will have a very quick connection,
because of their relative distance to the actual server.

But if someone from India or Japan try to connect to that server,
their connection might be somewhat slower than that of their US counterpart,
simply because of sheer distance between them and the server.

When we talk slower we mean by up to 1-2 seconds slower. 

That doesn't sound too big, but imagine playing a game, shooting at someone,
and missing because it took your "shoot" 1-2 seconds to reach the server.

## Bringing the servers closer to the users

A solution to the slower connections from far away, is to bring those servers closer to the users.

For example, putting an extra server in India, and letting all the people who use your application from India, 
connect to that server. 

They can now also have faster connection speeds to your servers.

We call these extra servers in remote locations "Edge" servers, 
As they lie on the far edges of where you API is provided.

## Use cases

There are many use cases where this is very useful, such as gaming, IOT (Internet of Things) etc.  

Charlotte has mentioned quite a few in her definition as well. 

## Inherit problems 

Edge computing sounds like a good solution at first glance, 
but it does have many problems for which there aren't always one stop solutions

### Data consistency 

Making sure that data stays consistent when you have many servers, but one source-of-truth,
is a difficult problem to solve, especially when looking at real-time connected use cases like gaming.

When someone in India "shoots" at someone else. The Indian edge server will know about it, before the US server does.

And if someone in the US "shoots" at someone else in India, the US server will know before the Indian server does. 

How do we know who gets shots first, and whether at the time of shooting, the person hasn't already moved, 
and the server just doesn't know yet.

These are what we call data inconsistencies. The information / data on one server, could be different from another. 

This is a really difficult problem to solve, and will be vastly different depending on what use-case you are working on.
