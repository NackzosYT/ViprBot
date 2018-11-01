const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', async() => {
var server = "507565777294196737"; 
var channel = "507565777294196739";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('ناكزوس وبس')
    },305);
})

client.on('message',function(message) {
    let prefix = "!&";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`${args}`); 
}
});

client.login(process.env.BOT_TOKEN); 
