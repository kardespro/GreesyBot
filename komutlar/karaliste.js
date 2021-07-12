const Discord = require('discord.js')
const disbut = require("discord-buttons") 
const db = require("quick.db");
exports.run = async (client, message, args) => {
  var msgAuthor = message.author.id;
  if(msgAuthor != "682607343707488388") return message.channel.send("Yetkin Yok");
var arg = args[0];
  if(arg == "ekle"){
    if(!args[1]) return message.channel.send("Write Member ID! ")
    let kullanici = message.mentions.members.first() || args[1];
    let sebep = args.slice(2).join(" ");
    if(!sebep) return message.channel.send("Please Write a Reason! ");
    if(kullanici == "682607343707488388"){
      message.channel.send("Kendini KaraListeye Ekleyemezsin");
    }
    db.set(`karaliste.${kullanici}`,{sebep:sebep});
  message.channel.send(`${kullanici} kullanici ${sebep} Sebepiyle Karalisteye Eklendi`);
    
  }

  
};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["karaliste"]
};
exports.help = {
	name: 'karaliste',
	description: 'kraliste',
	usage: 'karaliste'
};