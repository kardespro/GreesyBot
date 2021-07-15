const app = require("express").Router();
const discord = require("discord.js");

//require('discord-buttons')(nico);

const nico = new discord.Client();

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

//app.set('view engine','ejs');

/*

* Subscribe API

*/

app.get("/user/subscribe", bakimCheck ,(req,res) => {

  var body = req.body;

  render(res,req, "aboneol.ejs");

  });

app.get("/user/subscribe/on", gGiris ,  (req,res) => {

 // var body = req.body;

 // var fetch = true;

  var kredisi = db.fetch(`kredi_${req.user.id}`);

  if(kredisi == 30){

    res.json({success: "The Subscription Was Added"});

    db.set(`abonelik_${req.user.id}`, "premium");

    db.delete(`kredi_${req.user.id}`,-30);

    };

  if(kredisi < 29){

    res.json({error: "Kredin Yetersiz"});

  };

  res.json("error");

  });

app.get("/user/subscriptions/", (req,res) => {

  if(!req.user) return res.redirect("/l");

  var user = req.user.id;

  var userr = req.user;

  var fetch_abonelik = db.fetch(`abonelik_${user}`);

  render(res,req, "abonelik.ejs",{

    abonelik: fetch_abonelik,

    user,

    userr

  });

  });

app.get("/user/subscriptions/delete", (req,res) => {

  if(!req.user) return res.redirect("/l");

  var user = req.user.id;

  var userr = req.user;

   db.delete(`abonelik_${req.user.id}`, "premium");

  res.redirect("/user/subscriptions");

  db.set(`abonelik_${req.user.id}`,"free");

  });









module.exports = app;