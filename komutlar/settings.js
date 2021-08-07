const Discord = require('discord.js')
const disbut = require('discord-buttons') 
const db = require("quick.db") 
exports.run = async (client, message, args) => {
let sayacrakam = db.fetch(`counterNumber_${message.guild.id}`)
let sayackanal =  db.fetch(`counterChannel_${message.guild.id}`)
let kufur = db.fetch(`kufur_${message.guild.id}`)
let otorolkanal = db.fetch(`autoroleChannel_${message.guild.id}`)
let otorolrol =  db.fetch(`autoroleRole_${message.guild.id}`)
let banlog = db.fetch(`banlog_${message.guild.id}`)

const embed = new Discord.MessageEmbed()
.setColor("#146ca4")
.setTitle(message.guild.name,"| Settings")
.setDescription(`

Counter Number: ${sayacrakam || "Not Set!"}
Counter Channel: ${sayackanal || "Not Set!"}
BadWord Blocker: ${kufur || "Not Set!"}
AutoRole Role: ${otorolrol || "Not Set!"}
AutoRole Log: ${otorolkanal || "Not Set!"}
BanLog: ${banlog || "Not Set!"}












`)





};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["ayarlar"]
};
exports.help = {
	name: 'settings',
	description: 'Botu Yeniden Başlatır.',
	usage: 'yardim'
};