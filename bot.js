// BOT FILE
const discord = require("discord.js");
//require('discord-buttons')(nico);
const nico = new discord.Client();
const fs = require("fs");
const db = require("quick.db");
const express = require("express");

const app = express()

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

  require("./testserver.js")()

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


/*

* Command Handler

*/
const log = message => {
  console.log(`${message}`);
};
/*=======================================================================================*/
require('events').EventEmitter.prototype._maxListeners = 100;
nico.komutlar = new discord.Collection();
nico.aliases = new discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
    if (err) console.error(err);
    console.log(`(!) Bota ${files.length} komut başarıyla yüklendi.`);
    files.forEach(f => {
        if (!f.endsWith('.js')) return
        let props = require(`./komutlar/${f}`);
        if (!props.help) return
        nico.komutlar.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            nico.aliases.set(alias, props.help.name);
            global.commands = files;
        });
    });
});
nico.on('message', async message => {
    let p = config.prefix
    let client = message.client;
    if (message.author.bot) return;
    if (!message.content.startsWith(p)) return;
    let command = message.content.split(" ")[0].slice(p.length);
    let params = message.content.split(" ").slice(1);
    let cmd
    if (client.komutlar.has(command)) {
        cmd = client.komutlar.get(command);
    } else if (client.aliases.has(command)) {
        cmd = client.komutlar.get(client.aliases.get(command));
    }
    if (cmd) {
      const kapalımıkardesbu = await db.fetch(`kapalı.${cmd.help.name}.${message.guild.id}`);

  if(kapalımıkardesbu) return;

 
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
})
const clean = text => {

    if (typeof(text) === "string")

      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));

    else

        return text;

  }

nico.on("message", async message => {

    const args = message.content.split(" ").slice(1);

   

    if (message.content.startsWith("!eval")) {
      
      if (![config.evalyetki, config.evalyetki1,config.evalyetki2, config.evalyetki3, "661827402069966869"].includes(message.author.id)) return;
    
      try {

        const code = args.join(" ");

        let evaled = eval(code);

   
    if(message.content.includes("nico.token")) return message.reply("al `31313313131311`") 
        if (typeof evaled !== "string")

         evaled = await require("util").inspect(evaled);

   

        await message.channel.send(clean(evaled), {code:"xl"});

      } catch (err) {

       await message.channel.send(`\`Hata Oluştu \n \` \`\`\`xl\n${clean(err)}\n\`\`\``);

      }

    }

  });








//Login
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
  if(msg.content.startsWith("!test")){
   // if(msg.author.id == "852853360612605952"){
   // msg.reply('test')
    const disbut  = require('discord-buttons');
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

  .setLabel('Restart!')

  .setID('myid')

  .setStyle('blurple');
    msg.channel.send('test!', {buttons: [button]})
   // return process.exit();
    console.log(`
    Bot Has Restarted By ${msg.author} :) 
    `)
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
  let kanal = db.fetch(`counterChannel_${member.guild.id}`) 
  let rakam = db.fetch(`counterNumber_${member.guild.id}`) 
  nico.channels.cache.get(kanal).send(`
  <a:grs:691620276055703573> **${member.user.tag}** Joined The Server! We're \`${rakam - member.guild.memberCount}\` Away From Being **${rakam}**! 
 `)//Joined! We're 8 Away From Being 5! 
 });


nico.on("guildMemberRemove", async member => {
  let kanal = db.fetch(`counterChannel_${member.guild.id}`) 
  let rakam = db.fetch(`counterNumber_${member.guild.id}`) 
 nico.channels.cache.get(kanal).send(`
  <a:cks:691620378937917451> **${member.user.tag}** Left The Server! We're \`${rakam - member.guild.memberCount}\` Away From Being **${rakam}**! 
 `)//Joined! We're 8 Away From Being 5! 
 });
nico.on("guildMemberAdd", async member => {
  let role = db.fetch(`autoroleRole_${member.guild.id}`) 
  let ch = db.fetch(`autoroleChannel_${member.guild.id}`) 
  nico.channels.cache.get(send(`
  **${member.user.tag}** Joined. **${role}** Role Given with Automatic Role System! 
  `)
  
 });
nico.on('clickButton', async (button) => {

  if (button.id === 'B1') {
   button.reply.defer()
    button.channel.send(`${button.clicker.user.tag} clicked button!`);

  }
  if(button.id === "B2"){
    button.reply.defer()
    button.channel.send("ok")
  
   } 
if(button.id === "vv"){
  button.reply.defer()
  button.channel.send(`
  **Only You Know This Message! What about this one?  Only You Know This Message! So why Do I See This? I'll tell you about it. My Owners Made Users Who Clicked the Message Button See It So That It Wouldn't Spam or Disturb Users! **
  
  > Links:
    [[Invite]](https://greesy.nicatdcw.com/invite) 
    [[Dashboard]](https://greesy.nicatdcw.com) 
    [[Guild Dashboard]](https://greesy.nicatdcw.com/dash/${message.guild.id}/yonet) 
  `,)
 } 
});
  /*guard dude*/
  nico.on('roleDelete', async function(role) {

  const fetch = await role.guild.fetchAuditLogs({type: "ROLE_DELETE"}).then(log => log.entries.first())

  let yapanad = fetch.executor;

  let isim = role.name;

  let renk = role.color;

  let ayrı = role.hoist;

  let sıra = role.position;

  let yetkiler = role.permissions;

  let etiketlenebilir = role.mentionable;

  role.guild.roles.create({

    name:isim,

    color:renk,

    hoist:ayrı,

    position:sıra,

    permissions:yetkiler,

    mentionable:etiketlenebilir

  })

  let teqnoembed = new Discord.MessageEmbed()

    .setTitle("Warning! ")

    .setColor("RED")

    .setFooter("Greesy - Guard System")

    //.setDescription(`\`${role.guild.name}\` adlı sunucunuzda ${isim} adına sahip rol, ${yapanad} adlı kişi tarafından silindi. Ben tekrardan onardım!`)
.setDescription(` @Bok Role Deleted on Your Nicat Server! By: @Nicat, `) 
  role.guild.owner.send(teqnoembed)

});

nico.login(process.env.TOKEN);
