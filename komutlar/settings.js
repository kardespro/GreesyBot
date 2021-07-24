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
\`${message.guild.name}\` Settings! 

> Prefix: \`${prefix || "Not Set!"}\` 
> Counter Number: \`${sayacsayi || "Not Set!"}\`
> Counter Channel: \`${sayackanal || "Not Set!"}\`  ¦ <#${sayackanal}>
> Autorole Channel: \`${otorolkanal || "Not Set!"}\` ¦ <#${otorolkanal || "Not Set!"}>
> Autorole Role: \`${otorolRol || "Not Set!"}\`

`) 
message.channel.send(embed) 

};

exports.conf = {

enabled: true,

guildOnly: false,

aliases: ["setinfo"]

};

exports.help = {

name: "settings",

description: "Botun prefixini ayarlar",

usage: "prefix"

};