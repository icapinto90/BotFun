// var { readdirSync } = require('fs');
const TokenList = require("./tokens.json");
const { Client, GatewayIntentBits, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client);
  console.log(Intents.FLAGS.GUILDS);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(TokenList.DiscordBotToken);

// for (const file of readdirSync('./commands/')) {
//     if (!file.endsWith(".js")) return;
//     var fileName = file.substring(0, file.length - 3);
//     console.log(fileContents);
// }

// for (const file of readdirSync('./events/')) {
//     if (!file.endsWith(".js")) return;
//     var fileName = file.substring(0, file.length - 3)
//     var fileContents = require(`./events/${file}`);
//     console.log(fileContents);
// }
