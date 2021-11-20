const Discord = require("discord.js");
const client = new Discord.Client({
    partials: ["CHANNEL", "MESSAGE"],
    restTimeOffset: 0,
    intents: 513,

});
const config = require("./config.json");
const fs = require("fs")

client.on("ready", () => {
    console.log("Jsem ready");
    let statuses = config.statuses

    setInterval(function() {
        let status = statuses[Math.floor(Math.random()* statuses.length)];
        client.user.setActivity(status,{type: "PLAYING"});
    },10000)
});

client.on("messageCreate", (message) => {
    if (!message.guild) return;
    if (message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return;
    if(message.content.startsWith(config.prefix+"ping")){
        message.channel.send({
            content: `Pong \nPing: ${client.ws.ping}ms`
        })
    }
})


client.login(config.token)

