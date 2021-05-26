const db = require('quick.db')
const {
  MessageEmbed
} = require('discord.js')

module.exports = {
  name: "prefix",
  description: "Set the prefix of the guild!",
  category: "config",
  aliases: null,
  usage: "prefix <prefix>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You can\'t use that!')
    if (!args[0]) return message.channel.send(new MessageEmbed().setTitle('You need to specify the prefix you want to set for this guild').setColor('RED').setTimestamp())
    if (args[0].length > 3) return message.channel.send(new MessageEmbed().setTitle('A prefix can only be 3 or less characters').setColor('RED').setTimestamp())
    if (args[0] === db.get(`guild_${message.guild.id}_prefix`)) return message.channel.send(new MessageEmbed().setTitle("That is the current prefix").setColor('RED').setTimestamp())
    if (args[0] === "m!") db.delete(`guild_${message.guild.id}_prefix`)
    db.set(`guild_${message.guild.id}_prefix`, args[0])
    return message.channel.send(new MessageEmbed().setTitle(`The prefix is set to **${args[0]}**`).setColor('RED').setTimestamp())
  }
}