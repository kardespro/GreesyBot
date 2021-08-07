const Discord = require('discord.js');
const data = require('croxydb')
const Nuggies = require('nuggies');
const ms = require("ms");

const path = require("path");
module.exports.run = async (client, message, args) => {

 /* let açıkmı = await data.fetch(`pre_${message.author.id}`)
  if(açıkmı) {*/
/*
    if (!args[0]) return message.reply('Lütfen sonuna kadar çekilişin kimliği sağlayın!', { allowedMentions: { repliedUser: false } });
    try {
        const data = await Nuggies.giveaways.getByMessageID(args[0]);
		const msg = await client.guilds.cache.get(data.guildID).channels.cache.get(data.channelID).messages.fetch(args[0]);
		await Nuggies.giveaways.end(msg, data, msg);
    }
    catch (err) {
        console.log(err);
        return message.channel.send('Çekiliş bulunamıyor! ');
    }
    /*
} else { return message.channel.send(new Discord.MessageEmbed()
 .setDescription(`Bu komut premiumlulara özel!
Premium almak için [Destek sunucumuzu](https://discord.gg/KZfAEjrPUF) ziyaret et!`)
.setTimestamp()
)*/
  if (!args[0]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Error:**")
          .setColor("RANDOM")
          .setDescription(
            "<:hayirbei:867465654960128010> Please Write A New GiveAway ID!" 
            ) 
          .setTimestamp()
      );
    }

        if (!args[1]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Greesy | GiveAway**")
          .setColor("RANDOM")
         /* .setDescription(
            "<:codesty_support:844468556430704640> Lütfen çekilişin süresini girin.\n\n**Kullanımı:** \n **Saniye: s \n Dakika: m \n Saat: h \n Gün: d**"
          )*/
        .setDescription(`Please Write a New Giveaway Time. `) 
          .setTimestamp()
      );
    }

    if (!args[2]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Greesy | GiveAway**")
          .setColor("RANDOM")
          .setDescription(
            "<:hayirbei:867465654960128010> Please Write New Winner(s) Number." 
           )
          .setTimestamp()
      );
    }

    if (!args[3]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Greesy | GiveAway**")
          .setColor("RANDOM")
          .setDescription(
            " Please Type New Name Of Giveaway."
          )
          .setTimestamp()
      );
    }
  if(!args[4]){
    const role = message.mentions.roles.first() || args[4];
    ifreturn message.channel.send(`Please Mention A Role In Requirements Section! `) 
    }

        client.giveawaysManager.edit(args[0], {
            addTime: ms(args[1]),
            newWinnerCount: parseInt(args[2]),
            newPrize: args.slice(3).join(" ")
        }).then(() => {
            // Here, we can calculate the time after which we are sure that the lib will update the giveaway
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send(':tada: Tamam! Çekiliş düzenlendi!');
        }).catch((err) => {
            message.channel.send('<:hayirbei:867465654960128010>' + args[0] + ', ID Not Found!');
        });
} 
exports.conf = {
  enabled: true, 
  aliases: ["giveaway-end", "end"] 
 } 
exports.help = {
    name: 'pre-çekiliş-bitir' 
}