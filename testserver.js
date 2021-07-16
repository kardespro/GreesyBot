const express = require("express");
const Nuggies = require('nuggies');
const tools = require("./greesyapi.js") 
const mongoose = require("mongoose")
const discord = require("discord.js");
//require('discord-buttons')(nico);
//const nico = new discord.Client();
//const express = require("express");
const app = express();
module.exports = async (nico) => {


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








const app = express();

// Router
console.log(`
□□□□□□□□□□□□□

  Index Router Loading ......

□□□□□□□□□□□□□□
`);
sleep(500)
app.use("/",require("./server/routers/index.js"));
console.log(`
□□□□□□□□□□□□□

  Api Router Loading ......

□□□□□□□□□□□□□□
`);
sleep(500)

app.use("/api",require("./server/routers/api.js"));
console.log(`

□□□□□□□□□□□□□

  Dashboard Router Loading ......

□□□□□□□□□□□□□□

`);
sleep(500)


app.use("/dash/",require("./server/routers/dashboard.js"));
console.log(`

□□□□□□□□□□□□□

  User Router Loading ......

□□□□□□□□□□□□□□

`);

sleep(500)

app.use("/user/",require("./server/routers/user.js"));
console.log(`

□□□□□□□□□□□□□

  Blog Router Loading ......

□□□□□□□□□□□□□□

`);

sleep(500)


app.use("/blog/",require("./server/routers/blog.js"));

app.use("/l",require("./server/routers/login.js"));

mongoose.connect("mongodb+srv://greesy:greesydb1@greesymongo.4jmok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: false
    }).then(() => {
    console.log("[Greesy]: Mongoose successfully connected.");
    }).catch(err => console.log("[Greesy]: An error occurred while connecting mongoose.", err));

//nico.login(process.env.TOKEN);
console.log(`

□□□□□□□□□□□□□

  Greesy Active ! 

□□□□□□□□□□□□□□

`);



function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}



}









