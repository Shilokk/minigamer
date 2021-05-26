const mines = require('discord-minesweeper');

module.exports = {
    name: 'minesweeper',
    description: "A game of minesweeper in discord",
    category: "fun",
    aliases: null,
    usage: "minesweeper",
    run: async (client, message, args) => {
        message.author.send(mines(14, 14, 20, 'X', true));
    }
}
