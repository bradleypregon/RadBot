const main = require("../main.js");

module.exports = {
	name: "stop",
	description: "stop the bot",

	async execute(message) {
		const client = main.client;
		let guildQueue = client.player.getQueue(message.guild.id);
		// if songQueue != null and song is currently playing
		//     setPaused(true)
		guildQueue.stop();
	},
};
