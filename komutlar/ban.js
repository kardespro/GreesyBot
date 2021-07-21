const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require("quick.db") 
const client = new Discord.Client();
exports.run = async (client, message, args) => {
let guild = message.guild.id;   
var prefix = ayarlar.prefix;

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (!user) return message.reply("<:hayirbei:867465654960128010> | **Please Mention User And Write Reason! ** \n Example: `!ban @Greesy BadWords`")//message.channel.send(`Sunucudan yasaklamak istediğiniz kullanıcıyı etiketlemelisiniz; \`${prefix}ban @Gnarge Reklam\` `);
  if (user.id === message.author.id) return message.channel.send('Kendini yasaklayamazsın.');
  if (user.position > message.member.roles.highest.position) return message.channel.send('ERR! This Member Role Highest Role For You! ') //message.channel.send(`Bu kullanıcının senin rollerinden/rolünden daha yüksek rolleri/rolü var.`);
    if (!reason) reason = 'Belirtilmemiş.'
    if (!user) return message.channel.send("Mentioned Member Not Found in Server! ") ///message.channel.send(`Etiketlediğin kullanıcıyı sunucuda bulamadım.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send("Mentioned Member Not Found in Server! ") //message.channel.send(`Etiketlediğin kullanıcıyı sunucuda bulamadım.`)

 if (!message.guild.member(user).bannable) return message.channel.send("Mentioned User **Unbannable**! ") //message.channel.send(`Bu kişiyi sunucudan yasaklayamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);

   if (!message.guild.member(user).bannable) return message.channel.send("I Don't Ban The Moderators & Admins! ") //message.channel.send('Sunucudaki yetkilileri yasaklayamam!');

  message.guild.members.ban(user.id)
  message.channel.send(`
 > <:greesy_true:867464502111240242> | Succesfully! 
   👤 User: **<@${user.id}>**
    Reason: **${reason}**
   👨‍⚖️ Moderator: **${message.author.tag}**
  `) 
  let l = db.fetch(`banlog_${message.guild.id}`)
  if(!l) return;
  const bu = new Discord.MessageEmbed() 
 .setColor("#146ca4")
 .setDescription(`
 > Greesy | BanLog
 
  User: <@${user.id}>
  Reason: \`${reason}\`
  Moderator: ${message.author} 
  
 `) 
 .setFooter(ayarlar.footer) 
  const disbut = require("discord-buttons") 
  const sil = new disbut.MessageButton() 
 .setStyle("red") 
 .setID("reset")
  .setLabel("Reset BanLog") 
  if(l) client.channels.cache.get(l).send('', {embed: bu, buttons: sil})
 // message.channel.send(`<@${user.id}> **Adlı kullanıcı yasaklandı!** **Sebep: \`${reason}\`**`)

};

exports.conf = {
  aliases: ['yasakla'],
  permLevel: 0,
  kategori: 'Moderasyon'
};

exports.help = {
  name: 'ban',
  description: 'Belirttiğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban <@kullanıcı> <sebep>',

};