const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async(client, message, args) => {
 
 if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(`You must have \`MANAGE_MESSAGES\` permission to use this command!`);
  var nego = args.slice(0).join(' ')
  
  if (!nego) return message.channel.send("Enter the number of messages you want to clear!")
  if (isNaN(nego)) return message.channel.send("Number of letters in :face_with_raised_eyebrow:!")
  
  let fetched = await message.channel.messages.fetch({limit: args[0]})
  
  message.channel.bulkDelete(fetched)
  .catch(error => message.channel.send("I can't delete messages before `14` days!"))
  
  message.channel.send(`:recycle: ${args[0]} messages Recycled :recycle:`).then(msg => msg.delete({ timeout: 8000, reason: '[Greesy] Message Clearing ... ' }))
  
    message.delete();
    
}
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["sil"],
  permLevel: 0
};
exports.help = {
  name: 'temizle',
};