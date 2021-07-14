const Discord = require('discord.js') 
const ms = require("parse-ms") 
let db = require("quick.db") 
                
exports.run = async (client, message, args) => {
 let times = db.fetch(`work_${message.author.id} `) 
  let day = 86400000
 
 if(times !== null && (Date.now() - times) > 0){
   let time = ms(day - (Date.now() - times )) 
   message.channel.send(`You Should Wait ${time.hours ? time.hours + "Hour": "" }  to Receive the Daily Reward! `) 
  } 
   
 } 
exports.conf = {
  enabled: true, 
  aliases: [] 
 } 
exports.help = {
  name: "daily" 
 } 