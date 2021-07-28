const Discord = require('discord.js')

const disbut = require('discord-buttons') 

const db = require("quick.db") 

exports.run = async (client, message, args) => {


    var kanal = db.fetch(`codeshare_${message.guild.id}.channel`) 
 // if(!kanal) return;
  var args0 = args[0]
      var nego = args.slice(0).join("");
  var args1 = args[1]
 /// if(message.content.startsWith("!codeshare")){
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You Do Not Have Insufficient Permissions to Use This Command! ") 

    if(!kanal) return;
    if(!args) return message.channel.send("Please Write Code Name! ") 
    if(!args1) return message.channel.send("Please Write Code! ") 
    if(args1.length > 4000) return message.channel.send("**Discord** Not Allow 4000 Characters to message! ") 
    var neggo = db.fetch(`codes.${message.guild.id}.kanal.${args0}`);
   if(neggo == args0) return message.channel.send("[Error] Code Exist System");
   // !eval message.guild.channels.create('Greesy', { 	type: 'voice', 	permissionOverwrites: [ 		{ 			id: message.guild.id, 			deny: ['VIEW_CHANNEL'], 		}, 		{ 			id: message.author.id, 			allow: ['VIEW_CHANNEL'], 		}, 	], });!eval message.guild.channels.create('Greesy', { 	type: 'voice', 	permissionOverwrites: [ 		{ 			id: message.guild.id, 			deny: ['VIEW_CHANNEL'], 		}, 		{ 			id: message.author.id, 			allow: ['VIEW_CHANNEL'], 		}, 	], });
  const embed = new Discord.MessageEmbed() 
 .setColor("#146ca4")
  
 .setTitle("New Code! | Greesy") 
 /* .addField(`
   > Name: ${args0} 
   > Sharer: ${message.author} 
 

  `)*/
 .setDescription(`
  > Name: ${args0} 
  > Sharer: ${message.author} 

 
        **CODE**
    \`\`\`js
    ${args1 || "Empty"} 
    
    \`\`\`
   
 
 `);
  message.channel.send("Shared! ") 
    
 /* message.react("👍");
  message.react("👎");
 */
    //message.guild.channels.create(`${args}`, { 	type: 'text', 	permissionOverwrites: [ 		{ 			id: message.guild.id, 			deny: ['SEND_MESSAGES'], 		}, 		{ 			id: message.author.id, 			allow: ['VIEW_CHANNEL'], 		}, 	], });
  db.set(`codes.${message.guild.id}.kanal.${args0}`);
message.guild.channels.create(`${args0}`, {
	type: 'text',
	permissionOverwrites: [
		{
			id: message.guild.id,
			allow: ['VIEW_CHANNEL'],
		},
		{
			id: message.author.id,
			allow: ['VIEW_CHANNEL'],
		},
	],
});//kanal.send(embed)
  var idKanal = client.channels.cache.find(x => x.name == `${args0}`).id;
  client.channels.cache.get(idKanal).send(embed);
    };
//};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["share,"]
};
exports.help = {
	name: 'codeshare',
	description: 'Botu Yeniden Başlatır.',
	usage: 'yardim'
};