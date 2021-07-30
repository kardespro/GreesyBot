const app = require('fastify')({ logger: true })
app.register(require('fastify-express'))
const Nuggies = require("nuggies");
const Discord2 = require("discord.js");
const Client2 = new Discord2.Client();
//const Util = require("./util/eventloader.js")(Client2);
//const tools = require("./greesyapi.js");
//const mongoose = require("mongoose");

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

//==

const _ = require("lodash");

const discord = require("discord.js");
//require('discord-buttons')(nico);
const nico = new discord.Client();

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

//app.use("/assets", express.static("server/web/css/"));

/*

**************

CodeList

By Kardespro

*************

*/

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
};

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
  durum: "!help | !stat "
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
  const kategori = "869293230942994473";
  var kontrol = kategori
    .forEach(x => {
      x.name > "Channels |";
    })
  const kanalone = "869297523062358036" 
  kanalone.setName(`Channels - ${nico.channels.cache.size}`)
  
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

      scope: ["identify", "guilds", "guilds.join", "email"]
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
  (req, reply, next) => {
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
  async (req, reply) => {
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
        if (ab_free) return reply.redirect("/");
        if (ab_var) return reply.redirect("/");
        // res.redirect("/");
        db.set(`abonelik_${req.user.id}`, "free");
      });
    }
  }
);
app.get("/logout", (req, reply) => {
  req.logOut();

  reply.redirect("/");
});





// Declare a route
app.get('/', (request, reply) => {
  //reply.send({ hello: reply.getResponseTime() })
  reply.view("server/web/html/negoo.ejs");
})

// Run the server!
app.listen(3000, (err) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})