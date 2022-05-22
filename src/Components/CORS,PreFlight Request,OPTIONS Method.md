CORS stands for Cross Origin Resource Sharing

CORS is a mechanism which uses additional HTTP headers to tell the browser about a specific web app can share resource with other web app.But both the web app have different origin and if they have same origin they can share the resources very easily but if they don't have same origin they have to follow CORS mechanism.

How CORS works?
1. Two web apps running on different origin--> CORS preflight mechanism is followed 
2. Preflight options are called first --> then second origin / Origin 2 will send some additional HTTP headers as as it gets a request , then the browser running Origin 1 recieved the request,  then only it make a actual call like POST / GET .. etc
By this way resources are shared over cross origin.


Additional HTTP headers :-> Most majorly used Additional HTTP headers is Accept-Control-Allow-Origin,Accept-Control-Allow-Methods. It can have different values,
on Public APIs , server sends as [Accept-Control-Allow-Origin:*]

Does this preflight call is made for all requests ?
No 