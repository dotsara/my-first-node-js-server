/*
  this is the example from:
  http://blog.modulus.io/build-your-first-http-server-in-nodejs

  This definitely has more meaningful comments than the usage
  example from nodejs.org.
*/

//Let's require/import the HTTP module
var http = require('http');

//Let's define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Let's start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});