const { MessageEmbed } = require('discord.js')


module.exports = async guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text')
    let embed = new MessageEmbed()
    .setColor('RED')
    .setTitle("Hello everyone!")
    .setDescription('To get started type m!help to view all the commands, keep in mind the prefix is customizable')
    .addField('Support', '[Support server](https://discord.gg/fjrv25r) - Here you can report bugs with the bot or get support and, just talk in the main chat')
    .addField('Invite the bot', '[Invite](https://discord.com/api/oauth2/authorize?client_id=782078811428094024&permissions=92224&scope=bot) - Invite the bot so you can play games in other servers')
    .setFooter("Enjoy using MiniGamer")
    channel.send(embed)
}