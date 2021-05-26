const { MessageEmbed } = require('discord.js');

module.exports ={
    name: "ping",
    description: "Sends the bots ping",
	category:"info",
	usage: "ping",
	aliases: null,
    run: async (client, message, args) => {
		const embed = new MessageEmbed()
        .setDescription(`\`${client.ws.ping}\`ms`);
        message.channel.send(embed);
    }
}