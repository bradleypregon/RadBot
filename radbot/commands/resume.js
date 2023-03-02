const main = require("../main.js");

module.exports = {
	name: "resume",
	description: "resume the music",

	async execute(message) {
		const client = main.client;
		let guildQueue = client.player.getQueue(message.guild.id);
		// if isPaused = true and songQueue != null
		//   setPaused = false
		guildQueue.setPaused(false);
	},
};
