const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async(client, message) => {
  const sakso = db.fetch(`premod_${message.guild.id}`)
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 
let times = await db.fetch(`worktime_${message.author.id}`)
  let day = 86400000
  if (times !== null && day - (Date.now() - times) > 0) {
        let time = ms(day - (Date.now() - times));
    message.channel.send(new Discord.MessageEmbed()
                        .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Please Wait ${time.hours ? time.hours + " hour(s)": ""} ${time.minutes ? time.minutes + ' minute(s),' : ''} ${time.seconds ? time.seconds + ' second(s)!' : 'gir!'}`))
  return
  }
 var moneys = rastgeleMiktar(2000,3000)
      message.channel.send(new Discord.MessageEmbed()
                   .setColor("YELLOW")
                   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                  // .setDescription(`Günlük, cüzdanına ${moneys} 💸 eklendi!`)
                         .setDescription(``))

db.set(`worktime_${message.author.id}`, Date.now())

  db.add(`coin_${message.author.id}`, moneys)
 };
exports.conf = {
  enabled: true,
  aliases: ["daily"],
};

exports.help = {
  name: 'günlük',
};