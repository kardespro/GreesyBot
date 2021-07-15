const app = require("express").Router();
const discord = require("discord.js");

//require('discord-buttons')(nico);

const nico = new discord.Client();

const path = require("path");


/*

* Haber Sistemi

*/

app.get("/blog/",bakimCheck,(req,res) => {

  var fetchHaber = db.fetch(`habr`);

  render(res,req, 'blog.ejs',{blogPost:posts, postsLen:postsL,fetchHaber});

});

let posts=[];

//let posts = db.fetch("post")

let postsL=posts.length;

app.get("/admin/blog/new",gGiris , (req,res) => {

  if(req.user.id != config.kurucurolid) return res.redirect("/");

  

  var user = req.user;

  render(res,req, 'blog_new.ejs',{user});

});

app.get('/blog/:postName', gGiris , bakimCheck ,  (req,res) => {

  var a=0;

 console.log(req.params.postName)

  var iDb = db.fetch(`haber_${req.params.postName}`);

 posts.forEach(function(title){

  let pName = _.lowerCase(req.params.postName);

  let pTitle = _.lowerCase(title.pT)

 // let pAuthor = _.lowercase(title.author);

   if(pName===pTitle){

     a=1;

     render(res,req, "blog_view.ejs",{blogPostTitle:title.pT,blogPostBody:title.pB,config});

   }

 });

 if(a==1){

  console.log("Match found!!")

 }

 else{

  console.log("match not found");

}

});

app.post("/admin/blog/new", gGiris,(req,res) => {

  if(req.user.id != config.kurucurolid) return res.redirect("/");

  let post = {

    pT:req.body.postTitle,

    pB:req.body.postBody

  }

 posts.push(post);

  db.push(`haber_${post.pT}`,post);

  db.push(`habr`,post);

  var Log = db.fetch(`haber_${post.pT}`);

  console.log(Log);

  res.redirect("/");

});

app.get("/testblog",  (req, res) => {

var fetchHaber = db.fetch(`habr`);

render(res, req, "blogtest.ejs",{fetchHaber});

  });


module.exports = app;