const app = require('fastify')({ logger: true })

const Nuggies = require("nuggies");
const Discord2 = require("discord.js");
const Client2 = new Discord2.Client();
const Util = require("./util/eventloader.js")(Client2);
const tools = require("./greesyapi.js");
const mongoose = require("mongoose");

//Nuggies.giveaways.connect(process.env.mongoURI);
// CUSTOM CLIENTS
//var dc2 = require("discord.js");
//const clientDash = new discord.Client();
//Dashboard Ping
/*
setInterval(function(){ 
  var pingDash = nico.ws.ping+2;
  var request = require("request");
  request("https://greesy.negodev.tk/");
  nico.ws.ping+2
  db.set(`dashPing`,pingDash);
}, 5);*/

//LOADERS
console.clear();
console.log(`

□□□□□□□□□□□□□□□

     GREESY 

□□□□□□□□□□□□□□□

    Loading Project ....


□□□□□□□□□□□□□□□




`);

console.log("");
console.log(`
□□□□□□□□□□□□□□□

     Greesy Loaded ! 

□□□□□□□□□□□□□□□

`);
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("Loaded Greesy Api");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");

app.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs')
  }
})

// Declare a route
app.get('/', (request, reply) => {
  //reply.send({ hello: reply.getResponseTime() })
  reply.view("server/web/html/negoo.ejs");
})

// Run the server!
app.listen(3000, (err) => {
  if (err) {
    app.log.error(err)
   // process.exit(1)
  }
})