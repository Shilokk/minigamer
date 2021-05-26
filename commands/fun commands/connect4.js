const GameCord = require('gamecord').djs

module.exports = {
    name: 'connect4',
    description: 'Play connect four within discord',
    category: 'fun',
    aliases: ['c4'],
    usage: 'connect4',
    run: async(client, message, args) => {
        new GameCord.ConnectFour(message)
        .setColor('RED')
        .setTitle('Connect Four')
        .run()
    }
}