const { SPOTIFY_PLAYLIST_LINK } = process.env;

async function playlist(message) {
    let { author, channel } = message;
    if (channel.type !== 'dm')
        await message.delete()

    return author.send(`📣 The democratic playlist resides here 👉 ${SPOTIFY_PLAYLIST_LINK} 👈`)
}

module.exports = playlist;
