const { Client } = require('discord.js');
const add = require('./commands/add');
const playlist = require('./commands/playlist');
const defaultCommand = require('./commands/default');

const { DISCORD_BOT_TOKEN } = process.env;

const client = new Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    const commandPrefix = '!'
    if (!message.content.startsWith(commandPrefix) || message.author.bot)
        return;

    const args = message.content.slice(commandPrefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    const commands = ['add', 'playlist'];

    switch (command) {
        case 'add':
            return add(client, message, args);
        case 'playlist':
            return playlist(message);
        default:
            return defaultCommand(message, commands);
    }
});

client.login(DISCORD_BOT_TOKEN); 