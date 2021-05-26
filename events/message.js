const {
  Message,
  Client,
  MessageEmbed
} = require("discord.js");
const {
  default_prefix
} = require("../data/config.json");
const db = require('quick.db')

const {
  ShardingClient
} = require('statcord.js')



module.exports = async (client, message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  const prefix = db.get(`guild_${message.guild.id}_prefix`) ?
    db.get(`guild_${message.guild.id}_prefix`) :
    default_prefix;

  if (!message.content.toLowerCase().startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.content.toLowerCase().startsWith(prefix)) return;

  const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args).catch(err => {
    const dev = client.users.cache.get("726392596183646260")
    // if(err) dev.send(`Error! Command: \`${message.content}\` \n\n\n` + err.stack, { code: "" });
    dev.send(`Error! Command: \`${message.content}\``);
    dev.send(err.stack, {
      code: "js"
    });
    let embed = new MessageEmbed()
      .setColor('RED')
      .setTitle(`There was an error running the command ${cmd} !`)
      .setDescription('I have notified the dev and he will fix it as soon as he can!')
      .setTimestamp()
    message.channel.send(embed)
  })
  ShardingClient.postCommand(cmd, message.author.id, client);
}