//const main = require("../main.js");

module.exports = {
	name: "play",
	description: "Joins VC and plays audio.",

	async execute(message, args, client) {
		console.log("playing cmd: " + args);

		//const client = main.client;

		let guildQueue = client.player.getQueue(message.guild.id);
		const voiceChannel = message.member.voice.channel;
		let queue = client.player.createQueue(message.guild.id);

		await queue.join(voiceChannel);

		let song = await queue.play(args).catch((_) => {
			if (!guildQueue) queue.stop();
		});

		await queue.play(args);

		message.reply("playing whatever you sent");
	},
};
