async function defaultCommand(message, commands) {
    let { author, channel } = message;
    if (channel.type !== 'dm')
        await message.delete()

    author.send(`Hi there👋, the available commands are 🧐: **!${commands.join('** , **!')}**`)
}

module.exports = defaultCommand;