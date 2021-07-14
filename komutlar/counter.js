const Discord = require('discord.js')
const db = require("quick.db") 
const disbut = require("discord-buttons") 
exports.run = async (client, message, args) => {
  let kontrol = db.fetch(`counterAdd_${message.guild.id}`)
  let abone = db.fetch(`abonelik_${message.author.id}`,"premium");
 // if(kontrol > 10) return message.channel.send("You Must Have a Premium Membership for More Add-Ons With Meter Adjustment Limit Over! ") 
  if(!args[0]) return message.channel.send("mistake! Correct Use: !counter #channel [number] ")
  let kanal = message.mentions.channels.first()
  if(!kanal) return message.channel.send(`Please Write a Channel! `)
  
  db.set(`counterChannel_${message.guild.id}`, kanal.id)
  let rakam = args.slice(1).join(" ")
  if(!rakam) return message.channel.send("Please type the Counter Number!  ") 
 // db.set(`counterChannel_${message.guild.id}`, kanal.id) 
  db.set(`counterNumber_${message.guild.id}`, rakam) 
  return message.channel.send(`
  > Succesfully! 
   Channel: **<#${kanal.id}>**
   Number: **${rakam} **
   
  `) 
  db.add(`counterAdd_${message.guild.id}`, +1)
  
  
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["sayaç"]
};
exports.help = {
	name: 'counter',
	description: 'counter',
	usage: 'counter'
};