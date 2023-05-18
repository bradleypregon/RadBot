const { Client, Collection, GatewayIntentBits } = require("discord.js");

const client = new Client({
	intents: [
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.MessageContent,
	],
});

client.commands = new Collection();
const fs = require("fs");
require("dotenv").config();
const prefix = "/";

// commands in ./commands
const cmdFiles = fs
	.readdirSync("./commands/")
	.filter((file) => file.endsWith(".js"));

for (const file of cmdFiles) {
	const cmd = require(`./commands/${file}`);
	client.commands.set(cmd.name, cmd);
}

// Define Player and create a client property = player
const { Player } = require("discord-music-player");
const player = new Player(client, {
	leaveOnEmpty: false,
	leaveOnStop: false,
	deafenOnJoin: false,
});
client.player = player;

client.once("ready", () => {
	console.log("RadBot is sunshine.");
});

client.on("messageCreate", async (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(" ");
	const command = args.shift().toLowerCase();

	// commands
	if (command === "ping") {
		client.commands.get("ping").execute(message);
	} else if (command === "play") {
		client.commands.get("play").execute(message, args[0], client);
	} else if (command === "pause") {
		client.commands.get("pause").execute(message);
	} else if (command === "resume") {
		client.commands.get("resume").execute(message);
	} else if (command === "stop") {
		client.commands.get("stop").execute(message);
	}
});

module.exports.client = client;
client.login(process.env.TOKEN);
