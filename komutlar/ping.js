const Discord = require('discord.js')
const moment = require("moment") 
const client = new Discord.Client() 
//let msgping = Date.now() - message.createdTimestamp;
exports.run = async (client, message, args) => {
  /*
  let msgping = Date.now() - message.createdTimestamp;
  let durum ;
  if(msgping > 400){
    return "If There Is An Attack on the Server or the Bot Has Been Restarted, Be Careful! " 
    }
  if(msgping < 40){
    return "Displaying Status Fixed.... " 
   } 
const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle('Greesy | Ping')
.addField("Dashboard Ping:", client.ws.ping,'**ms**')
//.addField("Latency Status:", durum) 
.addField("Bot Ping:", `${msgping}ms `) 
message.channel.send(embed)
  */
  let secs = 3
        let ping = client.ws.ping;
        let msgping = Date.now() - message.createdTimestamp;
        let circle;
        let msgcircle;
        if(ping < 50) {
            circle = ":green_circle:"
        }
        if(ping > 50){
            circle = ":yellow_circle:"
        }
        if(ping > 150){
            circle = ":red_circle:"
        }
        if(ping > 500) {
            circle = ":angel:(Dead)"
        }
        
        if(msgping < 50) {
            msgcircle = ":green_circle:"
        }
        if(msgping > 50){
            msgcircle = ":yellow_circle:"
        }
        if(msgping > 150){
            msgcircle = ":red_circle:"
        }
        if(msgping > 500) {
            msgcircle = ":angel:(Dead)"
        }
        const emb = new Discord.MessageEmbed();
        message.channel.send(`Please Wait **${secs}** Seconds!`).then(msg => {
            var stin = setInterval(seconds,1000)
            function seconds(){
                if(secs === 1){
                    clearInterval(stin)
                    msg.edit('',emb.setDescription('').setTitle('Greesy | Ping').addField('Web(Dashboard):',circle + ' ' +ping+' ms',true).addField('Bot Ping:',msgcircle + ' ' +msgping + ' ms',true).setColor('#146ca4'))
                } else {
                    secs = secs-1
                    msg.edit(`Please Wait **${secs}** Seconds!`)
                }
            }
        })

}
exports.conf = {

  aliases: ['ping', 'ms'],

  permLevel: 0,

  kategori: 'Genel'

};

exports.help = {

  name: 'ping',

  description: 'Bu komut, botun bilgilerini gösterir',

  usage: 'info'

};