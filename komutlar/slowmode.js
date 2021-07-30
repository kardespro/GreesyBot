const Discord = require('discord.js');

exports.run = async(client, msg, args) => {
if (msg.channel.type !== "text") return;
  
const limit = args[0];
  
  if(!limit) {
    
              var embed = new Discord.MessageEmbed()
                .setDescription(`Write how many seconds you want to set the write limit (time)!`)
              .setColor("RANDOM")
            msg.channel.send({embed: embed})
            return
          }
  
if (isNaN(limit)) {
  var s = new Discord.MessageEmbed()
  .setDescription("Write how many seconds you want to set the write limit (time)!")
  .setColor("RANDOM")
  msg.channel.send({embed: s});
    return
}
  
if (limit > 10) {
  var x = new Discord.MessageEmbed()
  .setDescription("Write limit (time) limit can be maximum **10** seconds!")
  .setColor("RANDOM")
  msg.channel.send({embed: x});
    return//
}
    var e = new Discord.MessageEmbed()
    .setDescription(`The write limit (time) has been successfully set to **${limit}** seconds!`)
    .setColor("RANDOM")
    msg.channel.send({embed: e})
  
var request = require('request');
request({
    url: `https://discordapp.com/api/v8/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 3,
    kategori: "moderasyon"
};

exports.help = {
  name: 'yavaş-mod',
  description: 'Bulunduğunuz kanala yazma sınırı (süresi) ekler.',
  usage: 'yavaş-mod <1/10>',
};