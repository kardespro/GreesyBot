const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
let guild = message.guild.id;   
var verfyseviye = client.guilds.cache.get(guild).verificationLevel;
 var mfalev = nico.guilds.cache.get(guild).mfaLevel;
 var afkK = nico.guilds.cache.get(guild).afkChannel;
var region = nico.guilds.cache.get(guild).region;
var roller = nico.guilds.cache.get(guild).roles;
var banner = nico.guilds.cache.get(guild).banner;

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