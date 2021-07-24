const Discord = require('discord.js');
const client = new Discord.Client() 
const db = require("mongoose") 
const ping = require('node-http-ping')
 const os = require("os") 
const prettyMilliseconds = require("pretty-ms"); //npm i pretty-ms
const disbut = require('discord-buttons') 
exports.run = async (client, message, args) => {
  var ya = await db.ping;
  const Dashping = ping('https://google.com')
  .then(time => console.log(`Response time: ${time}ms`))
  .catch(() => console.log('Failed to ping google.com'))

    const info = new Discord.MessageEmbed()
      .setColor('WHITE')
      .setTitle('Greesy Bot')
     // .setDescription('Stats of the bot! If you want to donate to me, you can reach me on Discord.')
    .setDescription(`
    Shows Statistics From When You Type
    `) 
    // .setThumbnail('https://i.pinimg.com/originals/c3/06/a9/c306a969d8d171a43a09a6dc31f6fbfd.jpg') //Thumbnail fotoğrafı
      .addFields(
        { name: '🔒 Owner(s)', value: '<@852853360612605952> | ɴɪᴄᴀᴛ.ᴅᴄᴡ#6666', inline: true }, // İdnizi girin
        { name: '💻 Uptime', value: prettyMilliseconds(client.uptime), inline: true }, // Uptime Süresi
        { name: "👮 Mod Team", value: "<@682607343707488388> | Nego#0001", inline: true}, 
        { name: '🥁 Ping(s)', value: Math.round(client.ws.ping) + '**ms** ¦ Dashboard Ping: 0**ms** | ' + ya + ' **ms** ¦ 🌎 Mongoose Ping', inline: true }, // Ping
        { name: "🖥 Platform", value: os.platform }, 
        { name: "🍪 Versions", value: "**@Greesy-Beta >** `1.5.1` ¦ **@Discord.js >** `12.5.3` ¦ **@Firebase/App >** `0.6.28` ¦ **@Passport-Discord >** `0.1.4`" }, 
        { name: '↕ Memory', value: (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + ' MB|2000 GB', inline: true }, // Rss
        { name: '🔝 Guilds', value: client.guilds.cache.size, inline: true }, // Olduğu sunucu sayısı
        { name: '👨 Users', value: client.users.cache.size + ' ', inline: true }, // Kullanıcı sayısı
      )
      .setTimestamp() //Bunu eğer altta zaman gözüksün istemiyorsanız silin.
     // .setFooter('Stats, yey!', 'https://i.pinimg.com/originals/c3/06/a9/c306a969d8d171a43a09a6dc31f6fbfd.jpg'); // Alttaki footer fotoğrafo
.setFooter("Greesy - All Rights Reserved! ")
    const pingbuton = new disbut.MessageButton() 
   .setStyle("green")
    .setID("pingg")
    .setLabel("Refresh")
    const testbuton = new disbut.MessageButton() 
   .setStyle("blurple") 
   .setID("vv") 
   .setLabel("View Links")
    
      client.on('clickButton', async (buton) => {
       // await pingbuton.think(true)
         if(buton.id == 'pingg') {
   // info.edit(`Test`)

     //   message.delete().then(helpMessage.delete())



      //  button.reply.defer()



 
       // await pingbuton.reply.defer()
   //  await pingbuton.reply.think()
    // await pingbuton.reply.think(true)
      //  await pingbuton.reply.send('Refreshed!',{embed: info})
      await buton.reply.send(info, true)
    //Your code here...
        
} 
}); 
  /*
  client.on('clickButton', async vv => {
  await vv.reply.send(`
  [Invite](https://greesybot.tk/invite) 
  [Dashboard](https://greesybot.tk/) 
  `) 
    //Your code here...

});*/
    message.channel.send('', {embed: info, buttons: [pingbuton, testbuton]}); //Mesajı gönderir.
  
};


exports.conf = {
  aliases: ['stat', 'statistic'],
  permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
  name: 'İnfo',
  description: 'Bu komut, botun bilgilerini gösterir',
  usage: 'info'
};