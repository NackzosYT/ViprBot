const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '&'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ViprBot|&help`,"http://twitch.tv/nackzos")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});









// !$say

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// !$say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "emb") {
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x00AE86)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

 


   client.on('message', message => {
     if (message.content === "&info") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
               .setFooter(`<@!495264302551531520>`, '')
  .addField("Done | تــــم" , "✉ | تم ارسالك في الخاص")
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
          var prefix = "&";
    if(message.content.startsWith(prefix + 'avatar')) {
        var mentionned = message.mentions.users.first();
          var getvalueof;
          var bot;
          if(mentionned) {
            getvalueof = mentionned;
          } else {
            getvalueof = message.author;
          }
          let avatar = new Discord.RichEmbed()
          .setTitle(`${getvalueof.username}\'s Avatar`)
          .setImage(`${getvalueof.avatarURL}`);
          message.channel.sendEmbed(avatar);
      }
});

  

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('**وعليكم السلام**');
  }
});

 


client.on('ready', () => {
  console.log(`ViprBot`);

});
//Hixx
client.on('message', message => {
if (message.content.split(' ')[0] == '&bc2')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});

client.on('ready', () => {
  console.log(`the bot is online`);
});

function pluck(array) {
    return array.map('function(item) { return item["name"]; }');
}

client.on('ready', () => {
  console.log(`the bot is online`);
});



client.on("message", (message) => {
    if (message.content.startsWith("&kick ")) {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('⚠ ماعندك الصلاحيات');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " تم طرده راح الزين  ");
        }).catch(() => {
            message.channel.send("Error -_-");
        });
    }
});




client.on("message", (message) => {
    if (message.content.startsWith("&ban ")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':warning: ماعندك الصلاحيات');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(member.displayName + " تم تبنيده راح الزين ");
        }).catch(() => {
            message.channel.send("Error -_-");
        });
    }
});






client.on('message', message => {
   if (message.content === "&roll") {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }
});







client.on('message', message => {
if(message.content == '&adminbot') {
         if(!message.author.id === '384722029427032075') return;
var gimg;
var gname;
var gmemb;
var gbots;
var groles;
var servers = client.guilds;
servers.forEach((g)=>{
gname = g.name;
gimg = g.iconURL;
gmemb = g.members.size;
gbots = g.members.filter(m=>m.bot).size;
groles = g.roles.map(r=> {return r.name});
let serv = new Discord.RichEmbed()
.setAuthor(gname,gimg)
.setThumbnail(gimg)
.addField('Server bots',gbots)
.addField('Server Member Count',gmemb = g.members.size)
.setColor('RANDOM')
message.channel.send(`
Server Name : **${gname}**
Server MemberCount : **${gmemb} **
        
        `);
      message.channel.sendEmbed(serv);
}) 
}
});











                    client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('&ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms")
                        .addField('**WebSocket:**',api + " ms")
         message.channel.send({embed:embed});
                        }
                    });




 client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'chat');
  if (!channel) return;
  let memberavatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('***منور السيرفر حياك  الله نتمنى لك اجمل الاوقات معنى***',`**[${member}]**`)
    .addField('***انت العضو رقم***',`**[${member.guild.memberCount}]**`)
    channel.send({embed:embed});
}
);



 client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'chat');
  if (!channel) return;
  let memberavatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('***3/> ...راح الزين الله معهْ : ّ ( ***',`**[${member}]**`)
    .addField('***عدد الاعضاء الان***',`**[${member.guild.memberCount}]**`)
    channel.send({embed:embed});
}
);





 client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  let memberavatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('***منور السيرفر حياك  الله نتمنى لك اجمل الاوقات معنى***',`**[${member}]**`)
    .addField('***انت العضو رقم***',`**[${member.guild.memberCount}]**`)
    channel.send({embed:embed});
}
);



 client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  let memberavatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('***3/> ...راح الزين الله معهْ : ّ ( ***',`**[${member}]**`)
    .addField('***عدد الاعضاء الان***',`**[${member.guild.memberCount}]**`)
    channel.send({embed:embed});
}
);










