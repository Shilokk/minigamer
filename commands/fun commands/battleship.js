const { DiscordBattleShip } = require("discord-battleship");
const db = require("../../schemas/db");

module.exports = {
    name: 'battleship',
    usage:"battleship",
    category:"fun",
    description: "Play a game of battleship within discord",
    aliases: null,
    args: 1,
    run: async (client, message, args) => {
        const BattleShip = new DiscordBattleShip({
            embedColor: "RED", /* Any Discord.js Color Resolvable will work. */
            prefix: "m!", /* This is the prefix that will be used in the users DM's for commands.
                    You can set this to any string. */
        });
        await BattleShip.createGame(message)
    }
}
