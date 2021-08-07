const Discord = require('discord.js')
const disbut = require('discord-buttons') 
const db = require("quick.db") 
exports.run = async (client, message, args) => {
let sayacrakam = db.fetch(`counterNumber_${message.guild.id}`)
let sayackanal =  db.fetch(`counterChannel_${message.guild.id}`)
let kufur =  db.fetch(`kufur_${message.guild.id}`)
let otorolkanal = db.fetch(`autoroleChannel_${message.guild.id}`)
let otorolrol =  db.fetch(`autoroleRole_${message.guild.id}`)
let banlog = db.fetch(`banlog_${message.guild.id}`)




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