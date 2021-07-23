const fs = require("fs") 
var backups = JSON.parse(fs.readFileSync("./Data/backups.json", "utf8"));
const Discord = require("discord.js") 
const { Client, Util, Message } = require("discord.js");


exports.run = async (client, message, args) => {
  
  if (args[0] === "oluştur") {
  let id = makeid(25); // sayı uzunluğu siz belirleyin

   const channels = message.guild.channels.cache.sort(function(a, b) { return a.position - b.position; }).array().map(c => {
      const channel = { 
        type: c.type, 
        name: c.name, 
        position: c.calculatedPosition,
      };
      if (c.parent) channel.parent = c.parent.name;
       return channel;
   });

 const roles = message.guild.roles.cache.filter(r => r.name !== "@everyone").sort(function(a, b) {
        return a.position - b.position;
 }).array().map(r => {
   const role = { 
     name: r.name, 
     color: r.color, 
     hoist: r.hoist, 
     permissions: r.permissions, 
     mentionable: r.mentionable,
     position: r.position 
   };
    return role; 
 }); 

 if (!backups[message.author.id]) backups[message.author.id] = {};
    backups[message.author.id][id] = {
            icon: message.guild.iconURL(),
            name: message.guild.name,
            owner: message.guild.ownerID,
            members: message.guild.memberCount,
            createdAt: message.guild.createdAt,
            roles,
            channels
     }; save();
    
 } 
