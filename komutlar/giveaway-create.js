const Nuggies = require('nuggies');
const ms = require('ms')
//const ms = require("ms");

const path = require("path");
const db = require("croxydb") 
module.exports.run = async (client, message, args) => {
//let açıkmı = await db.fetch(`pre_${message.author.id}`)
 // if(açıkmı) {
  /*
	let requirements;
	let prize;
	if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply("Your Don't Permission Use This Command! ") //message.reply('<:carpi:855750448711467058> Bu Komudu kullanmaya yetkin yok!');
	if (!args[1]) return message.reply('Please Type `{time} {winners} {prize}` ');
	if (isNaN(parseInt((args[1])))) return message.reply('Please Write Winner Count/', { allowedMentions: { repliedUser: false } });
	if (!args[1]) return message.reply('Please Write Giveaway time! ', { allowedMentions: { repliedUser: false } });
	if (!ms(args[0])) return message.reply('Please Write Time! Example: `1m 1w`', { allowedMentions: { repliedUser: false } });
	if (!args.slice(2).join(' ')) return message.reply('Please Write Prize!', { allowedMentions: { repliedUser: false } });
	const host = message.author.id;
	const winners = parseInt(args[1]);
	if (args[2].endsWith('[role]')) {
		const role = args[2].replace('[role]', '');
		const check = message.guild.roles.cache.get(role);
		if (!check) return message.channel.send('please provide a valid role!');
		requirements = { enabled: true, roles: [role] };
		prize = args.slice(3).join(' ');
	}
	else {
		prize = args.slice(2).join(' ');
		requirements = { enabled: false };
	}

	Nuggies.giveaways.create({
		message: message,
		prize: prize,
		host: host,
		winners: winners,
		endAfter: args[0],
		requirements: requirements,
		channel: message.channel.id,
	}); /*else { return message.channel.send(new Discord.MessageEmbed()
 .setDescription(`Bu komut premiumlulara özel!
Premium almak için [Destek sunucumuzu](https://discord.gg/KZfAEjrPUF) ziyaret et!`)*/
//.setTimestamp()
  let hasPerm = message.member.hasPermission("MANAGE_MESSAGES");
  let hasRole = message.member.roles.cache.find(r => r.name === "Giveaways");

    if (hasPerm === false || !hasRole == null) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Greesy | GiveAway**")
          .setColor("RED")
          .setDescription(
            "<:hayirbei:867465654960128010> | **You Are Not Permissions Use This Command**"
          )
          .setTimestamp()
      );
    }

    if (!args[0]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Greesy | GiveAway**")
          .setColor("RANDOM")
         /* .setDescription(
            "Lütfen çekilişin süresini girin.\n\n**Kullanımı:** \n **Saniye: s \n Dakika: m \n Saat: h \n Gün: d** \n \n **1.Adım:** g.başlat <süre>"
          )*/
       .setDescription(`
       <:hayirbei:867465654960128010> | Please Specify a Period of Time! 
        [Times] 
      Second: \`s\`
      Minute: \`m\`
      Hour: \`h\`
      Day: \`d\`
      
       `) 
          .setTimestamp()
      );
    }

    if (!args[1]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Greesy | GiveAway**")
          .setColor("RANDOM")
          /*.setDescription(
            //"Lütfen çekilişi kazanacak sayısını girin \n **Örnek:** 1 \n \n **2.Adım:** g.başlat <süre> <kazanacak(lar)>"
          )*/
       .setDescription(`
       You Need to Specify The Number of Wins! 
       `) 
          .setTimestamp()
      );
    }

    if (!args[2]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Greesy | GiveAway**")
          .setColor("RANDOM")
          //.setDescription("Lütfen Yapacağınız Çekilişi yazınız. \n \n **3.Adım:** g.başlat <süre> <kazanacak(lar)> <Çekiliş>")
         .setDescription(`You didn't write down the name of the giveaway! `) 
        .setTimestamp()
      );
    }

    message.delete();

    client.giveawaysManager.start(message.channel, {
      time: ms(args[0]),
      prize: args.slice(2).join(" "),
      winnerCount: parseInt(args[1]),
      messages: {
        giveaway:
          "**NEW GIVEAWAY**",
        giveawayEnded:
          " **GiveAway Has Ended! ** ",
        timeRemaining: `\n\nTime: **{duration}**!\n\nSponsor: ${
          message.author
        }`,
        inviteToParticipate: "React Emoji To Enter!",
        winMessage: "🎉 Congratulations, {winners}! **{prize}** Win!",
        embedFooter: " GiveAway",
        noWinner: `GiveAway Has Canceled .\nSponsor: ${message.author}`,
        winners: `Winner(s) `,
        endedAt: "End in",
        units: {
          seconds: "Seconds",
          minutes: "Minutes",
          hours: "Hours",
          days: "Days",
          pluralS: false
        }
      }
    });

    client.giveawaysManager.on("giveawayRerolled", (giveaway, winners) => {
      winners.forEach(member => {
        member.send(
          "**Giveaway Rerolled!:** **Congratulations**, " +
            member.user.username +
            ", " +
            giveaway.prize +
            ""
        );
      });
    });

//};
// } 
};
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["giveaway"] 
 } 
exports.help = {
	name: 'çekiliş-başlat'
}