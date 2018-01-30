const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
  // client.user.setActivity('Knowing of da weay', { url: 'https://twitch.tv/krizfrost' });
});

client.on('message', message => {
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

/* F A Q */
    if (command === 'faq') {
        var embed = new Discord.RichEmbed()
        .setAuthor("Frequently asked questions")
        .addField("Can you do money drops?", "Yes I can do money drops up to 2.5K Each, I do not recommend getting your money this way but its in an option.", true)
        .addField("Can you give me millions?", "The only way to provide you with millions on GTA is to use the Stealth Mode, of giving money. If you are unsure what that is it's described below.", true)
        .addField("Can I have free money?", "Sometimes i'm nice enough to do it for free but if you constantly beg and ask for it, chances are you won't get it.", true)
        .addField("Do you need access to my account", "Yes. The reason I need access to your acount is so that I can do something called 'Stealth Mode' which is the fastest and safest way to give money. If you have any concerns, please message me (<@117280061236707332>)", true)
        .addField("Can you give me levels", "Yes, as stated in the Featured Plans, all plans get levels ranging from 50 to any level requested.", true)
        .setImage("https://i.imgur.com/PCMeaBU.png", true)
        .setThumbnail("https://i.imgur.com/mjHyRm5.png", true)
        .setColor("00bfff")
        message.author.send(embed)
    };
        if (command === 'faq') {
        var embed = new Discord.RichEmbed()
        .setAuthor("Bot Commands")
        .addField("```!faq \n!plans \n!status \n!status ```", "reply to the bot with one of the commands above")
        .setColor("00bfff")
        message.author.send(embed)
    };
/* P L A N S */
    if (command === 'plans') {
        var embed = new Discord.RichEmbed()
        .setAuthor("Featured Plans")
        .addField("Basic ($5)", '•50 Levels \n•LSC unlock all \n•All weapons unlocked \n•100 Million dollars \n•All weapons unlocked', true)
        .addField("Silver ($10)", "•100 Levels \n•Unlock all \n•200 Million dollars \n•All weapons unlocked", true)
        .addField("Gold ($15)", "•Any level \n•Unlock all \n•300 Million dollars \n•All weapons unlocked", true)
        .addField("Premium ($20)", "•Any level \n•Unlock all \n•400 Million dollars \n•All weapons unlocked", true)
        .addField("Khaoz ($40)", "•Anly level \n•Unlock all \n•2 Billion dollars \n•All weapons unlocked", true)
        .setColor("00bfff")
        message.author.send(embed)
    };
            if (command === 'plans') {
        var embed = new Discord.RichEmbed()
        .setAuthor("Bot Commands")
        .addField("```!faq \n!plans \n!status \n!status ```", "reply to the bot with one of the commands above")
        .setColor("00bfff")
        message.author.send(embed)
        if (client.user.presence.status === ('online')) {
            var embed = new Discord.RichEmbed()
            .addField("Services Status", "The following is the current status of our services status are updated in real time")
            .addField("Status", ":white_check_mark:", true)
            .addField("Active", "Orders are clear and expected to be delivered ontime", true)
            message.author.send(embed)
        }
            if (client.user.presence.status === ('idle')) {
            var embed = new Discord.RichEmbed()
            .addField("Services Status", "The following is the current status of our services status are updated in real time")
            .addField("Status", "Busy", true)
            .addField(":vibration_mode:", "Orders make take longer then expected", true)
            .addField("Information", "Our services being busy usually is a resault of multiple orders being filled at this time which means your order may be delivered as soon as we are finished contact <@117280061236707332> for more information on your order.", true)
            message.author.send(embed)
        }
                 if (client.user.presence.status === ('dnd')) {
            var embed = new Discord.RichEmbed()
            .addField("Services Status", "The following is the current status of our services status are updated in real time")
            .addField("Status", "Offline", true)
            .addField(":red_circle:", "Orders will be delivered as soon as possible", true)
            .addField("Information", "Our services being offline usually is a resault of us being asleep if you order at this time your order will be delivered as soon as possible be sure to contact <@117280061236707332> for more information on your order.", true)
            message.author.send(embed)
                 };
    };
/* C H A N G E   B O T   S T A T U S   C O MM */
          if (command === 'online') {
        let modRole = message.guild.roles.find("name", "Administrator");
        if(message.member.roles.has(modRole.id)) {
            client.user.setActivity("Services are: Active! (Orders are clear and expected to be delivered ontime)"),
            client.user.setStatus('online')
        } else {
            message.reply("Sorry, you have to be an Admin to do that!")
        }
    };

    if (command === 'offline') {
        let modRole = message.guild.roles.find("name", "Administrator");
        if(message.member.roles.has(modRole.id)) {
            client.user.setActivity("Services are: Offline (Orders will be delivered as soon as possible)"),
            client.user.setStatus('dnd');
        } else {
            message.reply("Sorry, you have to be an Admin to do that!")
        }
    };
    
     if (command === 'busy') {
        let modRole = message.guild.roles.find("name", "Administrator");
        if(message.member.roles.has(modRole.id)) {
            client.user.setActivity("Services are: Busy (Orders make take longer then expected)"),
            client.user.setStatus('idle');
        } else {
            message.reply("Sorry, you have to be an Admin to do that!")
        }
    };
    
      if (command === 'watching') {
        let modRole = message.guild.roles.find("name", "Administrator");
        if(message.member.roles.has(modRole.id)) {
            client.user.setActivity("Busy (Kriz is relaxing watch him play on stream with friends)", { url: 'https://www.twitch.tv/swizzlerosee' }),
            client.user.setStatus('idle');
        } else {
            message.reply("Sorry, you have to be an Admin to do that!")
        }
    };
});
  
client.login(token);