const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith("كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('TurboBot' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


   
   
    
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "&help") {
               if(!message.channel.guild) return message.reply(':x:  **The orders are not in your الاوامر مو فى *لخاص**');
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(`
                    :gem: <@!495264302551531520> :gem:    
***بوت عربي بالكامل***
:small_blue_diamond:***مميزات كثيره***:small_orange_diamond: 
-:man::rocket:***برمجة البوت 24 ساعه ويمكن ينضاف اي شي في اي لحظة ممكنة***
-:wrench:*كل يوم تحديث*
-:radio_button: *شغال 24 ساعه بأذن الله*
-:money_with_wings:*كل الاوامر مجانيه*
-:gear:*اكثر حماية*
:small_orange_diamond: ***Perfix***: &
*علامه لازم تحطها قبل كل كلام*
:small_blue_diamond: ***&bc***
*لخاصية البرودكستات*
:small_orange_diamond: ***&Td***
*لاضهار التاريخ والساعه*
:small_blue_diamond: ***&image***
*لارسال صورة السيرفر*
:small_orange_diamond: ***&inv***
*لاضافة البوت الى سيرفرك*
:small_blue_diamond: ***&roles***
*لمعرفة الرتب الي في السيرفر*
:small_orange_diamond: ***&memb***
*معلومات الاعضاء*
:small_blue_diamond: ***&av***
*يجبلك الافتار حقك يعني صورة حسابك*
:small_orange_diamond: ***&server***
*يجبلك معلومات السيرفر*
:small_blue_diamond: ***&id***
*يجبلك الملف الشخصي حقك*
:small_orange_diamond: ***&clear***
*تمسح بالعدد المطلوب*
:small_blue_diamond: ***&ban***
*تبنيد عضو*
:small_orange_diamond: ***&kick***
*طرد عضو*
:small_blue_diamond: ***&ping***
*يقلك كم بنق البوت*
:small_orange_diamond: ***&servers***
*يقلك كم البوت ف كم سيرفر*
:small_blue_diamond: ***&ct***
*لانشاء روم كتابي*
:small_orange_diamond: ***&cv***
*لانشاء روم صوتي*
:small_blue_diamond: ***&delet***
*لحذف روم صوتي او كتابي*
:small_orange_diamond: ***&rooms***
*لمعرفه كم روم في ا لسيرفر وكم عددهم*
:small_blue_diamond: ***&roles***
*لمعرفه كم رتبه في السيرفر وعددهم*
:small_orange_diamond: ***&colorcr***
*لعمل 140 لون*
:small_blue_diamond: ***كت تويت***
*للعب لعبه كت تويت*
:small_orange_diamond: ***&sup***
*لارسال سيرفر السبورت الخاص بالبوت*
:small_blue_diamond: ***&draw***
*لكتابه الكلام في الصوره*
:small_orange_diamond: ***سيرفر السبورت الخاص بالبوت***
***https://discord.gg/eaYqwUw***

`);

      message.author.send({embed});
    }
});
    

    
    
    
    
  client.on('message', message => {
    if(message.content == '&memb') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:red_circle: dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:large_orange_diamond: idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_circle: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
🔹  all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });
    
    
    
    
    
    




    client.on('message', message => {
     if (message.content === "&server") {
 var servername = message.guild.name;
var serverowner = message.guild.owner;
var memberCount = message.guild.memberCount;
var id = message.guild.id;
var region = message.guild.region;
var channels = message.guild.channels.size;
var roles = message.guild.roles;
var createdAt = message.guild.createdAt;
var verificationLevel = message.guild.verificationLevel;
var defaultChannel = message.guild.defaultChannel;
    const embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name}`)         
               .setFooter(`rimc13.`, 'https://cdn.discordapp.com/avatars/371290600961736705/11b23b20cb45cb5d7ef1855c53958ef5.png?size=2048')
          .setColor(0x00AE86)
                          .addField('|- ايدي السيرفر ',`**(${message.guild.id})**`)
                          .addField('|- الشات الأساسي في السيرفر',`**${message.guild.defaultChannel}**`, true)
                          .addField('|- عدد اعضاء السيرفر',`**[${memberCount}]**`)
                          .addField('|- الدوله الي موجود عليها السيرفر', `**[${message.guild.region}]**`)
                          .addField('|- عدد الرومات الموجودة في السيرفر',`**[${message.guild.channels.size}]**`, true)
                          .addField('|- صاحب السيرفر',`**${message.guild.owner}**`)
                          .addField('|- تاريخ افتتاح السيرفر',`**${message.guild.createdAt}**`)
      message.channel.send({embed})
} 
});












     
     
     
     
     client.on('message' , message => {
    if (message.content === "&inv") {
        if(!message.channel.guild) return message.reply('This Command is Only For Servers');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('Click Here To Invite The Bot')
 .setURL('https://discordapp.com/oauth2/authorize?client_id=495264302551531520&scope=bot&permissions=36760572')
  message.channel.sendEmbed(embed);
   }
});
     
    
    
    

    
    
    
   





client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
}
});





 

client.on('message', message => {
     if (message.content === "&servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("***Servers***" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});









client.on('message', message => {
if(message.content == '&adminbot') {
         if(!message.author.id === '378953334251454475') return;
var gimg;
var gname;
var gmemb;
var gbots;
var groles;
var servers = client.guilds;
servers.forEach((g)=>{
gname = g.name;
gimg = g.iconURL;
gmemb = g.members.size;
gbots = g.members.filter(m=>m.bot).size;
groles = g.roles.map(r=> {return r.name});
let serv = new Discord.RichEmbed()
.setAuthor(gname,gimg)
.setThumbnail(gimg)
.addField('Server bots',gbots)
.addField('Server Member Count',gmemb = g.members.size)
.setColor('RANDOM')
message.channel.send(`
Server Name : **${gname}**
Server MemberCount : **${gmemb} **
        
        `);
      message.channel.sendEmbed(serv);
}) 
}
});





client.on('message', message => {
            if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
                var prefix = "&";
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**&bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField('Server:', `${message.guild.name}`,true)
                .addField('By:', `${message.author.username}#${message.author.discriminator}`,true)
                .addField('message:', args)
                .setThumbnail(message.guild.iconURL)
                .setColor('RANDOM')
                m.send(`${m}`,{embed: bc});
            });
            const dark = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle(':white_check_mark:| Done ') 
            .addBlankField(true)
            .addField(':hotsprings:| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField(':pencil:| message: ', args)
            .setColor('RANDOM')
            message.channel.sendEmbed(dark);          
        }
        } else {
            return;
        }
    });





