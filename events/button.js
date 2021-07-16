const Discord = require('discord.js');
let { MessageButton } = require("discord-buttons");

module.exports = async (button) => {
  
if(button.id === "BTN2"){
    await button.reply.defer()
    
let embed = new Discord.MessageEmbed()
  .setColor('yellow')
  .setTitle('Neden Abone Olmak İstemiyorsun Dostum?')     
    
    await button.message.edit(embed)
  }

if(button.id === "BTN1"){
    await button.reply.defer()
    
let embed = new Discord.MessageEmbed()
  .setColor('yellow')
  .setTitle('Oh Harika Hemen Tıkla Abone Ol')     
 let abone = new MessageButton()
  .setStyle('url')
  .setURL('https://youtube.com/ZerXBeY') 
  .setLabel('Abone Ol!'); 
  
    await button.message.edit(embed,abone)
  }
};