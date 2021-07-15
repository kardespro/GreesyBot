const app = require("express").Router();
const db = require("quick.db");
const path = require("path");
const discord = require("discord.js");

//require('discord-buttons')(nico);

const nico = new discord.Client();

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

* API 

*/

//key check

app.get("/api/v1/keycheck/:key", (req, res) => {

  var key = req.params.key;

  var keyUser = db.fetch(`key`);

  if(key == "nego"){

    res.json("true");

  }

//  render(res, req, "ayarlar_counter.ejs");

 });

app.get("/api/v1/promo/generate/:kod", gGiris, (req, res) => {

  var kod = req.params.kod;

 if(!kod) return res.json({error: "not found"});

  db.set(`promocodes_${kod}`,"premium");

  res.json({success: "Successfull Added Promo Code To System"});

});

app.get("/api/v1/promocode/:promo", gGiris , (req,res) => {

  var params = req.params.promo;

  var fetchpromos = db.fetch(`promocodes_${params}`,"premium");

  if(params == "free_premium"){

    res.json({success: "The Subscription Was Added"});

    db.set(`abonelik_${req.user.id}`,"premium");

    }

  if(params == "free"){

    res.json({success: "The Subscription Was Added"});

    

    db.set(`abonelik_${req.user.id}`,"free");

    

    };

  if(fetchpromos){

    res.json({success: "The Subscription Was Added"});

    db.set(`abonelik_${req.user.id}`,"premium");

    };

  res.json({error: "Permission Denied"});

  });

//....

app.get("/api/v1/promocode/check/:promo",  (req,res) => {

  var params = req.params.promo;

  var fetchpromos = db.fetch(`promocodes_${params}`,"premium");

  if(params == "free_premium"){

    res.json({success: "true"});

    }

  if(params == "free"){

    res.json({success: "true"});

    

    

    };

  if(fetchpromos){

    res.json({success: "true"});

    

    };

  res.json({error: "Permission Denied"});

  });

/*

* Gift Api

*/

app.get("/api/v1/gift/:giftKod/", gGiris , (req,res) => {

  var fetchgift = db.fetch(`gift_${req.params.giftKod}`);

  if(fetchgift === false){  res.json({error: "İnvalid Gift Code"});};

  /*

  * Fetch Gift Code

  */

   if(fetchgift === true){

    res.json({success: "The Gift Claimed"});

     db.set(`abonelik_${req.user.id}`, "premium");

     db.set(`giftkullanim_${req.params.giftKod}`,1);

     

    }

  var kullanimsayi = db.fetch(`giftkullanim_${req.params.giftkod}`);

 

  if(kullanimsayi > 1){

    res.json({error: "This Gift Is Already Received!"});

    }

  

  

  

  

  });


module.exports = app;