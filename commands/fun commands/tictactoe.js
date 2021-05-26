const { tictactoe } = require('reconlx')

module.exports = {
    name: 'tictactoe',
    description: 'Play tic tac toe witha  friend',
    category: 'fun',
    usage: 'tictactoe <@user>',
    aliases: ['ttt'],
    run: async (client, message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.channel.send('Please specify a user')
        new tictactoe({
            message: message,
            player_two: message.mentions.members.first()
        })
    }
}