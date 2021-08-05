const Discord = require('discord.js');
const dbb = require("../Database/main.js") 
const db = new dbb("./all.js") 
//const axios = require('axios');

exports.run = async(client, message, args) => {
  if(args[0] == "add"){
const kk = message.mentions.users.first() || args[1];
  if(!kk) return message.channel.send("<:hayirbei:867465654960128010> | Please Mention a **User**! ") 
db.set(`blacklist.${kk.id}`, true) 
message.channel.send(`${kk.tag}${kk.discriminator`) 
  } 
};

exports.conf = { aliases: [] };

exports.help = {

name: "blacklist",

description: "webhooka mesaj göndertir",

usage: "!webhook <webhook url> <yazı>"

};