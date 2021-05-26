const {
  Client,
  Collection
} = require("discord.js");

const client = new Client({
  ws: {
    partials: ['MESSAGE', 'REACTION'],
    properties: { $browser: 'Discord iOS' }
    // intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES"]
  }
});

client.config = require('./data/config.json')

{
  ["aliases", "commands"].map((x) => (client[x] = new Collection()));
  ["command", "events"].map((x) => require(`./handlers/${x}`)(client));
}


client.login(client.config.token);