const Nuggies = require('nuggies');
const ms = require('ms')
const db = require("croxydb") 
module.exports.run = async (client, message, args) => {
//let açıkmı = await db.fetch(`pre_${message.author.id}`)
 // if(açıkmı) {
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
} 
exports.conf = {
  enabled: true, 
  aliases: ["giveaway-start"] 
 } 
exports.help = {
	name: 'çekiliş-başlat'
}