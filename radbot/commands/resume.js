
module.exports = {
	name: "resume",
	description: "resume the music",

	async execute(message, client, guildQueue) {
		console.log("Resume Called");
		let queue = client.player.hasQueue(message.guild.id);

		console.log(`Has Queue: ${queue}`)
		// TODO: check if (queue && guildQueue.isPaused)
		if (queue) {
			guildQueue.setPaused(false);
		}
	},
};
