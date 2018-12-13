const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', async() => {
var server = "522782467749445662"; 
var channel = "522782561450197014";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**BloodForEver** :leaves:')
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


client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
 
    if (command == "leave") {
       
 
        if(message.author.id != "510758300313452545") return message.reply("**Sorry, you don't have permission to use this!**");
 
       
        if(!args[0] || args[1]) return message.reply(`**${prefix}leave <guild_id>**`);
        let definedGuild = client.guilds.get(args[0])
        if(!definedGuild) return message.reply(`** 404 : invalid guild id or this guild delted**`);
        client.guilds.get(args[0]).leave()
        .catch(error => { return message.reply(error.message) })
    }    
})

client.login(process.env.BOT_TOKEN); 
