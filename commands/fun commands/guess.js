const GameCord = require('gamecord').djs

module.exports = {
    name: 'guessgame',
    description: 'A guessing game',
    category: 'fun',
    aliases: ['gg'],
    usage: 'guessgame',
    run: async(client, message, args) => {
        new GameCord.GuessGame(message)
        .setColor('RED')
        .setTitle('Guess the word')
        .setTime(20000)
        .run()
    }
}