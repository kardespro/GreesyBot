const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");
//const { clickButton } = require("../events/button.js") 
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  /*
  let filter = m => m.author.id === message.author.id

    message.channel.send(`Are you sure to delete all data? `, {buttons: [button1, button2]}).then(() => {

      message.channel.awaitMessages(filter, {

          max: 1,

          time: 30000,

          errors: ['time']

        })

        .then(message => {*/
  /*
  let filter = m => m.author.id === message.author.id

    message.channel.send(`Are you sure to delete all data? `, {buttons: [button1, button2] }).then(() => {

      message.channel.awaitMessages(filter, {

          max: 1,

          time: 30000,

          errors: ['time']

        })

        .then(message => {*/
let embed = new Discord.MessageEmbed()
  .setColor('yellow')
  //.setTitle('Kanalımıza Abone Olmak İstermisiniz?') 
.setTitle("Banlansın? ") 
let button1 = new MessageButton()
  .setStyle('green')
.setEmoji("✔")
  .setLabel('EVET!') 
  .setID('B1');
let button2 = new MessageButton()
  .setStyle('red')
.setEmoji("❌")
  .setLabel('HAYIR!') 
  .setID('B2'); 
  /*
message.channel.send({
 buttons:[button1,button2],
 embed:embed
});*/
  let filter = m => m.author.id === message.author.id

    message.channel.send(`Are you sure to delete all data? `, {buttons: [button1, button2]}).then(() => {

      message.channel.awaitMessages(filter, {

          max: 1,

          time: 30000,

          errors: ['time']

        })

        .then(message => {
  /*
  if(button1){
//  client.on("clickButton", button1 => {
 if(button.id === "BTN1"){
     button1.reply.send("hmm")
   } 
   }
  client.on("clickButton", button2 => {
     button2.reply.send("ha")
   });
           */ 
       // message = message.first()
        
        client.on('clickButton', async (button) => {

  if (button.id === 'B1') {

    button.channel.send(`${button.clicker.user.tag} Deleted Files!`);

  }

});
        })

        .catch(collected => {

            message.channel.send('Timeout');

        });

    })
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