const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
let guild = message.guild.id;   
  
var verfyseviye = client.guilds.cache.get(guild).verificationLevel;
 var mfalev = client.guilds.cache.get(guild).mfaLevel;
 var afkK = client.guilds.cache.get(guild).afkChannel;
var region = client.guilds.cache.get(guild).region;
var roller = client.guilds.cache.get(guild).roles;
var banner = client.guilds.cache.get(guild).banner;
var embed = new Discord.MessageEmbed()
.setThumbnail(`${banner || ""}`)
.setColor("GREEN")
.setAuthor()
.setDescription(`
${message.guild.name} Guild Info

<><><><><><><><><><><><><><><><><><><><><><><><><><><><>

Verifaction Level : ${verfyseviye}
Mfa Level : ${mfalev}
Guild Region : ${region}
Afk Channel : ${afkK || "Not Found"}

<><><><><><><><><><><><><><><><><><><><><><><><><><><><>

BANNER URL : ${banner || "Not Added"}





`);
  message.channel.send(embed);
};

exports.conf = {
  aliases: ['guildinfo'],
  permLevel: 0,
  kategori: 'Moderasyon'
};

exports.help = {
  name: 'guildinfo',
  description: 'GuildInfo',
  usage: 'guildinfo',

};