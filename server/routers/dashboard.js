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



app.get("/dash", gGiris ,bakimCheck ,(req,res) => {
  const user = nico.users.cache.get(req.user.id);
  const perms = discord.Permissions;
  
  render(res, req, "sunucusec.ejs",{perms});
 });

app.get("/dash/:sunucuID/yonet", async(req, res) => {
  if(!req.user) return res.redirect("/l/")
  let id = req.params.sunucuID
  let guild = nico.guild;
  if(!id) return res.json({error: "Bulunamadı"});
  let srev = nico.guilds.cache.get(id);
  let perm = nico.guilds.cache.get(id).members.cache.get(req.user.id).permissions.has("MANAGE_GUILD")
  if(!perm) return res.json({error: "Bulunamadı"});
  const fetchedLogs = nico.guilds.cache.get(id).fetchAuditLogs({typ: "MESSAGE_DELETE"});
  var verfyseviye = nico.guilds.cache.get(id).verificationLevel;
 var mfalev = nico.guilds.cache.get(id).mfaLevel;
 var afkK = nico.guilds.cache.get(id).afkChannel;
var region = nico.guilds.cache.get(id).region;
var roller = nico.guilds.cache.get(id).roles;
var banner = nico.guilds.cache.get(id).banner;
var fetchGuildPre = db.fetch(`aboneliksunucu_${id}`);
 
 
 
 
  render(res, req, "ayarlar.ejs", {id, guild,fetchedLogs,verfyseviye,mfalev,afkK,region,roller,banner,srev,fetchGuildPre})
})

app.get("/dash/:sunucuID/yonet/embed", async(req, res) => {
  if(!req.user) return res.redirect("/l/")
  let id = req.params.sunucuID
  let guild = nico.guild;
  var fetchPre = db.fetch(`abonelik_${req.user.id}`);
  
  if(!id) return res.json({error: "Bulunamadı"});
  let perm = nico.guilds.cache.get(id).members.cache.get(req.user.id).permissions.has("MANAGE_GUILD")
  if(!perm) return res.json({error: "Bulunamadı"});
  render(res, req, "ayarlar_embed.ejs", {id,fetchPre,guild})
})

app.get("/dash/:sunucuID/yonet/counter", async(req, res) => {
  if(!req.user) return res.redirect("/l/")
  let id = req.params.sunucuID
  let guild = nico.guild;
  var fetchPre = db.fetch(`abonelik_${req.user.id}`);
  var counterAddingsize = db.fetch(`counterAdd_${id}`);
  if(!id) return res.json({error: "Bulunamadı"});
  let perm = nico.guilds.cache.get(id).members.cache.get(req.user.id).permissions.has("MANAGE_GUILD")
  if(!perm) return res.json({error: "Bulunamadı"});
  render(res, req, "ayarlar_counter.ejs", {id,fetchPre,guild,counterAddingsize})
})

app.post("/dash/:sunucuID/yonet/counter", async(req, res) => {
  if(!req.user) return res.redirect("/l/")
  let id = req.params.sunucuID
  let guild = nico.guild;
  var fetchPre = db.fetch(`abonelik_${req.user.id}`);
  
  if(!id) return res.json({error: "Bulunamadı"});
  let perm = nico.guilds.cache.get(id).members.cache.get(req.user.id).permissions.has("MANAGE_GUILD")
  if(!perm) return res.json({error: "Bulunamadı"});
 
var rBody = req.body;
  if(rBody == null){
    res.json("Please Write Informations in Inputs!");
  }
  if(rBody == undefined){
    res.json("unexcepted Error");
  }
  if(rBody == NaN){
    res.json("NaN");
  }
  //kufur engel rBody
  if(rBody == "amk"){
    res.json("amk");
  }
  
  if(rBody == "nah"){
    res.json("al sana nah 😋");
  }
  db.set(`counter_${id}`);
  db.set(`counterNumber_${id + rBody.cnumber}`);
  db.set(`counterChannel_${id +rBody.chid}`)
  db.add(`counterAdd_${id}`,+1);
  
  
  res.redirect(`/dash/${id}/yonet/counter`);



})



app.get("/api/dash/:sunucuID/yonet/counter/save", async(req, res) => {
  if(!req.user) return res.redirect("/l/")
  let id = req.params.sunucuID
  let guild = nico.guild;
  var fetchPre = db.fetch(`abonelik_${req.user.id}`);
  
  if(!id) return res.json({error: "Bulunamadı"});
  let perm = nico.guilds.cache.get(id).members.cache.get(req.user.id).permissions.has("MANAGE_GUILD")
  if(!perm) return res.json({error: "Bulunamadı"});
 
var rBody = req.body;
  /*
  if(rBody == null){
    res.json("Please Write Informations in Inputs!");
  }
  if(rBody == undefined){
    res.json("unexcepted Error");
  }
  if(rBody == NaN){
    res.json("NaN");
  }
  //kufur engel rBody
  if(rBody == "amk"){
    res.json("amk");
  }
  
  if(rBody == "nah"){
    res.json("al sana nah 😋");
  }
  
  db.set(`counter_${id}`);
  db.set(`counterRakam_${rBody.cnumber}`);
  db.set(`counterKanal_${rBody.chid}`)
  */
  db.add(`counterAdd_${id}`,+1);
  
  console.log(rBody.chid);
  res.redirect(`/dash/${id}/yonet/counter/`);



})





module.exports = app;