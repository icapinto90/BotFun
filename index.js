// const Discord = require('discord.js');
// const client = new Discord.Client();
// var { readdirSync } = require('fs');

// client.config = require('./config.js');
// client.commands = new Discord.Collection();


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

// client.login(client.config.token)
//     .then(() => {
//         if (!client.user.bot) { console.log("[JPBTips] Don't self bot idot"); return process.exit() };
//         console.log(`Client logged in as ${client.user.tag}`);
//     })
//     .catch((err) => {
//         console.error("Error while logging in: " + err);
//         if (err.toString().match("/incorrect login details/gi")) console.log("[JPBTips] | Make sure to change up your config!");
//     });

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.login('token');