const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', async() => {
var server = "507505319610417153"; 
var channel = "507505319610417155";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('اكتب الرساله هنا')
    },305);
})

client.on('message',function(message) {
    let prefix = "!";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`${args}`); 
}
});

client.login(process.env.BOT_TOKEN); 
