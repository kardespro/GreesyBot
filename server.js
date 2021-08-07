const express = require("express");
const Nuggies = require("nuggies");
const managerdb = require("./Database/main.js");
const manager = new managerdb("./all.json");
const Discord2 = require("discord.js");
const Client2 = new Discord2.Client();
const Util = require("./util/eventloader.js")(Client2);
const tools = require("./greesyapi.js");
const mongoose = require("mongoose");
const tailwindcss = require('tailwindcss')
//app.use('/assets', express.static('server/web/html/'))
const backup = () => {
  fs.copyFile(
    "./json.sqlite",
    `./backups/ • ${moment().format("D-M-YYYY • H.mm.ss")} • nego.sqlite`,
    err => {
      if (err) return console.log(err);
      console.log("Database Backuped.");
      var Embid = new discord.MessageEmbed()
        .setTitle("Greesy")
        .setColor("#3437eb").setDescription(`
      
    Greesy Database Manager
           
           
    ** Database Backuped **
          
     By : System
      
      Time: ${moment().format("D-M-YYYY • H.mm.ss")}
      
      `);
      nico.channels.cache.get("868378969140002816").send(Embid);
    }
  );
}; //Nuggies.giveaways.connect(process.env.mongoURI);
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
mongoose
  .connect(
    "mongodb+srv://greesy:greesydb1@greesymongo.4jmok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      autoIndex: false
    }
  )
  .then(() => {
    console.log("[Greesy]: Mongoose successfully connected.");
  })
  .catch(err =>
    console.log("[Greesy]: An error occurred while connecting mongoose.", err)
  );

const app = express();
const _ = require("lodash");

const discord = require("discord.js");
//require('discord-buttons')(nico);
const nico = new discord.Client();
const logs = require("discord-logs");

logs(nico);
const path = require("path");
const { Player } = require("discord-player");

// Create a new Player (you don't need any API Key)

const player = new Player(nico);
nico.player = player;

const fs = require("fs");

const url = require("url");
const db = require("quick.db");
const moment = require("moment");
//db.add("kull",1);
require("discord-buttons")(nico);
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/assets", express.static("server/web/css/"));
/*
 * CUSTOM SETTINGS
 */
//require("./testserver.js")(nico);

require("./custom_discord/inlineReply");

/*

*  Rastgele Kod Oluşturma

*/

function Random(length) {
  var result = "";

  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
function userFetch(id) {
  if (!id) return "kullanici id gir";
  var res = nico.users.cache.get(id);
  return res;
}

function createRole(roleName, rolePermissions, roleColor, guildID) {
  let sunucu = nico.guilds.cache.get(guildID);

  sunucu.roles.create({
    data: {
      name: roleName,

      color: roleColor,

      permissions: rolePermissions
    }
  });
  return "Created Role";
}

app.use(async (req, res, next) => {
  var getIP = require("ipware")().get_ip;
  var ipInfo = getIP(req);
  var geoip = require("geoip-lite");
  var ip = ipInfo.clientIp;
  var geo = geoip.lookup(ip);

  if (geo) {
    //let sitedatas = require("./server/mongodb/countrydb.js")
    //await sitedatas.updateOne({ id: config.clientID }, {$inc: {[`country.${geo.country}`]: 1} }, { upsert: true})
    /*    var sDt = {
           country : `country.${geo.country}`
          }
          await db.push(`country`,{sDt});*/
  }
  return next();
});
const http = require("http").createServer(app);
const io = require("socket.io")(http);
io.on("connection", socket => {
  io.emit("userCount", io.engine.clientsCount);
});
/*http.listen(3000, () => { 
      console.log("[Greesy]: Website running on 80 port.")
    });*/

//Routes

const authRouter = require("./server/auth.js");

//const serverRouter = require("./server/index.js");

//*******

//CONFIG
const ayar = {
  durum: "👑 !help | !stat "
};
const config = {
  siteismi: "Greesy | Best Utility Bot",

  sunucuid: "858052041507209266",

  callback: "https://greesy.negodev.tk/l/callback",

  secret: "IWgw_oextZSp83XJabSRnTqD759LMQB3",
  clientID: "817456729558220812",

  logkanalid: "859899078624149516",

  kurucurolid: "682607343707488388",

  admins: ["682607343707488388", "682607343707488388", "852830717037510687"],

  evalyetki: "682607343707488388",

  evalyetki1: "",

  evalyetki2: "852853360612605952",

  evalyetki3: "",
  logkanalid: "859899078624149516",

  prefix: "!",

  embedbanner:
    "https://i.pinimg.com/originals/30/88/a3/3088a3ebaf713600adacd00397ee410d.png"
};

//Server

//BOT

nico.on("ready", () => {
  //require("./testserver.js")(nico)

  const Discord = require("discord.js");
  nico.user.setActivity(ayar.durum, { type: "WATCHING" });
  /* const kategori = "869293230942994473";
  var kontrol = kategori
    .forEach(x => {
      x.name > "Channels |";
    })*/
  const kanalone = "869297523062358036";
  kanalone
    .setName(`Channels - ${nico.channels.cache.size}`)

    .then(presence => {
      /*
var mesajj = mesaj;
    if(mesajj){
   .replace("")
     } */
      const embed = new Discord.MessageEmbed()

        .setColor("#0099ff")

        .setTitle("**Durum Bildirgesi**")

        .setDescription(
          `Durumum **${nico.user.presence.activities[0].name}** \n Tür **${nico.user.presence.activities[0].type}** olarak belirlendi.`
        )

        .setTimestamp();

      // .setImage(`${nico.user.avatarURL}`);

      // .replace("WATCHING", "izliyor")

      //  channel.send(embed);
      nico.channels.cache
        .get("859899078624149516")
        .send("Succes!", { embed: embed });
    }); //burda replace yi nasıl yapmalıyım arkadaşlaar
  /* console.log(`

  

  ****************

  Server Başlatıldı PORT ${process.env.PORT}

  

  Bot ${nico.user.username} Ismiyle Discorda Bağlandı 

  

  *************

  `);*/

  // nico.user.setActivity(`🌎 !help | !stat `);
  setInterval(() => backup(), 1000 * 60 * 60 * 24); // Günde bir kere yedekler.
});
nico.on("guildCreate", guild => {
  if (db.has(`blacklist.${guild.ownerID}`)) return guild.leave();
});
nico.on("guildDelete", guild => {
  fs.copyFile(
    "./json.sqlite",
    `./Backups_Database/ • ${moment().format("D-M-YYYY • H.mm.ss")} • ${
      guild.name
    }.sqlite`,
    err => {
      if (err) return console.log(err);
      console.log("Database Backuped.");
    }
  );
  var calc =
    db.fetch(`counterAdd_${guild.id}`) +
    db.fetch(`counterNum_${guild.id}`) +
    db.fetch(`counter_${guild.id}`);

  db.delete(`counterAdd_${guild.id}`);
  db.delete(`counter_${guild.id}`);
  db.delete(`counterNum_${guild.id}`);
  var nego = new discord.MessageEmbed()
    .setTitle("Greesy")
    .setDescription(
      `
  
   ** Greesy Database Manager **
     == ${guild.name} Named Server Database Has Been reset
  == Reason :  The Server Was Reset For Deletion To Keep Memory In The Database  ==
  == Note:  Contact Moderators to Get Data Back! ==
   
   
    == Deleted Server's Information ==
    
    Owner :  \`<@${guild.ownerID}>\`
    MemberCount: \`${guild.memberCount}\`
    Roles Size : ${guild.roles.cache.size}
    Space Size of the Server in the Database: ${calc}
    
    ==    ==
  
  
  `
    )
    .setColor("#3437eb");
  nico.channels.cache.get("868378969140002816").send();
});
nico.on("clickbutton", dugme => {
  Nuggies.giveaways.buttonclick(nico, dugme);
});

/*

* Command Handler

*/
const log = message => {
  console.log(`${message}`);
};
/*=======================================================================================*/
require("events").EventEmitter.prototype._maxListeners = 100;
nico.komutlar = new discord.Collection();
nico.aliases = new discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  console.log(`(!) Bota ${files.length} komut başarıyla yüklendi.`);
  files.forEach(f => {
    if (!f.endsWith(".js")) return;
    let props = require(`./komutlar/${f}`);
    if (!props.help) return;
    nico.komutlar.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      nico.aliases.set(alias, props.help.name);
      global.commands = files;
    });
  });
});
nico.on("message", async message => {
  let p = config.prefix;
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(p)) return;
  let command = message.content.split(" ")[0].slice(p.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.komutlar.has(command)) {
    cmd = client.komutlar.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.komutlar.get(client.aliases.get(command));
  }
  if (cmd) {
    const karaliste = db.fetch(`blacklist.${message.author.id}`);
    const xd = require("discord-buttons");
    const buton1 = new xd.MessageButton()
      .setStyle("url", "green")
      .setLabel("Contact")
      .setURL("https://greesy.negodev.tk/ticket/");
    if (karaliste == true)
      return message.channel.send(
        `<:hayirbei:867465654960128010> | **You Have Been Blacklisted by My Owners! If this may be wrong, contact Support**. `,
        { buttons: buton1 }
      );
    const kapalımıkardesbu = await db.fetch(
      `kapalı.${cmd.help.name}.${message.guild.id}`
    );

    if (kapalımıkardesbu) return;

    //  db.fetch(`karaliste_${message.author.id}` === true ) // message.reply("")
    /*  } else {

    const laura = [];

    client.commands.forEach(dropinnem => {

      laura.push(dropinnem.help.name);

      dropinnem.conf.aliases.forEach(abcdef => laura.push(abcdef));

    });
      const rifleman = require('string-similarity').findBestMatch(command, laura);

    message.channel.send(`That's What You Mean ? ${rifleman.bestMatch.target}`)
  */
  }
  cmd.run(client, message, params, p);
});
const clean = text => {
  if (typeof text === "string")
    return text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  else return text;
};

nico.on("message", async message => {
  const args = message.content.split(" ").slice(1);

  if (message.content.startsWith("!eval")) {
    if (
      ![
        config.evalyetki,
        config.evalyetki1,
        config.evalyetki2,
        config.evalyetki3,
        "661827402069966869"
      ].includes(message.author.id)
    )
      return;

    try {
      const code = args.join(" ");

      let evaled = eval(code);

      if (message.content.includes("nico.token"))
        return message.reply("al `31313313131311`");
      if (typeof evaled !== "string")
        evaled = await require("util").inspect(evaled);

      await message.channel.send(clean(evaled), { code: "xl" });
    } catch (err) {
      await message.channel.send(
        `\`Hata Oluştu \n \` \`\`\`xl\n${clean(err)}\n\`\`\``
      );
    }
  }
});

