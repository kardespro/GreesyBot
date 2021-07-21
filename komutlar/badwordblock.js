const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'open') {
    db.set(`kufur_${message.guild.id}`, "acik")
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