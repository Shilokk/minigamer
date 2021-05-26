const colors = require('colors')
const db = require('mongoose');
// const Statcord = require('statcord.js')
// const {
//     ShardingManager
// } = require('discord.js')



module.exports = async client => {
    /*
    console.log(`Im in ${client.guilds.cache.size} guilds! and I am serving ${client.users.cache.size}`)
    const manager = new ShardingManager('./index.js', { token: "TOKEN"});
    const statcord = new Statcord.Client({
        client,
        manager,
        key: "statcord.com-a4tXCguhZvtt3EPgfFfi",
        postCpuStatistics: true,
        postMemStatistics: true,
        postNetworkStatistics: true,
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
    })
    */
    function randomStatus() {
        let status = [
            `Mobile gaming is harder than I thought!`,
        ];
        let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus], {
            type: "WATCHING"
        });
    }
    setInterval(randomStatus, 30000);
    console.log('Running')
}