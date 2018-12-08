const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
      if(member.guild.id !== '511543836053471254') return;
    setTimeout(function() {
    member.guild.channels.find(r => r.id === '511550650723598373').send('*Welcome To* ***Rois*** *Server*..');
},3000);
});



client.login(process.env.BOT_TOKEN);
