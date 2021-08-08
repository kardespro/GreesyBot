
const { Fight } = require("weky");
const Discord = require("discord.js");
exports.run = async (client, message, args) => {
if(!args[0]) return message.channel.send("please select user");
 
  
await Fight({

    message: message,

    opponent: args[0],

    embed: {

        title: 'Fight | Weky Development',

        color: '#7289da',

        timestamp: true

    },

    buttons: {

      hit: 'Hit',

      heal: 'Heal',

      cancel: 'Stop',

      accept: 'Accept',

      deny: 'Deny'

    },

    acceptMessage: '<@{{challenger}}> has challenged <@{{opponent}}> for a fight!',

    winMessage: 'GG, <@{{winner}}> won the fight!',

    endMessage: '<@{{opponent}}> didn\'t answer in time. So, I dropped the game!',

    cancelMessage: '<@{{opponent}}> refused to have a fight with you!',

    fightMessage: '{{player}} you go first!',

    opponentsTurnMessage: 'Please wait for your opponents move!',

    highHealthMessage: 'You cannot heal if your HP is above 80!',

    lowHealthMessage: 'You cannot cancel the fight if your HP is below 50!',

    returnWinner: false,

    othersMessage: 'Only {{author}} can use the buttons!'

});



};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["savas"]
};
exports.help = {
	name: 'fight',
	description: 'Botu Yeniden Başlatır.',
	usage: 'fight'
};