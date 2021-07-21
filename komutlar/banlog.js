const Discord = require("discord.js") 
const db = require("quick.db") 
const disbut = require("discord-buttons") 

exports.run = async (client, message, args) => {
  let kanal = message.mentions.channels.first() || args[0];
  if(!kanal) return message.channel.send("<:hayirbei:867465654960128010> | **Please Mention a Valid Channel! **") 
  db.set(`banlog_${message.guild.id}`, kanal.id)
  return message.channel.send(`
  > <:evetbei:867465536736460810> | Succesfully! 
  🖥 Channel: <#${kanal.id}>
  👮 Moderator: ${message.author}
  
  `) 
  let kontrol = db.fetch(`banlog_${message.guild.id}`) 
  if(!kontrol) return message.channel.send("System Already Set! If You Want to Reset `!banlog reset` Command Use! ") 
  if(args[0] == "reset"){
    const onaybt = new disbut.MessageButton() 
   .setStyle("green") 
   .setID("banl")
   .setEmoji("867465536736460810")
   .setLabel("Yes")
    message.channel.send("", {buttons: onaybt}) 
   } 
 };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: []
  
 } 
exports.help = {
  name: "banlog" 
 } 