const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");

exports.run = async(client, message, args, button) => {
  
let embed = new Discord.MessageEmbed()
  .setColor('yellow')
  //.setTitle('Kanalımıza Abone Olmak İstermisiniz?') 
.setTitle("Banlansın? ") 
let button1 = new MessageButton()
  .setStyle('green')
.setEmoji("✔")
  .setLabel('EVET!') 
  .setID('BTN1');
let button2 = new MessageButton()
  .setStyle('red')
.setEmoji("❌")
  .setLabel('HAYIR!') 
  .setID('BTN2'); 
message.channel.send({
 buttons:[button1,button2],
 embed:embed
});
  if(button.id === "BTN1"){
    await button.reply.send("hmm")
   } 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["b"],
  permLevel: 0
};

exports.help = {
  name: "b"
};