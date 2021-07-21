const Discord = require('discord.js')
const disbut = require("discord-buttons") 
exports.run = async (client, message, args) => {
  const embed_ = new Discord.MessageEmbed()
 .setImage("")
  .setDescription(`
  <:greesy_true:867464502111240242> | My Web Dashboard Link
  
  `)
  .setColor("YELLOW");
//  const disbut = require('discord-buttons') 
  const utton = new disbut.MessageButton() 
  
 //.setLabel("Click!")
  .setStyle("url")
  .setURL("https://greesy.negodev.tk") 
 .setLabel("Click!")
  //guild control
  var id = message.guild.id;
   const gU = new disbut.MessageButton() 
  
 //.setLabel("Click!")
  .setStyle("url","green")
  .setURL(`https://greesy.negodev.tk/dash/${id}/yonet/`) 
 .setLabel("Guild Dashboard")
 
 message.channel.send('', {embed: embed_, buttons: [utton,gU]});



  
};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["dash"]
};
exports.help = {
	name: 'dashboard',
	description: 'Botu Yeniden Başlatır.',
	usage: 'dashboard'
};