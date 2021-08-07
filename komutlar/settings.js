const Discord = require('discord.js')
const disbut = require('discord-buttons') 
const db = require("quick.db") 
const moment = require("moment")

moment.locale('tr')


exports.run = async (client, message, args) => {
let sayacrakam = db.fetch(`counterNumber_${message.guild.id}`)
let sayackanal =  db.fetch(`counterChannel_${message.guild.id}`)
let kufur = db.fetch(`kufur_${message.guild.id}`)
let otorolkanal = db.fetch(`autoroleChannel_${message.guild.id}`)
let otorolrol =  db.fetch(`autoroleRole_${message.guild.id}`)
let banlog = db.fetch(`banlog_${message.guild.id}`)
/*Times*/
//moment.locale("en").format("LLL")
let ccm = db.fetch(`counterNumberTime_${message.guild.id}`).format("LLL")
let chm = db.fetch(`counterChannelTime_${message.guild.id}`).format("LLL")
let bdm = db.fetch(`badwordTime_${message.guild.id}`)
let acm = db.fetch(`autoroleRoleTime_${message.guild.id}`)
let akm = db.fetch(`autoroleChannelTime_${message.guild.id}`)



const embed = new Discord.MessageEmbed()
.setColor("#146ca4")
.setTitle(message.guild.name,"| Settings")
.setDescription(`

Counter Number: ${sayacrakam || "Not Set!"} (${ccm || ""})
Counter Channel: ${sayackanal || "Not Set!"} (${chm || ""})
BadWord Blocker: ${kufur || "Not Set!"} (${bdm || ""})
AutoRole Role: ${otorolrol || "Not Set!"} (${acm || ""})
AutoRole Log: ${otorolkanal || "Not Set!"} (${akm || ""})
BanLog: ${banlog || "Not Set!"}












`)
const resethepsi = new disbut.MessageButton()
.setStyle("RED")

message.channel.send(embed)



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