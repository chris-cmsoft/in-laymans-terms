---
title: Api
description: An API is how humans or programs talk to other programs
categories:
 - api
 - web
author:
  name: Chris
---

An API (Application Programming Interface) is a components which allows us (humans or even other programs) to communicate computer programs.

It's how we *Interface* with programs, and programs would be pretty useless if we could not communicate them.

For example, when you open Twitter, it uses an API to fetch all of the tweets which are available for you to see.

It will In Layman's Terms, ask the API "Please give me all of the tweets", 
and the API will respond with a list of Tweets which are relevant to you.

How it does that is unimportant, 
as long as we have some way to communicate with it.

This layer of communication is called an API, 
given that one of the communicating sides is a computer program.

## Different shapes of API

APIs come in many shapes and forms, and we communicate with them in many different ways.

When you watch talks to your phone, it's using a bluetooth API.

When you switch on your TV, your remote is using an infrared API.

When your keyboard talks to your computer, it uses a USB Interface.

When your phone talks to Twitter, it uses an HTTP API.

There are a massive amount of different shapes for different use cases. 
Each made to suite the environment they are in. 

The most common APIs referred to as "APIs" are usually web based APIs.

Essentially how systems talk to each other over the internet.

We refer to the *talking* as an API call. You call an API.

## Different types of Web based APIs

We'll mainly cover web-based here, as there are many types.

Different types of APIs will have different rules on how to communicate and which "language" to use.

We cannot communicate with APIs like we do with humans. 
Computers expect very consistent, and structured information to make decisions.

### HTTP Apis 

Most common APIs used today in tech are called HTTP APIs.

They used the HTTP protocol to communicate. 

It's a structured way of asking the program questions or giving it commands,
over the internet. 

The API calls do not have to be in a certain structure to use HTTP, 
but the package containing the question has structure to tell the API what you expect
like the format, language, where you are calling from etc.

### Rest APIs

Most Restful APIS are HTTP APIs with some exceptions (APIS which do not use HTTP, but another protocol).

In the same way English has Grammar rules, a REST API has grammar rules
for how it communicates information. 

REST APIs are usually used for structured data such as data for a customer database,
which can be represented with structure and very consistent fields (name, surname, number etc.)

### Composite APIs

Composite APIs are APIs which allow you to send multiple questions / commands at once, 
and receive all the answers at once.

These are usually used when many questions have to be asked to an API in succession,
using a previous call's data for the next.

We can essentially ask all of the questions, and the server can come up with all of the responses at once.

These APIs are not very common, but useful in certain situations.

### Batch APIs

Batch APIs are similar to Composite APIs, but they do not need the answers from the previous question. 

The API calls do not need to relate to each other and can all be executed at once.

The reason for sending them all at once is often for performance.
