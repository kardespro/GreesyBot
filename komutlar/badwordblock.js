const Discord = require('discord.js')
const db = require('quick.db')
const moment = require("moment")
moment.locale('tr')

exports.run = async (client ,message, args) =>{
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(`You must have \`MANAGE_MESSAGES\` permission to use this command!`);
  
if(args[0] === 'open') {
    db.set(`kufur_${message.guild.id}`, "acik")
  db.set(`badwordTime_${message.guild.id}`, Date.now())

  
    message.channel.send('<:evetbei:867465536736460810> | Succesfully Activated **BadWord** Blocker. ')
  return
}
if (args[0] === 'close ') {
  db.delete(`kufur_${message.guild.id}`)
message.channel.send('<:evetbei:867465536736460810> | **BadWord** Blocker Closed! ')
return
}
  message.channel.send('<:hayirbei:867465654960128010> | Please Type Valid Arguments! Arguments: `open, close` ')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür-engel'],
 permLevel: 0
};

exports.help = {
 name: 'badwordblock',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};