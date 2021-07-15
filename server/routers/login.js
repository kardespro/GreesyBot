const app = require("express").Router();

const _ = require("lodash");

const discord = require("discord.js");
//require('discord-buttons')(nico);
const nico = new discord.Client();

const path = require("path");

const fs = require("fs");

const url = require("url");
const db = require("quick.db");
const moment = require("moment");
//db.add("kull",1);
require('discord-buttons')(nico);
var bodyParser = require('body-parser');
const Strategy = require("passport-discord").Strategy;

const session = require('express-session');

const passport = require('passport');




app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ 

  extended: true 

})); 

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




passport.use(new Strategy({

    clientID: "817456729558220812",

    clientSecret: config.secret,

    callbackURL: config.callback,

    scope: ["identify", "guilds","guilds.join"]

  }, (accessToken, refreshToken, profile, done) => {

    process.nextTick(() => done(null, profile));

  }));

  

  passport.serializeUser((user, done) => {

    done(null, user);

  });

  passport.deserializeUser((obj, done) => {

    done(null, obj);

  });

  app.use(

    session({

      secret: "kardespro",

      resave: false,

      saveUninitialized: false

    })

  );

  

  app.use(passport.initialize());

  app.use(passport.session());
/*
app.get("/l", passport.authenticate("discord", {

    scope: ["identify", "guilds"]
  
  }));

  app.get("/l/callback", passport.authenticate("discord", { failureRedirect: "/l" }), (req, res) => {

    const anasunucu = nico.guilds.cache.get(config.sunucuid);
    var ab_free = db.fetch(`abonelik_${req.user.id}`,"free");
    var ab_var = db.fetch(`abonelik_${req.user.id}`,"premium");
    if(ab_free) return res.redirect("/");
    if(ab_var) return res.redirect("/");
    res.redirect("/");
db.set(`abonelik_${req.user.id}`,"free");

    });
*/
// FAST Login API

   app.get("/l/", (req, res, next) => {
      if (req.session.backURL) {
        req.session.backURL = req.session.backURL; 
      } else if (req.headers.referer) {
        const parsed = url.parse(req.headers.referer);
        if (parsed.hostname === app.locals.domain) {
          req.session.backURL = parsed.path;
        }
      } else {
        req.session.backURL = "/";
       }
      next();
    },
    passport.authenticate("discord", { prompt: 'none' }));
    app.get("/l/callback", passport.authenticate("discord", { failureRedirect: '/l/' }), async (req, res) => {
        let banned = await db.fetch(`banned_${req.user.id}`);
        if(banned) {
        nico.users.fetch(req.user.id).then(async a => {
        nico.channels.cache.get(config.logknalid).send(new discord.MessageEmbed().setAuthor(a.username, a.avatarURL({dynamic: true})).setThumbnail(a.avatarURL({dynamic: true})).setColor("RED").setDescription(`[**${a.username}**#${a.discriminator}]() isimli kullanıcı **siteye** giriş yapmaya çalıştı fakat siteden engellendiği için giriş yapamadı.`).addField("Username", a.username).addField("User ID", a.id).addField("User Discriminator", a.discriminator))
        })
        req.session.destroy(() => {
        res.json({ login: false, message: "You have been blocked from Greesy.", logout: true })
        req.logout();
        });
        } else {
            try {
              const request = require('request');
              request({
                  url: `https://discordapp.com/api/v8/guilds/${config.server.id}/members/${req.user.id}`,
                  method: "PUT",
                  json: { access_token: req.user.accessToken },
                  headers: { "Authorization": `Bot ${nico.token}` }
              });
        } catch {};
        res.redirect(req.session.backURL || '/')
        nico.users.fetch(req.user.id).then(async a => {
        nico.channels.cache.get(config.logkanalid).send(new discord.MessageEmbed().setAuthor(a.username, a.avatarURL({dynamic: true})).setThumbnail(a.avatarURL({dynamic: true})).setColor("GREEN").setDescription(`[**${a.username}**#${a.discriminator}]() Login In Website!`).addField("Username", a.username).addField("User ID", a.id).addField("User Discriminator", a.discriminator))
          var ab_free = db.fetch(`abonelik_${req.user.id}`,"free");
    var ab_var = db.fetch(`abonelik_${req.user.id}`,"premium");
    if(ab_free) return res.redirect("/");
    if(ab_var) return res.redirect("/");
   // res.redirect("/");
db.set(`abonelik_${req.user.id}`,"free");

        })
        }
    });
app.get("/logout", (req, res) => {

    req.logOut();

    res.redirect("/");

  });

  








module.exports = app;