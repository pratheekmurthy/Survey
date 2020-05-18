/*Index.js is the root file of the Project . it is the stat of the project */

//const express = require('express'); // importing express library
//const app = express();    // This app is a single application in the project which contains the requestthat comes from node to express and from espress to route handlers


//Router Handling

/* here we are writing a route handler method i.e app.get method we are passing app object with get request with the / which tell its http request */


//app.get('/',(req,res) => {     // req is the js object which represents the incoming request  and res represents response to be sent for who ever has made the request
  //res.send({ hi: 'there'});  // Body of route handler
//});

//app.listen(5000);   //express telling node to respond the request coming from the port 5000


const express = require('express');
const app = express();
app.get('/',(req,res) => {
  res.send({ hi: 'there'});
const PORT =process.env.PORT || 5000;
  app.listen(5000);
