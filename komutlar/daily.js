const Discord = require('discord.js') 
const ms = require("parse-ms") 
const mongoose = require('mongoose');


let db = require("quick.db") 
                
exports.run = async (client, message, args) => {
  
  function rastgeleMiktar(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;

} 
 let times = db.fetch(`work_${message.author.id} `) 
  let day = 86400000
 
 if(times !== null && (Date.now() - times) > 0){
   let time = ms(day - (Date.now() - times )) 
   message.channel.send(`You Should Wait ${time.hours ? time.hours + "Hour": "" }  to Receive the Daily Reward! `) 
  } 
   var moneys = rastgeleMiktar(2000,3000)
   var gcc = rastgeleMiktar(50,1000)
   message.channel.send(`You Earned **${moneys}** 💸 Coins and **${gcc}** GC as a Daily Reward! You can get it back in 24 hours! `) 
 db.add(`coin_${message.author.id}`, moneys) 
  db.add(`gc_${message.author.id}`, gcc) 
} 

exports.conf = {
  enabled: true, 
  aliases: [] 
 } 
exports.help = {
  name: "daily" 
 } 