client.on("message", message => {
    const prefix = "&"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
   message.channel.send({embed});
      }
  });
  
  
  
  
  
  client.on("message", (message) => {
if (message.content.startsWith("&ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});




client.on("message", (message) => {
if (message.content.startsWith("&cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});














client.on("message", (message) => {
    if (message.content.startsWith('&del')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});




client.on('message', message => {
    if (message.content === "&roles") {
         if (!message.guild) return;
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
           .addField(`${message.guild.name}`,`**Roles :white_check_mark:**`)
         .addField(':arrow_down: Number Roles. :heavy_check_mark:',`** ${message.guild.roles.size}**`)
         .addField(':arrow_down: Name Roles. :heavy_check_mark:',`**${roles}**`)
        message.channel.sendEmbed(embed);
    }
});






  client.on('message', message => {
    if (message.content === "&rooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});





client.on("guildCreate", guild => {
  console.log(` شخص ما اضاف بوت  في سيرفر اسمه ! ${guild.name} اونر سيرفر هو ${guild.owner.user.username}!`)
});









  
  

client.on('message', message => {
     if (message.content === "&sup") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#random")
  .addField(":white_check_mark: :heart:")
     
     
     
  message.channel.sendEmbed(embed);
    }
});





client.on('message', message => {
     if (message.content === "&help") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#random")
  .addField(":white_check_mark: :heart:")
     
     
     
  message.channel.sendEmbed(embed);
    }
});






client.on('message', message => {
          var prefix = "&";
        if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});















client.on('message', message => {
    var prefix = "&"
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {
    console.log(`Im ready ${client.user.username}`)
});










client.on("message", message => {
                         if(message.channel.type === "dm") return;
    var prefix = "&";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You Don't Have `MANAGE_MESSAGES'` Premissions ");
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("&clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});










 client.on("message", msg => {
           var prefix = "&";
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
  }
});










client.on('message' , message => {
            var prefix = "&";
  if (message.author.bot) return;
    if(message.content.startsWith (prefix  + 'sup')) {
const embed = new Discord.RichEmbed()
.setColor("BLUE")
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle(':arrow_right: اضغط هنا لدخول سيرفر السبورت')
.setURL('https://discord.gg/4hVwmrY')
message.author.sendEmbed(embed);
}
});






client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "&clear") {
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});








client.on('message', function(message) {
                  if(!message.channel.guild) return;
    if(message.content ===  '&colorcr') {
        if(message.member.hasPermission('MANAGE_ROLES')) {
            setInterval(function(){})
            message.channel.send('جاري عمل الالوان |✅')
        }else{
            message.channel.send('ما معاك البرمشن المطلوب  |❌')
            }
    }
});

client.on('message', message=>{
    if (message.content ===  '&colorcr'){
              if(!message.channel.guild) return;
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 141; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
            }
            }
    }
});




















client.on('message', message => {
  if (message.content === "&bot") {
  let embed = new Discord.RichEmbed()
  .addField("__🛠 Bot Delevoper__" , '<@!487333494910091267>')
  .addField("__Servers__" , client.guilds.size)
  .addField("__Users__" , client.users.size)
  .addField("__Channels__" , client.channels.size)
  .setColor("#RANDOM")
message.channel.sendEmbed(embed);
 }
});





































client.login(process.env.BOT_TOKEN);
