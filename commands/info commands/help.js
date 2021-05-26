const { MessageEmbed } = require('discord.js')
const pagination = require('discord.js-pagination');


module.exports = {
    name: "help",
    description: "Get a list of all the commands there is in this bot",
    category: "info",
    usage: "help <command>",
    aliases: null,
    run: async (client, message, args) => {
        const configcmds = new MessageEmbed()
            .setColor('RED')
            .setTitle('Configuration commands')
            .addField(`prefix`, 'Set the prefix of the guild!')
        const infocmds = new MessageEmbed()
            .setColor('RED')
            .setTitle('Info commands')
            .addField(`botinfo`, 'Provides info on the bot and its statistics')
            .addField(`help`, 'Show all the bots commands')
            .setTimestamp()
        const funcmds = new MessageEmbed()
            .setColor('RED')
            .setTitle('Fun commands')
            .addField(`battleship`, 'Play a game of batteship within discord!')
            .addField(`hangman`, 'Play a game of hangman within discord!')
            .addField(`minesweeper`, 'Play a game of minesweeper within discord')
            .addField(`pokiguess`, 'Play a game of guess the pokemon within discord')
            .addField(`snake`, 'Play a game of snake within discord')
            .setTimestamp()

        const pages = [
            funcmds,
            infocmds,
            configcmds
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';
        if (!args[0]) {
            pagination(message, pages, emojiList, timeout)
        }
          if (args[0] === "config") {
            return message.channel.send(configcmds);
          }
          if (args[0] === "info") {
            return message.channel.send(infocmds);
          }
          if (args[0] === "fun") {
            return message.channel.send(funcmds);
          }

          let cmd = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]));

          if (!cmd) return;

          if (cmd.aliases === null) cmd.aliases = `No Aliases!`;
          if (cmd.description.length === 0) cmd.description = `No Description!`;
          if (cmd.category === null) cmd.category = `No Category!`;
          if (cmd.name === null) return message.channel.send(`Something Went Wrong!`);


          let cmdhelp = new MessageEmbed()
          .setColor('RED')
          .setTitle(`Command Information!`)
          .addField(`Name`, `${cmd.name}`)
          .addField(`Description`, `${cmd.description}`)
          .addField(`Usage`, `${prefix}${cmd.usage}`)
          .addField(`Aliases`, `${cmd.aliases}`)
          .addField(`Category`, `${cmd.category}`)
          .setFooter(`Requested by ${message.author.username}`)
          .setTimestamp();
        if (cmd) {
          return message.channel.send(cmdhelp);
        } else {
          pagination(message, pages, emojiList, timeout)
        }
    }
  }