const Discord = require("discord.js");

const got = require("got");

module.exports.run = async (bot, message, args) => {

  if (!message.guild) return;

  const embed = new Discord.MessageEmbed();

  got("https://www.reddit.com/r/dankmemer/random/.json")//you can change subredit !

    .then(response => {

      const [list] = JSON.parse(response.body);

      const [post] = list.data.children;

      const permalink = post.data.permalink;

      const memeUrl = `https://reddit.com${permalink}`;

      const ımage = post.data.url;

      const title = post.data.title;

      const likes = post.data.ups;

      const comment = post.data.num_comments;

      const ödül = post.data.total_awards_received;

      embed.setTitle(`Greesy | ${title}`);

      embed.setURL(`${memeUrl}`);

      embed.setColor("RANDOM");

      embed.setImage(`${ımage}`);

      embed.setFooter(

        `👍 ${likes} 💬 ${comment} `

      );

      message.channel.send(embed);

    })

    .catch(console.error);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["meme"],

  permLevel: 0

};

exports.help = {

  name: "meme",

  description: "İstediğiniz yaziyi yaz",

  usage: "prefix yaz yazı"

};