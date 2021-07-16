const app = require("express").Router();
const discord = require("discord.js");

//require('discord-buttons')(nico);

const nico = new discord.Client();
const _ = require("lodash");

const path = require("path");
const db = require("quick.db");
const config = {

  siteismi: "Greesy | Best Utility Bot",

  sunucuid: "858052041507209266",

  callback: "https://greesy.negodev.tk/l/callback",

  secret: "IWgw_oextZSp83XJabSRnTqD759LMQB3",

  clientID: "817456729558220812",

  logkanalid: "859899078624149516",

  kurucurolid: "682607343707488388",

  admins:["682607343707488388","682607343707488388","852830717037510687"],

  evalyetki: "682607343707488388",

  evalyetki1: "",

  evalyetki2: "852853360612605952",

  evalyetki3: "",

  logkanalid: "859899078624149516",

  prefix: "!",

  embedbanner: "https://i.pinimg.com/originals/30/88/a3/3088a3ebaf713600adacd00397ee410d.png"

  };


function gGiris(req, res, next) {

    if (req.isAuthenticated()) return next();

    req.session.backURL = req.url;

    res.redirect("/l/");

  }

function bakimCheck(req,res,next){

  var bakimDB  = db.fetch(`bakim`);

  if(bakimDB == false) return next();

  if(bakimDB == true){

    render(res,req, "bakim.ejs");

    }

  }

function karalisteCheck(req,res,next){

  if (req.isAuthenticated()) { 

  var karalisteDB = db.fetch(`karaliste_${req.user.id}`);

    if(karalisteDB == true){

      render(res,req, "karaliste.ejs");

      }

    }

  if(karalisteDB == false){

    next();

    }

}

function adminCheck(req,res,next){

  if (req.isAuthenticated()) { 

  

  var ussr = req.user.id;

    if(ussr == config.kurucurolid.includes())return res.redirect("/404")  &&  db.add(`adminpanel_izinsiz_giris_sayi`, +1);

    next();

    db.add(`adminpanel_giris_sayi`,+1);

    }

}

const dataDir = path.resolve(`${process.cwd()}${path.sep}server`);

  const templateDir = path.resolve(`${dataDir}${path.sep}web${path.sep}html${path.sep}`);

const render = (res, req, template, data = {}) => {

    const baseData = {

      bot: nico,

      path: req.path,

      user: req.isAuthenticated() ? req.user : null

    };

    res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data));

  };


/*

* Haber Sistemi

*/

app.get("/", bakimCheck,(req,res) => {

  var fetchHaber = db.fetch(`habr`);

  render(res,req, 'blog.ejs',{blogPost:posts, postsLen:postsL,fetchHaber});

});

let posts=[];

//let posts = db.fetch("post")

let postsL=posts.length;

/*app.get("/admin/blog/new",gGiris , (req,res) => {

  if(req.user.id != config.kurucurolid) return res.redirect("/");

  

  var user = req.user;

  render(res,req, 'blog_new.ejs',{user});

});*/

app.get('/:postName', gGiris , bakimCheck ,  (req,res) => {

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