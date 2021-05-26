const { ShardingManager } = require("discord.js");
const { ShardingClient } = require("statcord.js");
const { token } = require("./data/config.json")

const manager = new ShardingManager('./src/index.js', { token: token });
// Create statcord sharding client
const statcord = new ShardingClient({
    key: "statcord.com-a4tXCguhZvtt3EPgfFfi",
    manager,
    postCpuStatistics: true, /* Whether to post CPU statistics or not, defaults to true */
    postMemStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    postNetworkStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    autopost: true /* Whether to auto post or not, defaults to true */
});

/* Register custom fields handlers (these are optional, you are not required to use this function)
* These functions are automatically run when posting
*/

// Spawn shards, statcord works with both auto and a set amount of shards
manager.spawn();

// Normal shardCreate event
manager.on("shardCreate", (shard) => {
    console.log(`Spawned shard ${shard.id}`);
});

statcord.on("autopost-start", () => {
    // Emitted when statcord autopost starts
    console.log("Started autopost");
});

statcord.on("post", status => {
    // status = false if the post was successful
    // status = "Error message" or status = Error if there was an error
    if (!status) console.log("Successful post");
    else console.error(status);
});