const HangmanGame = require('hangcord'); // Require HangmanGame

module.exports = {
    name: 'hangman',
    description: "Play a game of hangman within discord!",
    category: "fun",
    usage: "hangman",
    aliases: null,
    run: async (client, message, args) => {
        const hangman = new HangmanGame({
            title: 'Hangman', // Title of the embed while displaying the game. Default: Hangman
            color: 'RANDOM', // Color of the embed. Default: RANDOM
            timestamp: true, // Will set timestamp for embeds. Default: true
            gameOverTitle: 'Game Over', // Will set the embed title of the game over embed. Default: 'Game Over'
        })
        hangman.newGame(message);
    }
}