const Discord = require("discord.js");
const bot = new Discord.Client({
    intents: (
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    )
});
const config = require("./config.json")

bot.on("ready", function (){
    console.log(`${bot.user.username} is online`);
});

bot.login(config.token);