const Discord = require("discord.js") 
const db = require("quick.db") 
exports.run = async (client, message, args) => {
  let kanal = message.mentions.channels.first() || args[0];
  if(!kanal) return message.channel.send("<:hayirbei:867465654960128010> | **Please Mention a Valid Channel! **") 
  db.set(``)
  
 };
exports.conf = {
  enabled: true, 
  aliases: []
  
 } 
exports.help = {
  name: "banlog" 
 } 