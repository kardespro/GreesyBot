const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => { // Can°B#1308

  if(!args[0]) return message.channel.send("Please Write a Command Name To Enable! ") //message.channel.send('You need to specify one or more commands to enable.');

  let cmd;
  if(client.commands.has(args[0])) { cmd = client.commands.get(args[0]);
  } else if (client.aliases.has(args[0])) { cmd = client.commands.get(client.aliases.get(args[0]))};

  if(!cmd) return message.channel.send('Could not find a command with that name.');
  if(cmd === 'enable') return message.channel.send('Cannot enable this command.');

  let nbr;
  data.delete(`kapalı.${cmd.help.name}.${message.guild.id}`);
  if(cmd.conf.aliases) { 
  nbr = ' ('+cmd.conf.aliases.map(c => c).join(', ')+')';
  cmd.conf.aliases.forEach(s => { data.delete(`kapalı.${s}.${message.guild.id}`)}) };

  message.channel.send(`Enabled **${cmd.help.name}**${nbr}.`);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'enable-cmd'
};// codare ♥
