const Discord = require('discord.js');
const db = require("quick.db") 
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
if(!args[0]) return message.channel.send("mistake! Correct Use: `!autorole @Role #Channel` ") 
let rol = message.mentions.roles.first() || args[0];
  if(!rol) return message.channel.send("mistake! Please Mention a Role! ") 
  db.set(`autoroleRole_${message.guild.id}`, rol.id) 
  let kanal = message.mentions.channels.first() || args[1];
  if(!kanal) return message.channel.send("mistake! Please Mention a Valid Channel! ") 
  db.set(`autoroleChannel_${message.guild.id}`, kanal.id)
  return message.channel.send(`
  > Succesfully! 
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