
module.exports = {
	name: "play",
	description: "Joins VC and plays audio.",

	async execute(message, args, client, guildQueue) {
		console.log("playing cmd: " + args);

		const voiceChannel = message.member.voice.channel;
		let queue = client.player.createQueue(message.guild.id);

		await queue.join(voiceChannel);

		let song = await queue.play(args).catch(err => {
			console.log(err);
			if (!guildQueue) {
				queue.stop();
			}
		});

		//await queue.play(args);

		message.reply("playing whatever you sent");
	},
};
