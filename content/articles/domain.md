---
title: Domain
description: A Domain is the "address" of your software
categories:
 - api
 - web
author:
  name: Chris
---

A Domain name is a human-readable address for software, like [example.com](https://example.com).
In this case example.com is your domain name.

Websites or APIs are hosted on some infrastructure (servers),
and these all have IP Addresses. 
But IP Addresses can change, and are not easy to remember, and easy to type incorrectly.  

A Domain name is a human-friendly way to always point at your infrastructure,
no matter if the IP address changes. It's a way for companies to manage the IP addresses,
and take that strain off your shoulders. 

## Not to be confused with a URL

A URL / URI is a full address to a specific piece of content, or a specific page of your website,
like [www.example.com/contact-us](https://www.example.com/contact-us). This is a URL. The **Domain** of this URL is <u>example.com</u>.

## How do they work ?

A Domain name is a human-friendly address for an IP address. 

Whenever you type a domain name in your internet browser (or call it as an API), 
your computer first asks the address directory, called The Domain Name System (DNS for short),
where it can find this address. 

The DNS then responds with the appropriate IP address for the server,
and uses that to fetch the content from that IP address. 

If the IP address ever changes, the DNS will respond with the new IP,
meaning you can still use the same domain name you have always used,
and don't need to worry about all this IP address stuff. 
