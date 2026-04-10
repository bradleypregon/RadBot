const { Collection } = require("discord.js");
const { Player } = require('discord-player');
const { DefaultExtractors } = require('@discord-player/extractor');

const client = new Discord.Client({
	intents: [
		DirectMessages,
		Guilds,
		GuildMessages,
		GuildVoiceStates,
		MessageContent,
	],
});

client.commands = new Collection();

const fs = require("fs");
require("dotenv").config();

const prefix = "/";

// commands in ./commands
const cmdFiles = fs
	.readdirSync("src/commands/")
	.filter((file) => file.endsWith(".js"));

for (const file of cmdFiles) {
	const cmd = require(`./commands/${file}`);
	client.commands.set(cmd.name, cmd);
}

const { Player } = new Player(client);
await player.extractors.loadMulti(DefaultExtractors);

const player = new Player(client, {
	leaveOnEmpty: false,
	leaveOnStop: false,
	deafenOnJoin: false,
});

// not recommended
//client.player = player;

client.once("ready", () => {
	console.log("RadBot is sunshine.");
});

client.on("messageCreate", async (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(" ");
	const command = args.shift().toLowerCase();

	let guildQueue = client.player.getQueue(message.guild.id);

	// commands
	if (command === "ping") {
		client.commands.get("ping").execute(message);
	} else if (command === "play") {
		client.commands.get("play").execute(message, args[0], client, guildQueue);
	} else if (command === "pause") {
		client.commands.get("pause").execute(message, client, guildQueue);
	} else if (command === "resume") {
		client.commands.get("resume").execute(message, client, guildQueue);
	} else if (command === "stop") {
		client.commands.get("stop").execute(message, client, guildQueue);
	}
});

module.exports.client = client;
client.login(process.env.TOKEN);