const Strategy = require("passport-discord").Strategy;

const session = require("express-session");

const passport = require("passport");
app.use('/assets', express.static('server/web/html/css/'))
app.use(express.static(path.join(__dirname, 'public')));

/*

* Burayi Degismiyin

*/

//settings

app.set(express.json());
//Rate Limit
const rateLimit = require("express-rate-limit");
var MongoStore = require("rate-limit-mongo");
const reqLimitter = rateLimit({
  store: new MongoStore({
    uri:
      "mongodb+srv://greesy:greesydb1@greesymongo.4jmok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    collectionName: "rate-limit",
    expireTimeMs: 60 * 60 * 1000,
    resetExpireDateOnChange: true
  }),
  windowMs: 60 * 60 * 1000,
  max: 4,
  message: {
    error: true,
    message:
      "Too many requests, you have been rate limited. Please try again in one hour."
  }
});

function gGiris(req, res, next) {
  if (req.isAuthenticated()) return next();

  req.session.backURL = req.url;

  res.redirect("/l/");
}
function bakimCheck(req, res, next) {
  var bakimDB = db.fetch(`bakim`);

  if (bakimDB == false) return next();
  if (bakimDB == true) {
    render(res, req, "bakim.ejs");
  }
}
function karalisteCheck(req, res, next) {
  if (req.isAuthenticated()) {
    var karalisteDB = db.fetch(`karaliste_${req.user.id}`);
    if (karalisteDB == true) {
      render(res, req, "karaliste.ejs");
    }
  }
  if (karalisteDB == false) {
    next();
  }
}
function adminCheck(req, res, next) {
  if (req.isAuthenticated()) {
    var ussr = req.user.id;
    if (ussr == config.kurucurolid.includes())
      return (
        res.redirect("/404") && db.add(`adminpanel_izinsiz_giris_sayi`, +1)
      );

    next();
    db.add(`adminpanel_giris_sayi`, +1);
  }
}

const dataDir = path.resolve(`${process.cwd()}${path.sep}server`);

const templateDir = path.resolve(
  `${dataDir}${path.sep}web${path.sep}html${path.sep}`
);

const render = (res, req, template, data = {}) => {
  const baseData = {
    bot: nico,

    path: req.path,

    user: req.isAuthenticated() ? req.user : null
  };
  res.render(
    path.resolve(`${templateDir}${path.sep}${template}`),
    Object.assign(baseData, data)
  );
};

app.set("view engine", "ejs");

//AUTH

passport.use(
  new Strategy(
    {
      clientID: "817456729558220812",

      clientSecret: config.secret,

      callbackURL: config.callback,

      scope: ["identify", "guilds", "guilds.join"]
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(() => done(null, profile));
    }
  )
);

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

