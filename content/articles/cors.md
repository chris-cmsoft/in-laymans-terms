---
title: CORS
description: Cross-Origin Resource Sharing
alt: CORS or Cross-Origin Resource Sharing explained
categories:
 - security
 - web
author:  
  slug: chris
---

Cross-Origin resource sharing is the act of calling an API from a browser, 
which does not match the original domain of the page currently loaded.

For example if one.com where to call two.com, we would say they are calling across origins (domains).

This is sometimes useful for example if a website uses google maps api to include an address search,
it would need to call to maps.google.com. This would be a cross-origin request.

When building an API though, we don't want websites which do not belong to us,
or websites not supposed to use our API, to use our API freely from other domains.

This is where CORS comes in. 

We can instruct the browser on which domains are allowed to be called.

When the application makes a call to our API, 
we return headers to tell the browser whether they can, or cannot call our API,
as well as which headers and methods are allowed, and whether they are allowed to pass credentials.

API's will usually use the `Origin` header to determine where a request is coming from, 
as the browser automatically constructs this header, and can be considered safe.

All of the instructions are passed back to the browser using headers.

---
## Preflight Requests

Browsers will often send a pre-flight request before calling the actual method requested. 

These requests are made before the actual API call, using the `OPTIONS` method. 

This allows the browser to check whether it can actually call your API, before sending any data.

It would be pointless sending sensitive data, before knowing whether it was allowed to.

These requests are usually very fast, and should not inhibit the browsers validation

---
## Response Headers 

```
Access-Control-Allow-Origin:   
```

Access-Control-Allow-Origin controls which origins are allowed to call our API. 

It's value can be a wildcard `*` to indicate that any website origin is allowed to call our API.

This header will often be populated with the origin calling the API after being validated by the server.

```
Access-Control-Expose-Headers:
``` 

Access-Control-Expose-Headers controls which headers are allowed to be read by the browser from the response.

It can either be a wildcard `*`, or a comma separated list of header names.

This is useful if you would like to prevent websites you do not control, 
from reading for example `Set-Cookie` headers which contain sensitive tokens,
and are stored and returned without Javascript being able to access the tokens.

```
Access-Control-Max-Age:
```

Access-Control-Max-Age controls how long the browser is allowed to cache or reuse one preflight request,
before needing to send a new preflight request.

This helps prevent the browser from making a preflight request before every single API call.

```
Access-Control-Allow-Credentials: 
```

Access-Control-Allow-Credentials controls whether credentials are allowed to be passed to your API.

It can be set to `true` or omitted if false

```
Access-Control-Allow-Methods:
```

Access-Control-Allow-Methods controls which methods are allowed to be used to call your API.

It can be either a wildcard `*` or a list of methods comma-separated `GET, POST, PUT`,

```
Access-Control-Allow-Headers:
``` 

Access-Control-Allow-Headers controls which headers the user can send along with the request.

Either a wildcard `*` or a list of methods comma-separated `X_SOME_HEADER, X-ANOTHER-HEADER`.
