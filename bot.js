const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
      if(member.guild.id !== '330606813093429248') return;
    setTimeout(function() {
    member.guild.channels.find(r => r.id === '530071655574274095').send('** - Welcome To Hamas Server. :heart: **');
},3000);
});



client.login(process.env.BOT_TOKEN);
