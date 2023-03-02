const main = require("../main.js");

module.exports = {
	name: "pause",
	description: "pause the music",

	async execute(message) {
		const client = main.client;
		// let guildQueue = client.player.getQueue(message.guild.id);
		// guildQueue.setPaused(true);

		// if songQueue != null and song is currently playing
		//     setPaused(true)
		let queue = client.player.hasQueue(message.guild.id);

		if (queue && queue.isPlaying()) {
			let queue = client.player.getQueue(message.guild.id);
			queue.setPaused(true);
		}
	},
};