app.get(
  "/l/",
  (req, res, next) => {
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
  passport.authenticate("discord", { prompt: "none" })
);
app.get(
  "/l/callback",
  passport.authenticate("discord", { failureRedirect: "/l/" }),
  async (req, res) => {
    let banned = await db.fetch(`banned_${req.user.id}`);
    if (banned) {
      nico.users.fetch(req.user.id).then(async a => {
        nico.channels.cache.get(config.logknalid).send(
          new discord.MessageEmbed()
            .setAuthor(a.username, a.avatarURL({ dynamic: true }))
            .setThumbnail(a.avatarURL({ dynamic: true }))
            .setColor("RED")
            .setDescription(
              `[**${a.username}**#${a.discriminator}]() isimli kullanıcı **siteye** giriş yapmaya çalıştı fakat siteden engellendiği için giriş yapamadı.`
            )
            .addField("Username", a.username)
            .addField("User ID", a.id)
            .addField("User Discriminator", a.discriminator)
        );
      });
      req.session.destroy(() => {
        res.json({
          login: false,
          message: "You have been blocked from Greesy.",
          logout: true
        });
        req.logout();
      });
    } else {
      try {
        const request = require("request");
        request({
          url: `https://discordapp.com/api/v8/guilds/${config.server.id}/members/${req.user.id}`,
          method: "PUT",
          json: { access_token: req.user.accessToken },
          headers: { Authorization: `Bot ${nico.token}` }
        });
      } catch {}
      res.redirect(req.session.backURL || "/");
      nico.users.fetch(req.user.id).then(async a => {
        nico.channels.cache.get(config.logkanalid).send(
          new discord.MessageEmbed()
            .setAuthor(a.username, a.avatarURL({ dynamic: true }))
            .setThumbnail(a.avatarURL({ dynamic: true }))
            .setColor("GREEN")
            .setDescription(
              `[**${a.username}**#${a.discriminator}]() Login In Website!`
            )
            .addField("Username", a.username)
            .addField("User ID", a.id)
            .addField("User Discriminator", a.discriminator)
        );
        var ab_free = db.fetch(`abonelik_${req.user.id}`, "free");
        var ab_var = db.fetch(`abonelik_${req.user.id}`, "premium");
        if (ab_free) return res.redirect("/");
        if (ab_var) return res.redirect("/");
        // res.redirect("/");
        db.set(`abonelik_${req.user.id}`, "free");
        var essek = db.fetch(`blacklist.${req.user.id}`);
        if (essek == true)
          return res.json({
            error: "You Are Added Blacklist ,  You don't use website and bot . "
          });
      });
    }
  }
);
app.get("/logout", (req, res) => {
  req.logOut();

  res.redirect("/");
});

// SAYFALAR
app.use("/t", require("./server/routers/index.js"));
app.use("/blogt", require("./server/routers/blog.js"));
//app.use("*",require("./server/routers/404.js"));
app.use("/dashtest", require("./server/routers/dashboard.js"));

const getDurationInMilliseconds = start => {
  const NS_PER_SEC = 1e9;
  const NS_TO_MS = 1e6;
  const diff = process.hrtime(start);

  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};
setInterval(function() {
  const start = process.hrtime();
  const durationInMilliseconds = getDurationInMilliseconds(start);

  db.set(`indexPing`, durationInMilliseconds.toLocaleString());
}, 3600000);

/*

Pages

*/
/*var getIP = require("ipware")().get_ip;

  var ipInfo = getIP(req);

  var geoip = require("geoip-lite");

  var ip = ipInfo.clientIp;
*/

app.get("/", bakimCheck, (req, res) => {
  var getIP = require("ipware")().get_ip;

  var ipInfo = getIP(req);

  var geoip = require("geoip-lite");

  var ip = ipInfo.clientIp;

  const start = process.hrtime();
  const durationInMilliseconds = getDurationInMilliseconds(start);
  res.on("finish", () => {
    console.log(
      `${req.method} ${
        req.originalUrl
      } [FINISHED] ${durationInMilliseconds.toLocaleString()} ms`
    );
    db.set(`indexPing`, durationInMilliseconds.toLocaleString());
  });

  var fetchComment = db.fetch(`commenttest`);
  var langPage = db.fetch(`pageLang_${ipInfo.clientIp}`);
  var tr = require("./langs/tr/index.json");
  /*if(langPage == "tr"){
   // res.json(`${ipInfo.clientIp}`);
    render(res, req, "index.ejs", {
    kardesproclient: nico,
    fetchComment,
    config,
    lang: tr,
    ping:durationInMilliseconds.toLocaleString()
  });

    }*/
  var lang;
  render(res, req, "index.ejs", {
    kardesproclient: nico,
    fetchComment,
    config,
    langPage,
    tr,
    ping: durationInMilliseconds.toLocaleString()
  });
});

app.get("/cmds", bakimCheck, (req, res) => {
  const start = process.hrtime();

  const durationInMilliseconds = getDurationInMilliseconds(start);

  res.on("finish", () => {
    console.log(
      `${req.method} ${
        req.originalUrl
      } [FINISHED] ${durationInMilliseconds.toLocaleString()} ms`
    );

    db.set(`cmdsPing`, durationInMilliseconds.toLocaleString());
  });
  render(res, req, "commands.ejs", {
    ping: durationInMilliseconds.toLocaleString(),
    config
  });
});

//Beta

app.get("/new", bakimCheck, gGiris, (req, res) => {
  const cmm = db.fetch(`commenttest`);
  var beta = db.fetch(`beta_${req.user.id}`);
  if (!beta) return res.redirect("/");
  render(res, req, "newindex.ejs", { cmm, nego: nico });
});
app.get("/new2", (req, res) => {
  const cmm = db.fetch(`commenttest`);

  render(res, req, "newindex2.ejs", { cmm, nego: nico });
});
app.get("/new3", (req, res) => {
  const cmm = db.fetch(`commenttest`);

  render(res, req, "nicat.ejs", { cmm, nego: nico });
});



//Beta

app.get("/stat/", bakimCheck, (req, res) => {
  var client = nico;
  const start = process.hrtime();

  const durationInMilliseconds = getDurationInMilliseconds(start);

  res.on("finish", () => {
    console.log(
      `${req.method} ${
        req.originalUrl
      } [FINISHED] ${durationInMilliseconds.toLocaleString()} ms`
    );

    db.set(`statPing`, durationInMilliseconds.toLocaleString());
  });
  render(res, req, "stat.ejs", {
    nego: client,
    ping: durationInMilliseconds.toLocaleString(),
    config
  });
});

app.get("/index.html", (req, res) => {
  var client = nico;
  //render(res, req, "stat.ejs", {nego:client} );
  res.json("Al Sana HTML 🤣");
});
/*
 *  Serverlist
 */

app.get("/servers", (req, res) => {
  var popularforvotes = db.fetch(`popVotes`);
  var usersSizePop = nico.guilds.cache.filter(m => m.memberCount > 500);
  //usersSizePop.forEach(x=> { x.name})
  var onlineUsersSize = nico.guilds.cache.filter(
    m => m.user.presence.status === "online"
  );
  var dndUsersSize = nico.guilds.cache.filter(
    m => m.user.presence.status === "dnd"
  );
  var idleUsersSize = nico.guilds.cache.filter(
    m => m.user.presence.status === "idle"
  );
  var verifiedServers = db.fetch(`verifiedServers`);
  var publicServers = db.fetch(`publicServer`);
  var chatServers = db.fetch(`chatserver`);
  if (
    !popularforvotes &&
    usersSizePop &&
    onlineUsersSize &&
    dndUsersSize &&
    idleUsersSize &&
    verifiedServers &&
    publicServers &&
    chatServers
  )
    return res.json({ error: "Database Error ! Not Found " });
});

/*
 * Dashboard
 */

app.get("/dash", gGiris, bakimCheck, (req, res) => {
  const user = nico.users.cache.get(req.user.id);
  const perms = discord.Permissions;
  const start = process.hrtime();

  const durationInMilliseconds = getDurationInMilliseconds(start);

  res.on("finish", () => {
    console.log(
      `${req.method} ${
        req.originalUrl
      } [FINISHED] ${durationInMilliseconds.toLocaleString()} ms`
    );

    db.set(`dashServerSelectPing`, durationInMilliseconds.toLocaleString());
  });

  render(res, req, "sunucusec.ejs", {
    perms,
    ping: durationInMilliseconds.toLocaleString(),
    config
  });
});

app.get("/dash/:sunucuID/yonet", async (req, res) => {
  if (!req.user) return res.redirect("/l/");
  let id = req.params.sunucuID;
  let guild = nico.guild;
  if (!id) return res.json({ error: "Bulunamadı" });
  let srev = nico.guilds.cache.get(id);
  let perm = nico.guilds.cache
    .get(id)
    .members.cache.get(req.user.id)
    .permissions.has("MANAGE_GUILD");
  if (!perm) return res.json({ error: "Bulunamadı" });
  const fetchedLogs = nico.guilds.cache
    .get(id)
    .fetchAuditLogs({ type: "MESSAGE_DELETE" });
  var verfyseviye = nico.guilds.cache.get(id).verificationLevel;
  var mfalev = nico.guilds.cache.get(id).mfaLevel;
  var afkK = nico.guilds.cache.get(id).afkChannel;
  var region = nico.guilds.cache.get(id).region;
  var roller = nico.guilds.cache.get(id).roles;
  var ksayi = nico.guilds.cache.get(id).memberCount;
  var banner = nico.guilds.cache.get(id).banner;
  var fetchGuildPre = db.fetch(`aboneliksunucu_${id}`);
  var ping;
  render(res, req, "ayarlar.ejs", {
    id,
    guild,
    fetchedLogs,
    verfyseviye,
    mfalev,
    afkK,
    ksayi,
    region,
    roller,
    banner,
    srev,
    ping,
    fetchGuildPre,
    config,
    moment
  });
});

app.get("/dash/:sunucuID/yonet/embed", async (req, res) => {
  if (!req.user) return res.redirect("/l/");
  let id = req.params.sunucuID;
  let guild = nico.guild;
  var fetchPre = db.fetch(`abonelik_${req.user.id}`);

  if (!id) return res.json({ error: "Bulunamadı" });
  let perm = nico.guilds.cache
    .get(id)
    .members.cache.get(req.user.id)
    .permissions.has("MANAGE_GUILD");
  if (!perm) return res.json({ error: "Bulunamadı" });
  render(res, req, "ayarlar_embed.ejs", { id, fetchPre, guild, config });
});

app.get("/dash/:sunucuID/yonet/counter", async (req, res) => {
  if (!req.user) return res.redirect("/l/");
  let id = req.params.sunucuID;
  let guild = nico.guild;
  var fetchPre = db.fetch(`abonelik_${req.user.id}`);
  var counterAddingsize = db.fetch(`counterAdd_${id}`);
  if (!id) return res.json({ error: "Bulunamadı" });
  let perm = nico.guilds.cache
    .get(id)
    .members.cache.get(req.user.id)
    .permissions.has("MANAGE_GUILD");
  if (!perm) return res.json({ error: "Bulunamadı" });
  render(res, req, "ayarlar_counter.ejs", {
    id,
    fetchPre,
    guild,
    counterAddingsize,
    config
  });
});

app.post("/dash/:sunucuID/yonet/counter", async (req, res) => {
  if (!req.user) return res.redirect("/l/");
  let id = req.params.sunucuID;
  let guild = nico.guild;
  var fetchPre = db.fetch(`abonelik_${req.user.id}`);

  if (!id) return res.json({ error: "Bulunamadı" });
  let perm = nico.guilds.cache
    .get(id)
    .members.cache.get(req.user.id)
    .permissions.has("MANAGE_GUILD");
  if (!perm) return res.json({ error: "Bulunamadı" });

  var rBody = req.body;
  if (rBody == null) {
    res.json("Please Write Informations in Inputs!");
  }
  if (rBody == undefined) {
    res.json("unexcepted Error");
  }
  if (rBody == NaN) {
    res.json("NaN");
  }
  //kufur engel rBody
  if (rBody == "amk") {
    res.json("amk");
  }

  if (rBody == "nah") {
    res.json("al sana nah 😋");
  }
  db.set(`counter_${id}`);
  db.set(`counterNumber_${id + rBody.cnumber}`);
  db.set(`counterChannel_${id + rBody.chid}`);
  db.add(`counterAdd_${id}`, +1);

  res.redirect(`/dash/${id}/yonet/counter`);
});

app.get("/api/dash/:sunucuID/yonet/counter/save", async (req, res) => {
  if (!req.user) return res.redirect("/l/");
  let id = req.params.sunucuID;
  let guild = nico.guild;
  var fetchPre = db.fetch(`abonelik_${req.user.id}`);

  if (!id) return res.json({ error: "Bulunamadı" });
  let perm = nico.guilds.cache
    .get(id)
    .members.cache.get(req.user.id)
    .permissions.has("MANAGE_GUILD");
  if (!perm) return res.json({ error: "Bulunamadı" });

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
  db.add(`counterAdd_${id}`, +1);

  console.log(rBody.chid);
  res.redirect(`/dash/${id}/yonet/counter/`);
});

app.get("/dash/:sunucuID/yonet/mod", async (req, res) => {
  if (!req.user) return res.redirect("/l/");
  let id = req.params.sunucuID;
  let guild = nico.guild;
  var fetchPre = db.fetch(`abonelik_${req.user.id}`);
  var counterAddingsize = db.fetch(`counterAdd_${id}`);
  if (!id) return res.json({ error: "Bulunamadı" });
  let perm = nico.guilds.cache
    .get(id)
    .members.cache.get(req.user.id)
    .permissions.has("MANAGE_GUILD");
  if (!perm) return res.json({ error: "Bulunamadı" });
  render(res, req, "ayarlar-mod.ejs", {
    id,
    fetchPre,
    guild,
    counterAddingsize,
    config
  });
});

app.post("/dash/:sunucuID/yonet/mod", async (req, res) => {
  if (!req.user) return res.redirect("/l/");
  let id = req.params.sunucuID;
  let guild = nico.guild;
  var fetchPre = db.fetch(`abonelik_${req.user.id}`);

  if (!id) return res.json({ error: "Bulunamadı" });
  let perm = nico.guilds.cache
    .get(id)
    .members.cache.get(req.user.id)
    .permissions.has("MANAGE_GUILD");
  if (!perm) return res.json({ error: "Bulunamadı" });

  var rBody = req.body;
  if (rBody == null) {
    res.json("Please Write Informations in Inputs!");
  }
  if (rBody == undefined) {
    res.json("unexcepted Error");
  }
  if (rBody == NaN) {
    res.json("NaN");
  }
  //kufur engel rBody
  if (rBody == "amk") {
    res.json("amk");
  }

  if (rBody == "nah") {
    res.json("al sana nah 😋");
  }

  /*if(req.body.badwordd === "true"){
   res.json("saaaa");
 } */
  if (rBody.createForMe === "true") {
    res.json("sa");
  }

  db.set(`banlog_${id}`, rBody.banid);
  db.set(`kicklog_${id}`, rBody.kickid);

  db.set(`kufur_${id}`, "acik");

  /*
  db.set(`counterNumber_${id + rBody.cnumber}`);
  
  db.set(`counterChannel_${id + rBody.chid}`);
  db.add(`counterAdd_${id}`, +1);
*/
  res.redirect(`/dash/${id}/yonet/mod`);
});

app.get("/api/dash/:sunucuID/yonet/mod/save", async (req, res) => {
  if (!req.user) return res.redirect("/l/");
  let id = req.params.sunucuID;
  let guild = nico.guild;
  var fetchPre = db.fetch(`abonelik_${req.user.id}`);

  if (!id) return res.json({ error: "Bulunamadı" });
  let perm = nico.guilds.cache
    .get(id)
    .members.cache.get(req.user.id)
    .permissions.has("MANAGE_GUILD");
  if (!perm) return res.json({ error: "Bulunamadı" });

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
  db.add(`counterAdd_${id}`, +1);

  console.log(rBody.chid);
  res.redirect(`/dash/${id}/yonet/mod/`);
});

//LeaderBoard
app.get("/leaderboard/:sunucuID", async (req, res) => {
  if (!req.user) return res.redirect("/l/");
  let id = req.params.sunucuID;
  let guild = nico.guild;
  if (!id) return res.json({ error: "Bulunamadı" });
  let srev = nico.guilds.cache.get(id);
  let perm = nico.guilds.cache
    .get(id)
    .members.cache.get(req.user.id)
    .permissions.has("MANAGE_GUILD");
  if (!perm) return res.json({ error: "Bulunamadı" });
  const fetchedLogs = nico.guilds.cache
    .get(id)
    .fetchAuditLogs({ typ: "MESSAGE_DELETE" });
  var verfyseviye = nico.guilds.cache.get(id).verificationLevel;
  var mfalev = nico.guilds.cache.get(id).mfaLevel;
  var afkK = nico.guilds.cache.get(id).afkChannel;
  var region = nico.guilds.cache.get(id).region;
  var roller = nico.guilds.cache.get(id).roles;
  var banner = nico.guilds.cache.get(id).banner;
  var fetchGuildPre = db.fetch(`aboneliksunucu_${id}`);

  render(res, req, "leaderboard.ejs", { id, srev, db });
});
app.get("/dash/:sunucuID/yonet/mylevel", async (req, res) => {
  if (!req.user) return res.redirect("/l/");
  let id = req.params.sunucuID;
  let guild = nico.guild;
  if (!id) return res.json({ error: "Bulunamadı" });
  let srev = nico.guilds.cache.get(id);
  let perm = nico.guilds.cache
    .get(id)
    .members.cache.get(req.user.id)
    .permissions.has("MANAGE_GUILD");
  if (!perm) return res.json({ error: "Bulunamadı" });
  var fetchGuildPre = db.fetch(`aboneliksunucu_${id}`);
  var lvl = await db.fetch(`lvl_${req.user.id}_${id}`);
  var xp = await db.fetch(`xp_${req.user.id}_${id}`);
  var xpToLvl = await db.fetch(`xpToLvl_${req.user.id}_${id}`);

  render(res, req, "mylevel.ejs", { id, srev, db, lvl, xp, xpToLvl });
});

app.get("/te", (req, res) => {
  render(res, req, "ayarlar_counter.ejs");
});

app.get("/shard", (req, res) => {
  const shardClient = nico.ws.shards;
  render(res, req, "shard-analitycs.ejs", { shardClient });
});

/*
 * ADMIN PANEL
 */
app.get("/admin", gGiris, adminCheck, (req, res) => {
  const panelgsayi = db.fetch(`adminpanel_giris_sayi`);
  const panelizinsizgsayi = db.fetch(`adminpanel_izinsiz_giris_sayi`);
  const kullsayi = nico.guilds.cache.size;
  const cacheGuild = nico.guilds;
  let sitedatalari = require("./server/mongodb/countrydb.js");

  let siteD = sitedatalari.findOne({ id: config.clientID });

  //let siteD =  db.fetch(`country`);
  const cmdsize = nico.komutlar.size;
  render(res, req, "admin/index.ejs", {
    panelgsayi,
    panelizinsizgsayi,
    cacheGuild,
    cmdsize,
    siteD
  });
});

app.get("/admin/promocode/", gGiris, adminCheck, (req, res) => {
  render(res, req, "admin/promo-new.ejs");
});

app.post("/admin/promocode", (req, res) => {
  var kod = req.body.kod;
  if (!kod) return res.json({ error: "write promocode name" });
  db.set(`promocodes_${kod}`, "premium");
  //res.json({success: "Successfull Added Promo Code To System"});
  res.redirect("/admin/promocode");
});

app.get("/admin/maintance/", gGiris, adminCheck, (req, res) => {
  render(res, req, "admin/maintance.ejs");
});

app.post("/admin/maintance/on", (req, res) => {
  //render(res, req, "admin/maintance.ejs");
  db.set(`bakim`, true);
  res.redirect("/admin/maintance/");
});

app.post("/admin/maintance/off", (req, res) => {
  //render(res, req, "admin/maintance.ejs");
  db.set(`bakim`, false);
  res.redirect("/admin/maintance/");
});

app.get("/admin/annoucument/", gGiris, adminCheck, (req, res) => {
  render(res, req, "admin/annoucument.ejs");
});

app.post("/admin/annoucument/", (req, res) => {
  var duyuru = req.body.duyurutext;
  db.set(`duyuru`, duyuru);
  res.redirect("/");
});
app.get("/ticket", gGiris, (req, res) => {
  render(res, req, "ticket.ejs", { config });
});
app.post("/ticket/create", gGiris, (req, res) => {
  /*  var sze = db.fetch(`myTicketssize_${req.user.id}`);
  if(sze > 2){
    res.json({err: "You cannot open more than 2 Support Requests."});
  }*/
  var user = req.user.username;
  var konu = req.body.konuturu;
  var rBody = req.body;
  var mesaj = req.body.ticketmesaj;
  var ticketID = Random(20);
  var tData = {
    user: user,
    konu: konu,
    message: mesaj,
    ticketID: ticketID,
    waitMessage: "Wait Until Moderators Respond..."
  };
  db.push(`ticket_${ticketID}`, tData);
  db.push(`myTickets.${req.user.id}`, tData);
  db.push(`tickets`, tData);
  db.add(`myTicketssize_${req.user.id}`, +1);
  res.redirect("/ticket/view/" + ticketID);
  var emb = new discord.MessageEmbed().setTitle("Greesy").setColor("#3437eb")
    .setDescription(`

 A New Support Request
 
 ===== Ticket Information =====
 
 Author: <@${req.user.id}>
 Type: ${konu}
 
 ================================
 
 [[Answer Ticket]](https://greesy.negodev.tk/admin/ticket/${ticketID}/answer/)
 
 <@${
   nico.guilds.cache
     .get("838099680276512778")
     .roles.cache.get("863849390611497001").name
 }>



`);

  nico.channels.cache.get("872919039079510047").send(emb);
});

/*
 * Subscribe API
 */

app.get("/user/subscribe", bakimCheck, (req, res) => {
  var body = req.body;
  render(res, req, "aboneol.ejs");
});

app.get("/user/subscribe/on", gGiris, (req, res) => {
  // var body = req.body;
  // var fetch = true;
  var kredisi = db.fetch(`kredi_${req.user.id}`);
  if (kredisi == 30) {
    res.json({ success: "The Subscription Was Added" });
    db.set(`abonelik_${req.user.id}`, "premium");
    db.delete(`kredi_${req.user.id}`, -30);
  }
  if (kredisi < 29) {
    res.json({ error: "Kredin Yetersiz" });
  }
  res.json("error");
});

app.get("/user/subscriptions/", (req, res) => {
  if (!req.user) return res.redirect("/l");
  var user = req.user.id;
  var userr = req.user;
  let ping = 0;
  var fetch_abonelik = db.fetch(`abonelik_${user}`);
  render(res, req, "abonelik.ejs", {
    abonelik: fetch_abonelik,
    user,
    userr,
    config,
    ping
  });
});

app.get("/user/subscriptions/delete", (req, res) => {
  if (!req.user) return res.redirect("/l");
  var user = req.user.id;
  var userr = req.user;

  db.delete(`abonelik_${req.user.id}`, "premium");
  res.redirect("/user/subscriptions");
  db.set(`abonelik_${req.user.id}`, "free");
});

/*
 * COMMENT System And COMMENT API
 */

app.get("/user/comment", (req, res) => {
  if (!req.user) return res.redirect("/l/");
  var abIzin = db.fetch(`abonelik_${req.user.id}`);
  render(res, req, "comment.ejs", { abIzin, config });
});

app.post("/user/comment", gGiris, (req, res) => {
  var cBody = req.body.comment;
  var user = req.user.id;
  moment.locale("tr");
  /*var commentInfo = {
    commentAuthor: req.user.username,
    comment: cBody,
    cm:req.user
  };*/
  /*if(cBody == "amk"){
    res.json("Küfürlü Yorum Kabul Edilemez");
  };*/
  //db.push(`comment`,commentInfo);
  // db.defaults({ posts: []}).write()
  // db.get('comment').push(commentInfo).write()

  // var logtest = db.fetch(`comment`);
  // console.log(logtest);

  var vat = {
    user: req.user.username,

    comment: cBody,
    cm: req.user,
    tarih: moment(Date.now()).locale("en").format("LLL")
    
  };

  db.push(`commenttest`, vat);
  res.redirect("/");
});

/*
 *  Api Key
 */

app.get("/user/apikey", gGiris, (req, res) => {
  var emaili = req.user.email;
  //res.json(emaili);
  render(res, req, "apikey.ejs");
});
app.post("/user/apikey", gGiris, (req, res) => {
  const sendmail = require("sendmail")();

  const emaili = req.user.email;
  var olustur = Random(10);
  db.set(`apikey.${req.user.id}`, olustur);
  var nego = `<h1>Greesy Bot </h1> <br>  <p style="color:green;">Your Api Key Request Approved ! </p> <br> <div class="container"><h5>Your Api Key : </h5> <br> <br> <h5>${olustur}</h5></div>`;
  sendmail(
    {
      from: "smtp@negodev.tk",

      to: emaili,

      subject: "Greesy Bot Api Key Request",

      html: "Mail of test sendmail "
    },
    function(err, reply) {
      console.log(err && err.stack);

      console.dir(reply);
    }
  );
});

/*
 * Haber Sistemi
 */
app.get("/blog/", bakimCheck, (req, res) => {
  var fetchHaber = db.fetch(`habr`);

  render(res, req, "blog.ejs", {
    blogPost: posts,
    postsLen: postsL,
    fetchHaber
  });
});
let posts = [];
//let posts = db.fetch("post")
let postsL = posts.length;
app.get("/admin/blog/new", gGiris, (req, res) => {
  if (req.user.id != config.kurucurolid) return res.redirect("/");

  var user = req.user;
  render(res, req, "blog_new.ejs", { user });
});
app.get("/blog/:postName", gGiris, bakimCheck, (req, res) => {
  var a = 0;
  console.log(req.params.postName);
  var iDb = db.fetch(`haber_${req.params.postName}`);
  posts.forEach(function(title) {
    let pName = _.lowerCase(req.params.postName);
    let pTitle = _.lowerCase(title.pT);
    // let pAuthor = _.lowercase(title.author);
    if (pName === pTitle) {
      a = 1;
      render(res, req, "blog_view.ejs", {
        blogPostTitle: title.pT,
        blogPostBody: title.pB,
        config
      });
    }
  });
  if (a == 1) {
    console.log("Match found!!");
  } else {
    console.log("match not found");
  }
});
app.post("/admin/blog/new", gGiris, (req, res) => {
  if (req.user.id != config.kurucurolid) return res.redirect("/");
  let post = {
    pT: req.body.postTitle,
    pB: req.body.postBody
  };
  posts.push(post);
  db.push(`haber_${post.pT}`, post);
  db.push(`habr`, post);
  var Log = db.fetch(`haber_${post.pT}`);
  console.log(Log);
  res.redirect("/");
});
app.get("/testblog", (req, res) => {
  var fetchHaber = db.fetch(`habr`);
  render(res, req, "blogtest.ejs", { fetchHaber });
});

/*
 * API
 */
app.get("/api/accesstoken", gGiris, (req, res) => {
  res.send(req.user.accessToken);
});
//key check

app.get("/api/v1/keycheck/:key", (req, res) => {
  var key = req.params.key;
  var keyUser = db.fetch(`key`);
  if (key == "nego") {
    res.json("true");
  }
  //  render(res, req, "ayarlar_counter.ejs");
});

app.get("/api/v1/promo/generate/:kod", gGiris, (req, res) => {
  var kod = req.params.kod;
  if (!kod) return res.json({ error: "not found" });
  db.set(`promocodes_${kod}`, "premium");
  res.json({ success: "Successfull Added Promo Code To System" });
});

app.get("/api/v1/promocode/:promo", gGiris, (req, res) => {
  var params = req.params.promo;
  var fetchpromos = db.fetch(`promocodes_${params}`, "premium");
  if (params == "free_premium") {
    res.json({ success: "The Subscription Was Added" });
    db.set(`abonelik_${req.user.id}`, "premium");
  }
  if (params == "free") {
    res.json({ success: "The Subscription Was Added" });

    db.set(`abonelik_${req.user.id}`, "free");
  }
  if (fetchpromos) {
    res.json({ success: "The Subscription Was Added" });

    db.set(`abonelik_${req.user.id}`, "premium");
  }
  res.json({ error: "Permission Denied" });
});
//....
app.get("/api/v1/promocode/check/:promo", (req, res) => {
  var params = req.params.promo;

  var fetchpromos = db.fetch(`promocodes_${params}`, "premium");

  if (params == "free_premium") {
    res.json({ success: "true" });
  }

  if (params == "free") {
    res.json({ success: "true" });
  }

  if (fetchpromos) {
    res.json({ success: "true" });
  }

  res.json({ error: "Permission Denied" });
});

/*
 * Gift Api
 */

app.get("/api/v1/gift/:giftKod/", gGiris, (req, res) => {
  var fetchgift = db.fetch(`gift_${req.params.giftKod}`);
  if (fetchgift === false) {
    res.json({ error: "İnvalid Gift Code" });
  }
  /*
   * Fetch Gift Code
   */
  if (fetchgift === true) {
    res.json({ success: "The Gift Claimed" });
    db.set(`abonelik_${req.user.id}`, "premium");
    db.set(`giftkullanim_${req.params.giftKod}`, 1);
  }
  var kullanimsayi = db.fetch(`giftkullanim_${req.params.giftkod}`);

  if (kullanimsayi > 1) {
    res.json({ error: "This Gift Is Already Received!" });
  }
});

// Language Api
app.get("/api/lang", (req, res) => {
  var href = req.query.href;
  if (href == "restore") {
    res.json({ success: "Restored Language" });
    db.delete(`pageLang_${ipInfo.clientIp}`);
  }
  if (!href) return res.json({ error: "Please Write Lang Code" });
  var eng;
  var tr = require("./langs/tr/index.json");
  var def = "en";
  var getIP = require("ipware")().get_ip;
  var ipInfo = getIP(req);
  var geoip = require("geoip-lite");
  var ip = ipInfo.clientIp;
  db.set(`pageLang_${ipInfo.clientIp}`, href);
  res.redirect("/");
});

app.get("/api/pings", (req, res) => {
  var Nego = {
    bot_ping: `${nico.ws.ping} ms`,
    status: "ONLINE",
    Database_Locations: {
      us4:
        "STATUS:CONNECTING.. ERR ! ERRMSG: Requesting us4.greesy.negodev.tk:3000 Was Responding",
      tr1: "STATUS: ONLINE DATABASE SIZE: 16000 mb",
      aze1AMDRyzen: "STATUS: ONLINE DATABASE SIZE: 560000 mb",
      trAMDRyzen: "STATUS: ONLINE DATABASE SIZE 32000 mb"
    },
    Dashboard_statics: {
      index: `STATUS: ONLINE PING: ${db.fetch("indexPing")} ms`
    }
  };
  res.json(Nego);
});

const keyRouter = require("./server/api/keyAuth.js");
//app.use("/api/",keyRouter)

nico.login(process.env.TOKEN);
const listener = app.listen(process.env.PORT, () => {
  /*console.log("Your app is listening on port " + listener.address().port);

  console.log(`

  ***************

  ****************

  Server Başlatıldı PORT ${process.env.PORT}

  

  Bot Discorda Bağlandı 

  

  ******************

  ******************

  

  `);*/
});
nico.on("message", async msg => {
  if (msg.content.startsWith("!test")) {
    // if(msg.author.id == "852853360612605952"){
    // msg.reply('test')
    const disbut = require("discord-buttons");
    /*let option = new MessageMenuOption()

    .setLabel('Your Label')

    .setEmoji('🍔')

    .setValue('menuid')

    .setDescription('Custom Description!')

    

let select = new MessageMenu()

    .setID('customid')

    .setPlaceholder('Click me! :D')

    .setMaxValues(1)

    .setMinValues(1)

    .addOption(option)
*/
    let button = new disbut.MessageButton()

      .setLabel("Restart!")

      .setID("myid")

      .setStyle("blurple");
    msg.channel.send("test!", { buttons: [button] });
    // return process.exit();
    console.log(`
    Bot Has Restarted By ${msg.author} :) 
    `);
    // }
  }
});
/*
nico.on('clickButton', async (button) => {
//.checkEnd()
//  await button.reply.defer()
 // await button.reply.think()

//To make your reply only send to the user who clicked the button, add true to the options param

//await button.reply.think(true)
  
 // msg.channel.send('te')
  await button.reply.send('This is content replied!', true)

 
 // msg.delete({timeout: 4000})
  
    //Your code here...

});*/
/*
nico.on("message", async msg => {
if(!msg.content.startsWith('!sggggggggggggg')){
  const disbut = require('discord-buttons');

let sunucu = new disbut.MessageButton()

  .setLabel('Sunucu Sayısı!')

  .setID('gg')

  .setStyle('blurple');
  msg.channel.send('Here Is My Stats', {buttons: [sunucu]}) 
 } 
  
 });
nico.on('clickButton', async (sunucu) => {

    //Your code here...
await sunucu.reply.send(`**${nico.guilds.cache.size} ** __Servers! __`, true)


});*/
//Left!
nico.on("guildMemberAdd", async member => {
  let kanal = db.fetch(`counterChannel_${member.guild.id}`);
  let rakam = db.fetch(`counterNumber_${member.guild.id}`);
  nico.channels.cache.get(kanal).send(`
  <a:grs:691620276055703573> **${
    member.user.tag
  }** Joined The Server! We're \`${rakam -
    member.guild.memberCount}\` Away From Being **${rakam}**! 
 `); //Joined! We're 8 Away From Being 5!
});

nico.on("guildMemberRemove", async member => {
  let kanal = db.fetch(`counterChannel_${member.guild.id}`);
  let rakam = db.fetch(`counterNumber_${member.guild.id}`);
  nico.channels.cache.get(kanal).send(`
  <a:cks:691620378937917451> **${
    member.user.tag
  }** Left The Server! We're \`${rakam -
    member.guild.memberCount}\` Away From Being **${rakam}**! 
 `); //Joined! We're 8 Away From Being 5!
});
nico.on("guildMemberAdd", async member => {
  let role = db.fetch(`autoroleRole_${member.guild.id}`);
  let ch = db.fetch(`autoroleChannel_${member.guild.id}`);
  ch.send(`
  **${member.user.tag}** Joined. **${role}** Role Given with Automatic Role System! 
  `);
});
/*
mongoose.connection.on('connected', () => {

  console.log('connected');

  console.log(mongoose.connection.readyState); //logs 1

});*/
nico.on("message", async message => {
  if (message.content.startsWith("calis")) {
    const canvacord = require("canvacord");
    const Canvas = require("discord-canvas");

    //const discord-canvas =require
    //let kontrol = db.fetch(`resimli_${message.guild.id}`)
    //if(!kontrol) return;
    //if(kontrol){
    const card = await new Canvas.Goodbye()
      .setUsername("sjshsj")
      .setDiscriminator("0001")

      .setMemberCount("140")

      .setGuildName("Server DEV")

      .setAvatar("https://www.site.com/avatar.jpg")

      .setColor("border", "#8015EA")

      .setColor("username-box", "#8015EA")

      .setColor("discriminator-box", "#8015EA")

      .setColor("message-box", "#8015EA")

      .setColor("title", "#8015EA")

      .setColor("avatar", "#8015EA")

      .setBackground("https://site.com/background.jpg")

      .toAttachment();

    card
      .build()

      .then(data => {
        const dc = require("discord.js");
        const attachment = new dc.MessageAttachment(data, "test.png");

        message.channel.send(attachment);
      });
  }

  //}
});

nico.on("clickButton", async button => {
  if (button.id === "B1") {
    button.reply.defer();
    button.channel.send(`${button.clicker.user.tag} clicked button!`);
  }
  if (button.id === "B2") {
    button.reply.defer();
    button.channel.send("ok");
  }
  if (button.id === "vv") {
    button.reply.defer();
    button.channel.send(`
  **Only You Know This Message! What about this one?  Only You Know This Message! So why Do I See This? I'll tell you about it. My Owners Made Users Who Clicked the Message Button See It So That It Wouldn't Spam or Disturb Users! **
  
  > Links:
    [[Invite]](https://greesy.nicatdcw.com/invite) 
    [[Dashboard]](https://greesy.nicatdcw.com) 
    [[Guild Dashboard]](https://greesy.nicatdcw.com/dash/${message.guild.id}/yonet) 
  `);
  }
});
nico.guilds.cache.forEach(g => {
  g.fetchInvites().then(guildInvites => {
    invites[g.id] = guildInvites;
  });
});
nico.on("guildMemberAdd", async member => {
  member.guild.fetchInvites().then(davetler => {
    const eski = davetler[member.guild.id];

    //burası karşılaştırma için lazım ^^

    davetler[member.guild.id] = davetler;

    //burada davetleri güncelledik

    //şimdi karşılaştırma yapalım

    const davet = davetler.find(x => eski.get(x.code).uses < x.uses);

    const davetci = member.guild.members.cache.get(davet.inviter.id);

    const kanal = member.guild.channels.cache.get(
      db.get(`davet_kanal.${member.guild.id}`)
    );

    if (!kanal) return;

    kanal.send(
      `${member.user} sunucuya katıldı. Davet eden ${member.user.username}#${member.user.discriminator}. Toplam davet sayısı: ${davet.uses}`
    );

    const roller = db.get(`roller_${member.guild.id}`);

    roller.forEach(role => {
      if (davet.uses >= role.invite) {
        const roll = member.guild.roles.cache.get(role.roleId);

        davetci.roles.add(roll);

        davetci.user.send(
          `Artık ${role.invite} davetin olduğu için sana ${roll} rolünü verdik`
        );
      }
    });
  });
});

nico.on("guildMemberRemove", async member => {
  member.guild.fetchInvites().then(davetler => {
    const eski = davetler[member.guild.id];

    //burası karşılaştırma için lazım ^^

    davetler[member.guild.id] = davetler;

    //burada davetleri güncelledik

    //şimdi karşılaştırma yapalım

    const davet = davetler.find(x => eski.get(x.code).uses > x.uses);

    const davetci = member.guild.members.cache.get(davet.inviter.id);

    const kanal = member.guild.channels.cache.get(
      db.get(`davet_kanal.${member.guild.id}`)
    );

    if (!kanal) return;

    kanal.send(
      `${member.user} sunucudan ayrıldı. Davet eden ${member.user.username}#${member.user.discriminator}. Toplam davet sayısı: ${davet.uses}`
    );
    // Nicat Has Left the Server! Invited Nego Had a Total of 2000 Invitations
  });
});

nico.on("roleDelete", async function(message, role) {
  let kontroll = db.fetch(`modlogrolk_${role.guild.id}`);
  if (!kontroll) return;
  if (kontroll) {
    const fetch = await role.guild
      .fetchAuditLogs({ type: "ROLE_DELETE" })
      .then(log => log.entries.first());

    let yapanad = fetch.executor;

    let isim = role.name;

    let renk = role.color;

    let ayrı = role.hoist;

    let sıra = role.position;

    let yetkiler = role.permissions;

    let etiketlenebilir = role.mentionable;
    if (yapanad == message.guild.ownerID) return;
    role.guild.roles.create({
      name: isim,

      color: renk,

      hoist: ayrı,

      position: sıra,

      permissions: yetkiler,

      mentionable: etiketlenebilir
    });

    let teqnoembed = new discord.MessageEmbed()

      .setTitle("Warning! ")

      .setColor("RED")

      .setFooter("Greesy - Guard System")

      //.setDescription(`\`${role.guild.name}\` adlı sunucunuzda ${isim} adına sahip rol, ${yapanad} adlı kişi tarafından silindi. Ben tekrardan onardım!`)
      //.setDescription(` @Bok Role Deleted on Your Nicat Server! By: @Nicat, @Bok Role Deleted on Your Nicat Server! And I'm Back on! By: @Nicat, `)
      .setDescription(
        `> **${isim}** Role Deleted on Your **${role.guild.name}** Server! And I'm Back on! By: \`${yapanad}#${yapanad.discriminator}\` `
      );
    role.guild.owner.send(teqnoembed);
  }
});

nico.on("channelDelete", async function(channel) {
  let rol = await db.fetch(`modlogkanalk_${channel.guild.id}`);

  if (rol) {
    const guild = channel.guild.cache;

    let channelp = channel.parentID;

    channel.clone().then(z => {
      let kanal = z.guild.channels.find(c => c.name === z.name);

      kanal.setParent(
        kanal.guild.channels.find(channel => channel.id === channelp)
      );
    });
  }
});
nico.on("message", async msg => {
  const i = await db.fetch(`kufur_${msg.guild.id}`);
  if (i == "acik") {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "amq"
    ];
    if (kufur.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          return msg.reply(
            "This Server Owners Actived **BadWord** Blocker. Take Care of Yourself! "
          );
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});
nico.on("message", async message => {
  if (message.content.startsWith("!random")) {
    let ran = message.guild.members.cache.get().random();
    // message.channel.send(`Kazanan: <@${run}>`)
    message.react("🍪");
    const filter = (reaction, user) => {
      return reaction.emoji.name === "🍪" && user.id === message.author.id;
    };

    const collector = message.createReactionCollector(filter, { time: 15000 });

    collector.on("collect", (reaction, user) => {
      let dene = message.guild.members.cache.get(filter).random();
      console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
    });

    collector.on("end", collected => {
      console.log(`Collected ${collected.size} items`);
    });
  }
});
nico.on("message", async message => {
  if (message.content.startsWith("!tictactoe")) {
    var args = message.content.split(0);
    let opponent =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!opponent)
      return message.channel.send("Please provide the user to challenge!");

    let fighters = [message.member.id, opponent.id].sort(() =>
      Math.random() > 0.5 ? 1 : -1
    );

    let Args = {
      user: 0,

      a1: {
        style: "gray",

        label: "➖",

        disabled: false
      },

      a2: {
        style: "gray",

        label: "➖",

        disabled: false
      },

      a3: {
        style: "gray",

        label: "➖",

        disabled: false
      },

      b1: {
        style: "gray",

        label: "➖",

        disabled: false
      },

      b2: {
        style: "gray",

        label: "➖",

        disabled: false
      },

      b3: {
        style: "gray",

        label: "➖",

        disabled: false
      },

      c1: {
        style: "gray",

        label: "➖",

        disabled: false
      },

      c2: {
        style: "gray",

        label: "➖",

        disabled: false
      },

      c3: {
        style: "gray",

        label: "➖",

        disabled: false
      }
    };

    let { MessageButton, MessageActionRow } = require("discord-buttons");

    let msg = await message.channel.send(
      `**TicTacToe** | <@!${Args.userid}>'s turn (⭕)`
    );

    tictactoe(msg);

    async function tictactoe(m) {
      Args.userid = fighters[Args.user];

      let won = {
        "⭕": false,

        "❌": false
      };

      if (
        Args.a1.label == "⭕" &&
        Args.b1.label == "⭕" &&
        Args.c1.label == "⭕"
      )
        won["⭕"] = true;

      if (
        Args.a2.label == "⭕" &&
        Args.b2.label == "⭕" &&
        Args.c2.label == "⭕"
      )
        won["⭕"] = true;

      if (
        Args.a3.label == "⭕" &&
        Args.b3.label == "⭕" &&
        Args.c3.label == "⭕"
      )
        won["⭕"] = true;

      if (
        Args.a1.label == "⭕" &&
        Args.b2.label == "⭕" &&
        Args.c3.label == "⭕"
      )
        won["⭕"] = true;

      if (
        Args.a3.label == "⭕" &&
        Args.b2.label == "⭕" &&
        Args.c1.label == "⭕"
      )
        won["⭕"] = true;

      if (
        Args.a1.label == "⭕" &&
        Args.a2.label == "⭕" &&
        Args.a3.label == "⭕"
      )
        won["⭕"] = true;

      if (
        Args.b1.label == "⭕" &&
        Args.b2.label == "⭕" &&
        Args.b3.label == "⭕"
      )
        won["⭕"] = true;

      if (
        Args.c1.label == "⭕" &&
        Args.c2.label == "⭕" &&
        Args.c3.label == "⭕"
      )
        won["⭕"] = true;

      if (won["⭕"] != false) return m.edit("⭕ won!");

      if (
        Args.a1.label == "❌" &&
        Args.b1.label == "❌" &&
        Args.c1.label == "❌"
      )
        won["❌"] = true;

      if (
        Args.a2.label == "❌" &&
        Args.b2.label == "❌" &&
        Args.c2.label == "❌"
      )
        won["❌"] = true;

      if (
        Args.a3.label == "❌" &&
        Args.b3.label == "❌" &&
        Args.c3.label == "❌"
      )
        won["❌"] = true;

      if (
        Args.a1.label == "❌" &&
        Args.b2.label == "❌" &&
        Args.c3.label == "❌"
      )
        won["❌"] = true;

      if (
        Args.a3.label == "❌" &&
        Args.b2.label == "❌" &&
        Args.c1.label == "❌"
      )
        won["❌"] = true;

      if (
        Args.a1.label == "❌" &&
        Args.a2.label == "❌" &&
        Args.a3.label == "❌"
      )
        won["❌"] = true;

      if (
        Args.b1.label == "❌" &&
        Args.b2.label == "❌" &&
        Args.b3.label == "❌"
      )
        won["❌"] = true;

      if (
        Args.c1.label == "❌" &&
        Args.c2.label == "❌" &&
        Args.c3.label == "❌"
      )
        won["❌"] = true;

      if (won["❌"] != false) return m.edit("❌ won!");

      let a1 = new MessageButton()

        .setStyle(Args.a1.style)

        .setLabel(Args.a1.label)

        .setID("a1")

        .setDisabled(Args.a1.disabled);

      let a2 = new MessageButton()

        .setStyle(Args.a2.style)

        .setLabel(Args.a2.label)

        .setID("a2")

        .setDisabled(Args.a2.disabled);

      let a3 = new MessageButton()

        .setStyle(Args.a3.style)

        .setLabel(Args.a3.label)

        .setID("a3")

        .setDisabled(Args.a3.disabled);

      let b1 = new MessageButton()

        .setStyle(Args.b1.style)

        .setLabel(Args.b1.label)

        .setID("b1")

        .setDisabled(Args.b1.disabled);

      let b2 = new MessageButton()

        .setStyle(Args.b2.style)

        .setLabel(Args.b2.label)

        .setID("b2")

        .setDisabled(Args.b2.disabled);

      let b3 = new MessageButton()

        .setStyle(Args.b3.style)

        .setLabel(Args.b3.label)

        .setID("b3")

        .setDisabled(Args.b3.disabled);

      let c1 = new MessageButton()

        .setStyle(Args.c1.style)

        .setLabel(Args.c1.label)

        .setID("c1")

        .setDisabled(Args.c1.disabled);

      let c2 = new MessageButton()

        .setStyle(Args.c2.style)

        .setLabel(Args.c2.label)

        .setID("c2")

        .setDisabled(Args.c2.disabled);

      let c3 = new MessageButton()

        .setStyle(Args.c3.style)

        .setLabel(Args.c3.label)

        .setID("c3")

        .setDisabled(Args.c3.disabled);

      let a = new MessageActionRow().addComponents([a1, a2, a3]);

      let b = new MessageActionRow().addComponents([b1, b2, b3]);

      let c = new MessageActionRow().addComponents([c1, c2, c3]);

      let buttons = { components: [a, b, c] };

      m.edit(
        `**TicTacToe** | <@!${Args.userid}>'s turn (${
          Args.user == 0 ? "⭕" : "❌"
        })`,
        buttons
      );

      const filter = button => button.clicker.user.id === Args.userid;

      const collector = m.createButtonCollector(filter, {
        max: 1,
        time: 30000
      });

      collector.on("collect", b => {
        if (Args.user == 0) {
          Args.user = 1;

          Args[b.id] = {
            style: "green",

            label: "⭕",

            disabled: true
          };
        } else {
          Args.user = 0;

          Args[b.id] = {
            style: "red",

            label: "❌",

            disabled: true
          };
        }

        b.reply.defer();

        const map = (obj, fun) =>
          Object.entries(obj).reduce(
            (prev, [key, value]) => ({
              ...prev,

              [key]: fun(key, value)
            }),

            {}
          );

        const objectFilter = (obj, predicate) =>
          Object.keys(obj)

            .filter(key => predicate(obj[key]))

            .reduce((res, key) => ((res[key] = obj[key]), res), {});

        let Brgs = objectFilter(
          map(Args, (_, fruit) => fruit.label == "➖"),
          num => num == true
        );

        if (Object.keys(Brgs).length == 0) return m.edit("It's a tie!");

        tictactoe(m);
      });

      collector.on("end", collected => {
        if (collected.size == 0)
          m.edit(`<@!${Args.userid}> didn\'t react in time! (30s)`);
      });
    }
  }
});

nico.on("message", async msg => {
  if (msg.content.startsWith("!track")) {
    nico.player.on("trackStart", (message, track) => {
      message.channel.send(`Now playing ${track.title}...`);
    });
  }
});
nico.on("guildMemberAdd", async member => {
  const Discord = require("discord.js");
  const db = require("quick.db");
  const Canvas = require("canvas"),
    Image = Canvas.Image,
    Font = Canvas.Font,
    path = require("path");
  const snekfetch = require("snekfetch");
  const request = require("node-superfetch");

  //module.exports = async member => {
  var randomMsg = [""];
  var randomMsg_integer =
    randomMsg[Math.floor(Math.random() * randomMsg.length)];

  let msj = await db.fetch(`girisM_${member.guild.id}`);
  if (!msj) msj = `{uye}, ${randomMsg_integer}`;
  let memberChannel = await db.fetch(`gcc_${member.guild.id}`);

  const canvas = Canvas.createCanvas(360, 250);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://media.discordapp.net/attachments/860622363175288842/870221346792144936/20210729_122834.jpg"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#D3D3D3`;
  ctx.font = `25px "S&amp;S Nickson One"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username.toUpperCase()}`, 170, 210);

  let avatarURL = member.user.avatarURL() || member.user.defaultAvatarURL;
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(112 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 112, 55, 110, 110);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "Logged-Greesy.jpg"
  );
  member.guild.channels.cache.get(memberChannel).send(attachment);
  member.guild.channels.cache
    .get(memberChannel)
    .send(msj.replace("{uye}", member).replace("{sunucu}", member.guild.name));
  if (member.user.bot)
    return member.guild.channels.cache
      .get(memberChannel)
      .send(`🤖 This Is Bot: ${member.user.tag}`);
});
nico.on("guildMemberRemove", async member => {
  //const Canvas = require('canvas') , Image = Canvas.Image , Font = Canvas.Font , path = require('path');const snekfetch = require('snekfetch');const request = require('node-superfetch');

  const Discord = require("discord.js");
  const Canvas = require("canvas"),
    Image = Canvas.Image,
    Font = Canvas.Font,
    path = require("path");
  const snekfetch = require("snekfetch");
  const request = require("node-superfetch");
  var randomMsg = [""];
  var randomMsg_integer =
    randomMsg[Math.floor(Math.random() * randomMsg.length)];

  let paket = await db.fetch(`pakets_${member.id}`);
  let memberChannel = await db.fetch(`gcc_${member.guild.id}`);
  let msj = await db.fetch(`cikisM_${member.guild.id}`);
  if (!msj) msj = `{uye}, ${randomMsg_integer}`;

  const canvas = Canvas.createCanvas(360, 250);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://media.discordapp.net/attachments/860622363175288842/870221931411013644/20210729_123100.jpg"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#D3D3D3`;
  ctx.font = `25px "Warsaw"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username.toUpperCase()}`, 170, 210);

  let avatarURL = member.user.avatarURL || member.user.defaultAvatarURL;
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(112 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 112, 55, 110, 110);

  const attachment = new Discord.Attachment(
    canvas.toBuffer(),
    "Left-Greesy.jpg"
  );
  member.guild.channels.get(memberChannel).send(attachment);
  member.guild.channels
    .get(memberChannel)
    .send(msj.replace("{uye}", member).replace("{sunucu}", member.guild.name));
  if (member.user.bot)
    return member.guild.channels
      .get(memberChannel)
      .send(`🤖 This Is Bot:, ${member.user.tag}`);
});
nico.on("message", async (msg, user) => {
  const request = require("node-superfetch");
  const db = require("quick.db");
  const ms = require("parse-ms");
  let zaman = db.fetch(`${msg.guild.id}.slowmode`);
  if (zaman === undefined) zaman = 0;
  let timeout = zaman;
  let nego = await db.fetch(`slowmodee_${msg.author.id}`);

  if (nego !== null && timeout - (Date.now() - nego) > 0) {
    let time = ms(timeout - (Date.now() - nego));
    msg.delete();
    msg.channel
      .send(
        "**On this channel, slow mode is on, you need to wait without texting!**"
      )
      .then(message => message.delete(2000));
  } else {
    if (msg.content.length > 0) {
      db.set(`slowmodee_${msg.author.id}`, Date.now());
    }
  }
});
//.
nico.on("guildMemberBoost", async member => {
  let kontrol = db.fetch(`modlog_${member.guild.id}.aktif`);
  var kanal = db.fetch(`modlog_${member.guild.id}.kanal`);
  if (!kontrol) return;
  kanal.send(`
  ${member.user.tag} Just Boosted a Server! 
  `);
});
nico.on("guildMemberUnboost", async member => {
  let kontrol = db.fetch(`modlog_${member.guild.id}.aktif`);
  var kanal = db.fetch(`modlog_${member.guild.id}.kanal`);
  if (!kontrol) return;
  kanal.send(`
  
  ${member.user.tag} Just UnBoosted a Server! :c
  `);
});

