const GameCord = require('gamecord').djs;

module.exports = {
    name: 'quiz',
    description: 'Get quizzed',
    category: 'fun',
    usage: 'quiz',
    aliases: null,
    run: async (client, message, args) => {
        new GameCord.Quiz(message)
        .setColor('RED')
        .setTitle('You have 15 seconds!')
        .setTime(50000)
        .on('start', game => console.log(game.item.answers)) // Start event also exists
        .run()
    }
}