const Discord = require('discord.js');
//const dbb = require("../Database/main.js") 
const db = require("quick.db") 
const fs = 
//const axios = require('axios');
/*const backup = () => {

    fs.copyFile('./json.sqlite', `./backups/ • ${moment().format('D-M-YYYY • H.mm.ss')} • nego.sqlite`, err => {

        if (err) return console.log(err);

        console.log('Database Backuped.');


      });*/
exports.run = async (client, message, args) => {
  var ownirs = ["852853360612605952","682607343707488388"] 
  if(!message.author.id === ownirs.includes) return;
  if(!args[0]) return message.channel.send("<:hayirbei:867465654960128010> || \`backupdb, give\`") 
 if(args[0] == "backupdb"){
   message.channel.send(`Database Backuped`);
   // backup();
   fs.copyFile('./json.sqlite', `./backups/ • ${moment().format('D-M-YYYY • H.mm.ss')} • nego.sqlite`, err => {

        if (err) return console.log(err);

        console.log('Database Backuped.');

});
   client.channels.cache.get("").send(``);
   
 }
};

exports.conf = { 
  enabled: true, 
  guildOnly: true, 
  permLevel: 8,
  aliases: [] 
};

exports.help = {

name: "admin",

description: "webhooka mesaj göndertir",

usage: "!webhook <webhook url> <yazı>"

};