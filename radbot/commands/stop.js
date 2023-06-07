
module.exports = {
	name: "stop",
	description: "stop the bot",

	async execute(message, client, guildQueue) {
		let queue = client.player.hasQueue(message.guild.id);

		if (queue && guildQueue.isPlaying) {
			guildQueue.stop();
		}
	},
};
