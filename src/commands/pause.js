
module.exports = {
	name: "pause",
	description: "pause the music",

	async execute(message, client, guildQueue) {
		console.log("Pause called");
		let queue = client.player.hasQueue(message.guild.id);

		if (queue && guildQueue.isPlaying) {
			guildQueue.setPaused(true);
		}
	},
};
