const { MessageEmbed } = require('discord.js');
const osutils = require('os-utils');
const prettyMilliseconds = require('pretty-ms');


module.exports ={
    name: "botinfo",
    description: "Provides some bot info",
	category:"info",
	usage: "botinfo",
	aliases: null,
    run: async (client, message, args) => {
		var milliseconds = parseInt((client.uptime % 1000) / 100),
        seconds = parseInt((client.uptime / 1000) % 60),
        minutes = parseInt((client.uptime / (1000 * 60)) % 60),
        hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot Stats')
			.setColor('#000000')
			.addFields(
                {
                    name: '🌐 Servers',
                    value: `${client.guilds.cache.size}`,
                    inline: true
                },
                {
                    name: '👥 Server Users',
                    value: `${client.users.cache.size}`,
                    inline: true
				},
				{
					name: "<:1739_CMD:795561317929844736> Total commands",
					value: `${client.commands.size}`,
					inline: true
				},
				{
					name: "<:9136_js:795561317770723329> Node.js Version",
					value: process.version,
					inline: true
				},
				{
					name: "<:8724_CPU:795561317489836053> CPU cores",
					value: osutils.cpuCount() + " Cores",
					inline: true
				},
				{
					name: "<:ram:795561317481447436>Amount of memory",
					value: osutils.totalmem().toLocaleString(),
					inline: true
				},
				{
					name: "<:6274_linux1:795561730955673610> VPS OS",
					value: osutils.platform(),
					inline: true
				},
				{
					name: "⏳ VPS uptime",
					value:  hours + " **h, **" + minutes + "**m, **" + seconds + "." + milliseconds + "**s**",
					inline: true
				},
				{
					name: "⌛ Latency",
					value: client.ws.ping + 'ms',
					inline: true
				},
			)
        await message.channel.send(embed)
    }
}