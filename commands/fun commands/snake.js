const SnakeGame = require('snakecord');

module.exports = {
    name: "snake",
    description: "Play a game of snake within discord",
    aliases: null,
    category: "fun",
    usage: "snake",
    run: async (client, message, args) => {
        const snakeGame = new SnakeGame({
            title: 'Snake Game',
            color: "GREEN",
            timestamp: false,
            gameOverTitle: "Game Over"
        })
        snakeGame.newGame(message);
    }
}