const Discord = require("discord.js") 
const db = require("quick.db") 
exports.run = async (client, message, args ) => {
let prefix = db.fetch(`prefix_${message.guild.id}`) 
let sayacsayi = db.fetch(`counterNumber_${message.guild.id}`)
let sayackanal = db.fetch(`counterChannel_${message.guild.id}`)  
let otorolkanal = db.fetch(`autoroleChannel_${message.guild.id}`) 
let otorolRol = db.fetch(`autoroleRole_${message.guild.id}`) 
  
const embed = new Discord.MessageEmbed() 
.setColor("#146ca4") 
.setTitle("Greesy | Server Settings") 
.setDescription(`
\`\`
`) 



};

exports.conf = {

enabled: true,

guildOnly: false,

aliases: ["önek"]

};

exports.help = {

name: "prefix",

description: "Botun prefixini ayarlar",

usage: "prefix"

};