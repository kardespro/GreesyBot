const Discord = require('discord.js');
//const dbb = require("../Database/main.js") 
const db = require("quick.db") 
//const axios = require('axios');

exports.run = async (client, message, args) => {
  var ownirs = ["852853360612605952","682607343707488388"] 
  if(!message.author.id === ownirs.includes) return;
  if(!args[0]) return message.channel.send("<:hayirbei:867465654960128010> || \`add, remove\`") 
  if(args[0] == "add"){
const kk = message.mentions.users.first() || args[1];
  if(!kk) return message.channel.send("<:hayirbei:867465654960128010> | Please Mention a **User**! ") 
db.set(`blacklist.${kk.id}`, true) 
message.channel.send(`<:evetbei:867465536736460810> | \`${kk.tag}#${kk.discriminator}\`(${kk.id}) Added To BlackList!`) 
    client.channels.cache.get("").send(`
     **API Log**
    > User: \`${kk.tag}\`
    > Discriminator: \`${kk.discriminator}\`
    > Moderator: ${message.author.id} 
    `)
  } 
  if(args[0] == "remove"){
    const kk2 = message.mentions.users.first() || args[1];
    if(!kk2) return message.channel.send("<:hayirbei:867465654960128010> | Please Mention a **User**!") 
    db.delete(`blacklist.${kk2.id}`)
    return message.channel.send("<:evetbei:867465536736460810> | Removed! ") 
    
   } 
};

exports.conf = { 
  enabled: true, 
  guildOnly: true, 
  permLevel: 8,
  aliases: [] 
};

exports.help = {

name: "blacklist",

description: "webhooka mesaj göndertir",

usage: "!webhook <webhook url> <yazı>"

};