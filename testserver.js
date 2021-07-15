const express = require("express");
const Nuggies = require('nuggies');
const tools = require("./greesyapi.js") 
const mongoose = require("mongoose")

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









/*


MONGO DB



*/
mongoose.connect("mongodb+srv://greesy:greesydb1@greesymongo.4jmok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: false
    }).then(() => {
    console.log("[Greesy]: Mongoose successfully connected.");
    }).catch(err => console.log("[Greesy]: An error occurred while connecting mongoose.", err));


const app = express();

// Router

app.use("/",require("./server/routers/index.js"));
app.use("/api",require("./server/routers/api.js"));






