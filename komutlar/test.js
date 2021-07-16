const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");
const { clickButton } = require("../events/button.js") 
const client = new Discord.Client();
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
  if(button1){
//  client.on("clickButton", button1 => {
 if(button.id === "BTN1"){
     button1.reply.send("hmm")
   } 
   }
  client.on("clickButton", button2 => {
     button2.reply.send("ha")
   });
            
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