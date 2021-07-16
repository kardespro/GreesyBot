// BOT FILE
const discord = require("discord.js");
//require('discord-buttons')(nico);
const nico = new discord.Client();


function Random(length) {

       var result           = '';

       var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

       var charactersLength = characters.length;

       for(var i = 0; i < length; i++) {

          result += characters.charAt(Math.floor(Math.random() * charactersLength));

       }

       return result;

    };
//

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

//Server

//BOT
//Ready
nico.on("ready", () => {

  require("./testserver.js")(nico)

  const Discord = require('discord.js') 
  nico.user.setActivity('Dashboard', { type: 'WATCHING' })

  .then(presence => {
    /*
var mesajj = mesaj;
    if(mesajj){
   .replace("")
     } */
const embed = new Discord.MessageEmbed()

        .setColor('#0099ff')

        .setTitle('**Durum Bildirgesi**')

        .setDescription(`Durumum **${nico.user.presence.activities[0].name}** \n Tür **${nico.user.presence.activities[0].type}** olarak belirlendi.`)

        .setTimestamp()
  
       // .setImage(`${nico.user.avatarURL}`);

       // .replace("WATCHING", "izliyor")

    //  channel.send(embed);
    nico.channels.cache.get("859899078624149516").send("Succes!",{embed: embed}) 

  }) //burda replace yi nasıl yapmalıyım arkadaşlaar
});