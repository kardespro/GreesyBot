const Discord = require("discord.js");
const { MessageButton, MessageMenuOption, MessageMenu, MessageActionRow} = require("discord-buttons");
//const { clickButton } = require("../events/button.js") 
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  /*
  let filter = m => m.author.id === message.author.id

    message.channel.send(`Are you sure to delete all data? `, {buttons: [button1, button2]}).then(() => {

      message.channel.awaitMessages(filter, {

          max: 1,

          time: 30000,

          errors: ['time']

        })

        .then(message => {
  
  let filter = m => m.author.id === message.author.id

    message.channel.send(`Are you sure to delete all data? `, {buttons: [button1, button2] }).then(() => {

      message.channel.awaitMessages(filter, {

          max: 1,

          time: 30000,

          errors: ['time']

        })

        .then(message => {
let embed = new Discord.MessageEmbed()
  .setColor('yellow')
  //.setTitle('Kanalımıza Abone Olmak İstermisiniz?') 
.setTitle("Banlansın? ") 
let button1 = new MessageButton()
  .setStyle('green')
.setEmoji("✔")
  .setLabel('EVET!') 
  .setID('B1');
let button2 = new MessageButton()
  .setStyle('red')
.setEmoji("❌")
  .setLabel('HAYIR!') 
  .setID('B2'); 
  
message.channel.send({
 buttons:[button1,button2],
 embed:embed
});
  let filter = m => m.author.id === message.author.id

    message.channel.send(`Are you sure to delete all data? `, {buttons: [button1, button2]}).then(() => {

      message.channel.awaitMessages(filter, {

          max: 1,

          time: 30000,

          errors: ['time']

        })

        .then(message => {
  
  if(button1){
//  client.on("clickButton", button1 => {
 if(button.id === "BTN1"){
     button1.reply.send("hmm")
   } 
   }
  client.on("clickButton", button2 => {
     button2.reply.send("ha")
   });
           
       // message = message.first()
        
        client.on('clickButton', async (button) => {

  if (button.id === 'B1') {

    button.channel.send(`${button.clicker.user.tag} Deleted Files!`);

  }

});
        })

        .catch(collected => {

            message.channel.send('Timeout');

        });

    })*/
  const Role1 = new MessageMenuOption()
            .setLabel('Announcements') // Label
            .setDescription('Click To View') // Description, Limit Is 50
            .setEmoji('867807850448551966') // Emoji ID
            .setValue('wiki') // To Make Its Funtion When Use Click It

            // Second Option In Menu
            const Role2 = new MessageMenuOption()
            .setLabel('Developers') // Label
            .setDescription('Click To View') // Description, Limit Is 50
            .setEmoji('867799831325835274') // Emoji ID
            .setValue('yt') // To Make Its Funtion When Use Click It

            // Third Option In Menu
            const Role3 = new MessageMenuOption()
            .setLabel('Fun') // Label
            .setDescription('') // Description, Limit Is 50
            .setEmoji('763480709036900372') // Emoji ID
            .setValue('vscode') // To Make Its Funtion When Use Click It

            // Fourth Option In Menu
            const Role4 = new MessageMenuOption()
            .setLabel('GitHub') // Label
            .setDescription('Get GitHub Infos') // Description, Limit Is 50
            .setEmoji('811297109953347595') // Emoji ID
            .setValue('git') // To Make Its Funtion When Use Click It

            const Menu = new MessageMenu()
            .setID('menu') // To Make Its Funtion When Use Click It
            .setPlaceholder('Choose! ')
            .addOption(Role1)
            .addOption(Role2)
            .addOption(Role3)
            .addOption(Role4)
            // .setMaxValues(2) // How Many Roles They Can Select // How Many Selection They Can Make // Maximum
            // .setMinValues(1) // How Many Roles They Can Select // How Many Selection They Can Make // Minimum

            const RoleMenu = new MessageActionRow()
            .addComponent(Menu)

            message.channel.send(`Select Options :) `, {
                component: RoleMenu
            })

            // Making Its Function
            client.on('clickMenu', async m => {
                if(m.values[0] === 'wiki') { // If User Click WikiPedia Then This Will Happen
                    m.reply.defer()
                  //  m.clicker.member.roles.add('811328887120199720') // Add WikiPedia Role
                  //  m.channel.send(`<@${m.clicker.id}> Added WikiPedia Role`)
                      m.reply.send("Not Added! ").then(msg => { // Send A Message In That Channel
                        msg.delete({ timeout: 4000 }) // Delete After 4 Seconds
                    })
                    // m.clicker.member.send(`Added WikiPedia Role`) // Send A DM Also
                } else if(m.values[0] === 'yt') { // If User Click YouTube Then This Will Happen
                    m.reply.defer()
                  //  m.clicker.member.roles.add('811328860414541884') // Add YouTube Role
                    m.channel.send(`<@${m.clicker.id}>, **Nicat.dcw And Nego**`).then(msg => { // Send A Message In That Channel
                        msg.delete({ timeout: 4000 }) // Delete After 4 Seconds
                    })
                    // m.clicker.member.send(`Added YouTube Role`) // Send A DM Also
                } else if(m.values[0] === 'vscode') { // If User Click VS Code Then This Will Happen
                    m.reply.defer()
                  //  m.clicker.member.roles.add('811328908468420628') // Add VS Code Role
                    m.channel.send(`<@${m.clicker.id}> 🤗 `).then(msg => { // Send A Message In That Channel
                        msg.delete({ timeout: 4000 }) // Delete After 4 Seconds
                    })
                    // m.clicker.member.send(`Added VS Code Role`) // Send A DM Also
                } else if(m.values[0] === 'git') { // If User Click GitHub Then This Will Happen
                    m.reply.defer()
                    //m.clicker.member.roles.add('811328963049553931') // Add GitHub Role
                    m.channel.send(`<@${m.clicker.id}> https://github.com/Nicat-dcw/`).then(msg => { // Send A Message In That Channel
                        msg.delete({ timeout: 4000 }) // Delete After 4 Seconds
                    })
                    // m.clicker.member.send(`Added GitHub Role`) // Send A DM Also
                }
            })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["b"],
  permLevel: 0
};

exports.help = {
  name: "b"
};