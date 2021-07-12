const Discord = require('discord.js');
const Canvas = require('canvas')

module.exports.run = async (bot, message, args) => {
     
  if(!args[0]) {
    var user = message.author;
  } else {
    
    var user = message.mentions.users.first() || bot.users.cache.get(args[0]);
    
  }
    var member = message.guild.member(user);
	const canvas = Canvas.createCanvas(474, 670);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/817711560456798218/821773476104110080/external-content.duckduckgo.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);


	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
	ctx.drawImage(avatar, 185, 15, 120,120) 

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), '');

	message.channel.send(attachment);
};

exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [''], 
  permLevel: 0
};

exports.help = {
  name: 'beaman',
  description: 'adamol', 
  usage: 'adamol'
};