nico.on("guildMemberRoleAdd", async (member, role) => {
  let kontrol = db.fetch(`modlog_${member.guild.id}.aktif`);
  var kanal = db.fetch(`modlog_${member.guild.id}.kanal`);
  if (!kontrol) return;
  kanal.send(`
  ==MODLOG | GREESY==
  ${member.user.tag} Gived A **${role.name}** Role! 
  `);
});

nico.on("guildMemberNicknameUpdate", async (member, old, yeni) => {
  let kontrol = db.fetch(`modlog_${member.guild.id}.aktif`);
  var kanal = db.fetch(`modlog_${member.guild.id}.kanal`);
  if (!kontrol) return;
  kanal.send(`
  ==MODLOG | GREESY==
  ${member.user.tag} Changed Nickname! 
  \ Details: /
  Old: ${old} 
  New: ${yeni} 
  `);
});

nico.on("guildMemberRoleRemove", async (member, role) => {
  let kontrol = db.fetch(`modlog_${member.guild.id}.aktif`);
  var kanal = db.fetch(`modlog_${member.guild.id}.kanal`);
  if (!kontrol) return;
  kanal.send(`
  ==MODLOG | GREESY==
  ${member.user.tag} Lost in The **${role.name}** Role! 
  `);
});

//});
nico.on("messageContentEdited", async (message, member, old, yeni) => {
  let kontrol = db.fetch(`modlog_${member.guild.id}.aktif`);

  var kanal = db.fetch(`modlog_${member.guild.id}.kanal`);

  if (!kontrol) return;

  /* kanal.send(`

  ${member.user.tag} Just Boosted a Server! 

  `) */
  kanal.send(`
  ==MODLOG | GREESY==
 \ Details: /
  Member: ${member.user.tag}
  Old Message: \`${old}\`
  Edited: \`${yeni}\`
  `);
});
// Partner Sistemi
/*
setInterval(async () => {
client.guilds.cache.forEach(async Server => {
const Saat = 604800000 // 604800000 // 30000
const Data = db.fetch(`URL_${Server.id}_Süre`)
const Data2 = db.fetch(`PremiumSunucuBilgiSüre_${Server.id}`)
if (!Data) return;
if (Saat - (Date.now() - Data) < 0) {
await nico.channels.cache.get('821408562701402213').send(new Discord.MessageEmbed().setColor('BLUE').setDescription(`${client.onay} **| ${client.guilds.cache.get(Server.id).name} Sunucusundaki \`${db.fetch(`URL_${Server.id}`).URL}\` Urlsi Sıfırlandı.**`))
db.delete(db.fetch(`PBURL_${Server.id}`))
db.delete(`URL_${Server.id}`)
db.delete(`URL_${Server.id}_Süre`)
db.delete(`PBURL_${Server.id}`)
db.set(Server.id,Server.id)
}
if (!Data2) return;
//Saat - (Date.now() - Data2)
if (604800000 - (Date.now() - Data2) < 0) {
nico.guilds.cache.get('813459382096232528').users.cache.find(User => User.id == db.fetch(`PremiumSunucuBilgi_${Server.id}`).Ayarlayan).roles.remove('822767014317654044')
nico.channels.cache.get('821408562701402213').send(new Discord.MessageEmbed().setColor('BLUE').setDescription(`${client.onay} **| ${client.guilds.cache.get(Server.id).name} Sunucusundaki \`Premium\` Sıfırlandı.**`))
db.delete(`PremiumSunucuBilgi_${Server.id}`)
db.delete(`PremiumSunucu_${Server.id}`)
db.delete(`PremiumSunucuBilgiSüre_${Server.id}`)
db.delete(`PremiumAldı_${db.fetch(`PremiumSunucuBilgi_${Server.id}`).Ayarlayan}`)
}
})
nico.channels.cache.get('822393907740409869').edit({name: `🧄 Aktiflik・${moment.duration(client.uptime).format('D [Gün], H [Saat], m [Dakika], s [Saniye]')}`})
nico.channels.cache.get('822393962958553139').edit({name: `🔢 Partner・${db.fetch('BOTPartner').toLocaleString()}`})
nico.channels.cache.get('822394660718772224').edit({name: `📚 Sunucu・${client.guilds.cache.size.toLocaleString()}`})
nico.channels.cache.get('822394689641644052').edit({name: `👥 Kullanıcı・${client.guilds.cache.reduce((a,b) => a + b.memberCount,0).toLocaleString()}`})
},7500)
})
const events = {
  MESSAGE_REACTION_ADD: 'messageReactionAdd',
  MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
}
client.on('raw', async event => {
  if (!events.hasOwnProperty(event.t)) return
  const { d: data } = event
  const anto = client.users.cache.get(data.user_id)
  const channel = client.channels.cache.get(data.channel_id) || await anto.createDM()
  if (channel.messages.cache.has(data.message_id)) return
  const message = await channel.messages.fetch(data.message_id)
  const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name
  const reaction = message.reactions.cache.get(emojiKey)
  client.emit(events[event.t], reaction, anto)
})

client.on('messageDelete',async message => {
const DataInfo = db.fetch(`BasitInfo_${message.id}`)
// const DataInfo2 = db.fetch(`BasıtInfo2_${message.id}`)
if (!DataInfo) return;
db.add(`Coins_${DataInfo.KabulEden}`,-5)
db.push(`Log_${DataInfo.KabulEden}`,`5 Coin Silindi. Sebep: Partner Text Silme`)
client.channels.cache.get(DataInfo.SilmeKanal).messages.fetch({around: db.fetch(`PartnerMesaj_${DataInfo.ReacGuild}_${DataInfo.Sunucu}`), limit:1}).then(async RPartnerM => {
const PartnerM = RPartnerM.first()
PartnerM.delete({reason:'Karşı taraf partnerliği bozdu.'})
})
client.channels.cache.get(db.fetch(`PartnerKanal_${DataInfo.ReacGuild}`).Kanal).messages.fetch({around: db.fetch(`PartnerMesaj_${DataInfo.Sunucu}_${DataInfo.ReacGuild}`), limit:1}).then(async PartnerM2 => {
const RPartnerM2 = PartnerM2.first()
RPartnerM2.delete({reason:'Karşı taraf partnerliği bozdu.'})
})

})
	
client.on('messageReactionAdd', async (reaction, user, message, channel) => {
const Dataa = db.fetch(`Info_${reaction.message.id}`)
if (!Dataa) return;
const PLog = db.fetch(`PartnerLogKanal_${reaction.message.guild.id}`).Kanal
const PLog2 = db.fetch(`PartnerLogKanal_${Dataa.Başvuran}`).Kanal
if (reaction.emoji.name == 'onay' && user.id !== client.user.id) {
reaction.users.remove(user.id)
if (!client.guilds.cache.get(reaction.message.guild.id).members.cache.get(user.id).roles.cache.has(db.fetch(`PartnerSorumlusu_${reaction.message.guild.id}`))) return reaction.message.channel.send(`<@${user.id}>, Partner isteğini kabul edebilmen için \`${client.guilds.cache.get(reaction.message.guild.id).roles.cache.find(Roller => Roller.id === db.fetch(`PartnerSorumlusu_${reaction.message.guild.id}`)).name}\` yetkisine sahip olman gerek.`).then(Hata => Hata.delete({timeout:7500}))
db.delete(`Durum_${reaction.message.guild.id}_${Dataa.Başvuran}`)
db.delete(`${Dataa.Başvuran}_${reaction.message.guild.id}`)
db.delete(`Info_${reaction.message.id}`)
reaction.message.delete()
client.channels.cache.get('822768864936722462').edit({name: `・${client.guilds.cache.get(reaction.message.guild.id).name}`})
client.channels.cache.get(db.fetch(`PartnerKanal_${reaction.message.guild.id}`).Kanal).send(`
> **__${client.user.username} Partnerlik Sistemi__**
    
${db.fetch(`PartnerText_${Dataa.Başvuran}`).Text}
    
> Partnerlik Yapan: <@${user.id}> (${db.fetch(`PartnerCount_${reaction.message.guild.id}_${user.id}`) || 0})
`).then(Messaj => {
db.set(`PartnerMesaj_${Dataa.Başvuran}_${reaction.message.guild.id}`,Messaj.id)
db.set(`BasitInfo_${Messaj.id}`,{KabulEden: user.id, Sunucu: Dataa.Başvuran, SilmeKanal: db.fetch(`PartnerKanal_${Dataa.Başvuran}`).Kanal, ReacGuild: reaction.message.guild.id})
//db.set(`BasitInfo2_${reaction.message.guild.id}`,{Sunucu: Dataa.Başvuran, Mesaj: Messaj.id})
})

client.channels.cache.get(db.fetch(`PartnerKanal_${Dataa.Başvuran}`).Kanal).send(`
> **__${client.user.username} Partnerlik Sistemi__**
${db.fetch(`PartnerText_${reaction.message.guild.id}`).Text}
> Partnerlik Yapan: <@${Dataa.Adam}> (${db.fetch(`PartnerCount_${Dataa.Başvuran}_${Dataa.Adam}`) || 0})
`).then(Message => {
db.set(`PartnerMesaj_${reaction.message.guild.id}_${Dataa.Başvuran}`,Message.id)
})

client.channels.cache.get(PLog).send(client.embed2.setDescription(`${client.onay} **| \`${client.guilds.cache.get(Dataa.Başvuran).name}\` adlı sunucu ile partnerlik yapıldı.**
> Partnerlik Yapan: <@${user.id}> (${db.fetch(`PartnerCount_${reaction.message.guild.id}_${user.id}`) || 0})`))
client.channels.cache.get(PLog2).send(client.embed2.setDescription(`${client.onay} **| \`${client.guilds.cache.get(reaction.message.guild.id).name}\` adlı sunucu ile partnerlik yapıldı.**
> Partnerlik Yapan: <@${Dataa.Adam}> (${db.fetch(`PartnerCount_${Dataa.Başvuran}_${Dataa.Adam}`) || 0})`))
db.set(`PartnerTopSaat_${Dataa.Başvuran}`,new Date())
db.set(`PartnerTopSaat_${reaction.message.guild.id}`,new Date())
db.set(`PartnerlikOlma_${reaction.message.guild.id}`,Date.now())
const Premium = db.fetch(`PremiumSunucu_${reaction.message.guild.id}`)
let Sayılar;
if (!Premium) Sayılar = [1,2]
if (Premium) Sayılar = [3,4,5]
const RandomCoin = Sayılar[Math.floor(Math.random() * Sayılar.length)]
if (!db.fetch(`CoinDurum_${Dataa.Başvuran}_${reaction.message.guild.id}`)) {
db.set(`CoinDurum_${Dataa.Başvuran}_${reaction.message.guild.id}`,true)
db.add(`PartnerCount_${reaction.message.guild.id}_${user.id}`,1)
db.add(`PartnerCount_${Dataa.Başvuran}_${Dataa.Adam}`,1)
db.add(`Coins_${user.id}`,RandomCoin)
db.add(`Coins_${Dataa.Adam}`,RandomCoin)
db.push(`Log_${user.id}`,`${RandomCoin} Coin Eklendi. Sebep: Partnerlik`)
db.push(`Log_${Dataa.Adam}`,`${RandomCoin} Coin Eklendi. Sebep: Partnerlik`)
db.add('BOTPartner',1)
db.add(`PC_${Dataa.Başvuran}`,1)
db.add(`PC_${reaction.message.guild.id}`,1)
} else {
db.add(`Coins_${user.id}`,RandomCoin)
db.add(`Coins_${Dataa.Adam}`,RandomCoin)
db.push(`Log_${user.id}`,`${RandomCoin} Coin Eklendi. Sebep: Partnerlik`)
db.push(`Log_${Dataa.Adam}`,`${RandomCoin} Coin Eklendi. Sebep: Partnerlik`)
db.add(`PartnerCount_${reaction.message.guild.id}_${user.id}`,1)
db.add(`PartnerCount_${Dataa.Başvuran}_${Dataa.Adam}`,1)
db.add('BOTPartner',1)
db.add(`PC_${Dataa.Başvuran}`,1)
db.add(`PC_${reaction.message.guild.id}`,1)
//db.push(`Log_${user.id}`,`Coin Eklenemedi. Sebep: Daha Önce Partnerlik Yapılmış`)
//db.push(`Log_${Dataa.Adam}`,`Coin Eklenemedi. Sebep: Daha Önce Partnerlik Yapılmış`)
}
db.add(`TopPartner_${user.id}`,1)
db.add(`TopPartner_${Dataa.Adam}`,1)
}

if (reaction.emoji.name == 'red' && user.id !== client.user.id) {
reaction.users.remove(user.id)
if (!client.guilds.cache.get(reaction.message.guild.id).members.cache.get(user.id).roles.cache.has(db.fetch(`PartnerSorumlusu_${reaction.message.guild.id}`))) return reaction.message.channel.send(`<@${user.id}>, Partner isteğini kabul edebilmen için \`${client.guilds.cache.get(reaction.message.guild.id).roles.cache.find(Roller => Roller.id === db.fetch(`PartnerSorumlusu_${reaction.message.guild.id}`)).name}\` yetkisine sahip olman gerek.`).then(Hata => Hata.delete({timeout:7500}))
db.delete(`Durum_${reaction.message.guild.id}_${Dataa.Başvuran}`)
db.delete(`${Dataa.Başvuran}_${reaction.message.guild.id}`)
db.delete(`Info_${reaction.message.id}`)
reaction.message.delete()
client.channels.cache.get(reaction.message.channel.id).send(new Discord.MessageEmbed().setColor('BLUE').setAuthor(client.user.tag,client.user.avatarURL()).setFooter(client.user.username,client.user.avatarURL()).setTimestamp().setDescription(`❓ **| Reddetme sebebi yazınız.**`)).then(Message => {
client.guilds.cache.get(reaction.message.guild.id).channels.cache.get(reaction.message.channel.id).awaitMessages(Message => Message.author.id === user.id, {max: 1,time: 60000,errors: ['time']
}).then(async Collected => {
let Cevap;
const Cevap1 = Collected.first().content
if (!Cevap1) Cevap = 'Belirtilmedi'

client.channels.cache.get(reaction.message.channel.id).bulkDelete(2)
Message.edit(new Discord.MessageEmbed().setColor('BLUE').setAuthor(client.user.tag,client.user.avatarURL()).setFooter(client.user.username,client.user.avatarURL()).setTimestamp().setDescription(`${client.onay} **| Partnerlik isteği \`${Cevap1}\` sebebiyle reddedildi.**`)).then(Hata => Hata.delete({timeout:5000}))
client.channels.cache.get(PLog2).send(new Discord.MessageEmbed().setColor('BLUE').setAuthor(client.user.tag,client.user.avatarURL()).setFooter(client.user.username,client.user.avatarURL()).setTimestamp().setDescription(`${client.çarpı} **| \`${client.guilds.cache.get(reaction.message.guild.id).name}\` sunucusuna atmış olduğunuz başvuru bir yetkili tarafından \`${Cevap1}\` sebebiyle reddedildi.**`))
client.channels.cache.get(PLog).send(new Discord.MessageEmbed().setColor('BLUE').setAuthor(client.user.tag,client.user.avatarURL()).setFooter(client.user.username,client.user.avatarURL()).setTimestamp().setDescription(`${client.onay} **| \`${client.guilds.cache.get(Dataa.Başvuran)}\` sunucusundan gelmiş olan partnerlik isteği \`${client.users.cache.get(user.id).tag}\` tarafından \`${Cevap1}\` sebebiyle reddedildi.**`))
})
})
}
})
*/
