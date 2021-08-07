const Discord = require('discord.js');
const db = require("quick.db") 
const ayarlar = require('../ayarlar.json')
const moment = require("moment")

moment.locale('tr')


exports.run = async (client, message, args) => {
  message.channel.startTyping(1)
if(!args[0]) return  message.channel.startTyping(1) && message.channel.send("mistake! Correct Use: `!autorole @Role #Channel` ") 
let rol = message.mentions.roles.first() || args[0];
  if(!rol) return message.channel.send("mistake! Please Mention a Role! ") 
  message.channel.startTyping(1)
  db.set(`autoroleRole_${message.guild.id}`, rol.id) 
  db.set(`autoroleRoleTime_${message.guild.id}`, Date.now())

  
  let kanal = message.mentions.channels.first() || args[1];
  if(!kanal) return message.channel.send("mistake! Please Mention a Valid Channel! ") 
  db.set(`autoroleChannel_${message.guild.id}`, kanal.id)
  db.set(`autoroleChannelTime_${message.guild.id}`, Date.now())

  
   message.channel.startTyping(1)
 
  return message.channel.send(`
  > <:greesy_true:867464502111240242> | Succesfully! 
   Role: **${rol}**
   Channel: **${kanal}**
   Moderator: \`${message.author.tag}\`
  
  `) 
  
  
  
} 
exports.conf = {

  aliases: ['otorolü'],

  permLevel: 0,

  kategori: 'Moderasyon'

};

exports.help = {

  name: 'autorole',

  description: 'Belirttiğiniz kişiyi sunucudan yasaklar.',

  usage: 'ban <@kullanıcı> <sebep>',

};