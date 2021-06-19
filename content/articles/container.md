---
title: Containers
description: Containers (often called Docker containers) are lightweight application bundles
categories:
 - containers
author:  
  slug: chris
---

Containers are essentially tar archives containing an application, 
and everything it needs to run including os dependencies, libraries, and other dependencies.

A container can easily be shipped to most machines, and run without needing to install additional software.

Containers are often used to ship older apps to newer environments, 
or make it easier to run multiple applications with different sets of dependencies,
on the same machine without needing to configure those dependencies on the host machine.

Containers can take on many forms, the most recognised being Docker containers. 

Containers are not limited to Docker containers. 
Windows has containers which they can use to ship software which would not work on newer OS's,
to newer OS's, and the containers will emulate all the older software from previous OS's that the application needs

We are assuming you are reading this for Docker containers.

## How do they work 

Docker containers as they are mostly known, 
are applications bundles into layered file systems, 
which container runtimes will use to create a running instance of that container.

I will do this by utilising Linux features like Network Namespaces, CGroups, Union FIle Systems and a couple more pieces,
to create an isolated environment where it can unpack the Container file system.

This protects the underlying server from the container, and makes it possible to manage resources,
and permissions, without needing to install anything else on the host system, 
as everything the application needs is packaged in the container,
and we just need to give it the resources to be able to run.

It's a good way to abstract infrastructure from applications, 
and make applications easier to orchestrate across multiple environments or infrastructure.
