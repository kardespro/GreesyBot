const Discord = require('discord.js');
const data = require('quick.db')
const path = require("path") 
const Nuggies = require('nuggies');
const giveaway = {};
const ms = require('ms');
exports.run = async (client, message, args) => {
 /* let açıkmı = await data.fetch(`abonelik_${message.author.id}`)
  if(açıkmı) {*/
  /*
const filter = m => m.author.id === message.author.id;
    const collector = message.channel.createMessageCollector(filter, { max: 7, time: 60 * 1000 });
    let step = 0;

    message.channel.send('What is prize?');
    collector.on('collect', async (msg) => {
        if (!msg.content) return collector.stop('error');

        step++;
        if (step == 1) {
            const prize = msg.content;
            message.channel.send(`:tada: Prize. **${prize}**! Where Channel Of Start The Giveaway?`, { allowedMentions: { roles: [], users: [], parse: [] } });
            giveaway.prize = prize;
        }
        else if (step == 2) {
            const channel = msg.mentions.channels.first() || msg.guild.channels.cache.get(msg.content);
            if (!channel) return collector.stop('error');
            giveaway.channel = channel.id;
            message.channel.send(`:tada: Channel <#${channel.id}>! How Many Winners?`);
        }
        else if (step == 3) {
            const winners = msg.content;
            if (isNaN(winners)) return collector.stop('error');
            if (parseInt(winners) > 10) {
                message.reply('Winners Limit **10**!');
                return collector.stop('error');
            }
            giveaway.winners = parseInt(winners);
            message.channel.send(`:tada: ${winners} Winner(s) ! How much time do you have?`);
        }
        else if (step == 4) {
            const time = msg.content;
            if (!ms(time)) return collector.stop('error');
            giveaway.time = time
            if (ms(giveaway.time) > ms('14d')) return collector.stop('HIGH_TIME');
            message.channel.send(`:tada: Time: ${time}! Who is Giveaway Sponsor ?`);
        }
        else if (step == 5) {
            const host = msg.mentions.users.first() || msg.guild.members.cache.get(msg.content) || message.member;

            giveaway.host = host.id;
            message.channel.send(`:tada: Sponsor: ${host}! Do You Want Something Needed for a Gift ?`);
        }
        else if (step == 6) {
            if (!['yes', 'no'].includes(msg.content.toLowerCase())) return collector.stop('error');
            giveaway.requirements = { enabled: msg.content == 'yes' ? true : false };
            return message.channel.send(`That's True?\n\`\`\`Prize: ${giveaway.prize}\nWinner(s): ${giveaway.winners}\nTime: ${ms(giveaway.time)}\nSponsor: ${message.guild.members.cache.get(giveaway.host).user.username}\Requirements: ${giveaway.requirements.enabled ? 'Yes' : 'No'}\n\`\`\`Please Type \`yes\` or \`no\`!`);
        }
        else if (step == 7) {
            if (!['yes', 'no'].includes(msg.content)) return collector.stop('error');
            if (msg.content == 'yes') return collector.stop('done');
            if (msg.content == 'no') return collector.stop('cancel');
        }
    });

    collector.on('end', async (msgs, reason) => {
        if (reason == 'time') return message.channel.send('Not Answered On Time !');
        if (reason == 'error') return message.channel.send('Options Not Fully Populated !');
        if (reason == 'cancel') return message.channel.send('Incorrect Information Blocked Setup !');
        if (reason == 'HIGH_TIME') return message.channel.send('Duration Cannot Be More Than 14 Days  !');

        if (reason == 'done' && giveaway.requirements.enabled) {
            message.channel.send('Role Requirements: `role=ID`!(without spaces)  Its Over After **done**');
            const rcollector = message.channel.createMessageCollector(filter, { time: 60 * 1000, max: 1000 });
            rcollector.on('collect', async (m) => {

                if (!['done', 'stop', 'cancel'].includes(m.content.toLowerCase()) && !m.content.includes('role=')) return rcollector.stop('error');
                if (m.content.toLowerCase() == 'done') return rcollector.stop('done');

                if (!giveaway.requirements.roles) giveaway.requirements.roles = [];
                const id = m.content.split(' ').join('').split('=')[1];

                if (!message.guild.roles.cache.get(id)) return message.channel.send('Bu geçerli bir rol değil.!');
                giveaway.requirements.roles.push(m.content.split(' ').join('').split('=')[1]);
                message.channel.send(`Added Requirements in Role!\n\`\`\`\n${giveaway.requirements.roles.map(x => message.guild.roles.cache.get(x).name).join('\n')}\n\`\`\``, { allowedMentions: { roles: [], parse: [], users: [] } });
            });

            rcollector.on('end', async (msg, r) => {
                if (r == 'time') return message.channel.send('Not Answered On Time .!');
                if (r == 'error') return message.channel.send('Options Not Populated!');
                if (r == 'cancel') return message.channel.send('Incorrect Information in Blocked Giveaway!');

                if (r == 'done') {
                    console.log(giveaway)

                    Nuggies.giveaways.create({
                        message: message, prize: giveaway.prize, host: giveaway.host, winners: giveaway.winners, endAfter: giveaway.time, requirements: giveaway.requirements, channel: giveaway.channel,
                    });
                    await message.channel.send(':tada: Created a Giveaway!').then(m => setTimeout(() => m.delete(), 2000));
                }
            });
        }
        else {
            Nuggies.giveaways.create({
                message: message,
                prize: giveaway.prize,
                host: giveaway.host,
                winners: giveaway.winners,
                endAfter: giveaway.time,
                requirements: giveaway.requirements,
                channel: giveaway.channel,
            });
            await message.channel.send('Created a giveaway!').then(m => setTimeout(() => m.delete(), 2000));
        }
    });
    /*
} else { return message.channel.send(new Discord.MessageEmbed()
 .setDescription(`Bu komut premiumlulara özel!
Premium almak için [Destek sunucumuzu](https://discord.gg/KZfAEjrPUF) ziyaret et!`)
.setTimestamp()
)
} */
   let hasPerm = message.member.hasPermission("MANAGE_MESSAGES");
  let hasRole = message.member.roles.cache.find(r => r.name === "Giveaways");

    if (hasPerm === false || !hasRole == null)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Greesy | GiveAway**")
          .setColor("RED")
         /* .setDescription(
            "Bu komutu kullanmak için `MANAGE_MESSAGES` yetkisine ihtiyacınız var."
          )*/
       .setDescription(`You Do Not Have Permission to Use This Command! `) 
          .setTimestamp()
      );

    if (!args[0]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Greesy | GiveAway**")
          .setColor("RED")
          /*.setDescription(
            "Lütfen, yeniden çekmek istediğiniz çekiliş ID sini giriniz \n Örnek (g.yeniden-çek (çekiliş mesajı nın ıd si))"
          )*/
       .setDescription(`
       <:hayirbei:867465654960128010> | Please Write **GiveAway ID**(Message ID) in Reroll! 
       `) 
          .setTimestamp()
      );
    }
        client.giveawaysManager.reroll(args[0], {
      messages: {
        congrat: "🎁 Congratulations: {winners}"
      }
    });
}


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["reroll"]
};
exports.help = {
	name: 'giveaway-reroll',
	description: 'counter',
	usage: 'giveaway'
};