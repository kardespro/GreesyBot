const Discord = require('discord.js');
//const dbb = require("../Database/main.js") 
const db = require("quick.db") 
const fs = require("fs");
const moment = require("moment");
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
    var Embid = new Discord.MessageEmbed()
      .setTitle("Greesy")
      .setColor("#3437eb")
      .setDescription(`
      
    Greesy Database Manager
           
           
    ** Database Backuped **
          
     By : <@${message.author.id}>
      
      Time: ${moment().format('D-M-YYYY • H.mm.ss')}
      *
      `);
     
   client.channels.cache.get("868378969140002816").send(Embid);
   
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