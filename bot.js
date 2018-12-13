const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
      if(member.guild.id !== '522751453865967628') return;
    setTimeout(function() {
    member.guild.channels.find(r => r.id === '522751453865967630').send('**Welcome To Arrogant Server .**');
},3000);
});



client.login(process.env.BOT_TOKEN);
