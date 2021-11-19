const discord = require("discord.js")
const client = new discord.Client({
    intents: (
        discord.Intents.FLAGS.GUILDS,
        discord.Intents.FLAGS.GUILD_MESSAGES
    )
});
const config = require(`./config.json`)

client.on("ready", () => {
    console.log("Jsem ready");
});

client.on("messageCreate", (message) => {
    if (message.content === "ping") {
        message.reply({
            content: "pong"
        })
    }
})

client.login(process.env.token)