const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
});

//Welcome
client.on("guildMemberAdd", (member) => {
    var embed = new Discord.RichEmbed()
    .setAuthor("Welcome!")
    .addField("New Member", member, true)
    .addField("ID", member.id, true)
    .addField("Welcome Message", `Welcome ${member} to the Khaoz Entertainment Discord server`)
    client.channels.get("396038830542815233").send(embed)
});

client.on('message', message => {
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'faq') {
        var embed = new Discord.RichEmbed()
        .setAuthor("Frequently asked questions")
        .addField("Can you do money drops?", "Yes I can do money drops up to 2.5K Each, I do not recommend getting your money this way but its in an option.", true)
        .addField("Can you give me millions?", "The only way to provide you with millions on GTA is to use the Stealth Mode, of giving money. If you are unsure what that is it's described below.", true)
        .addField("Can I have free money?", "Sometimes i'm nice enough to do it for free but if you constantly beg and ask for it, chances are you won't get it.", true)
        .addField("Do you need access to my account", "Yes. The reason I need access to your acount is so that I can do something called 'Stealth Mode' which is the fastest and safest way to give money. If you have any concerns, please message me (<@117280061236707332>)", true)
        .addField("Can you give me levels", "Yes, as stated in the Featured Plans, all plans get levels ranging from 50 to any level requested.", true)
        .addField("Our Website", "[Click Here](https://frostyarmy.com/shop)", true)
        .setImage("https://i.imgur.com/PCMeaBU.png", true)
        .setThumbnail("https://i.imgur.com/mjHyRm5.png", true)
        .setColor("00bfff")
        message.author.send(embed)
    };


    if (command === 'plans') {
        var embed = new Discord.RichEmbed()
            .setAuthor("Featured Plans")
            .addField("Basic ($5)", '•50 Levels \n•LSC unlock all \n•All weapons unlocked \n•100 Million dollars \n•All weapons unlocked', true)
            .addField("Silver ($10)", "•100 Levels \n•Unlock all \n•200 Million dollars \n•All weapons unlocked \n•Max Skills", true)
            .addField("Gold ($15)", "•Any level \n•Unlock all \n•300 Million dollars \n•All weapons unlocked \n•Max Skills")
            .addField("Premium ($20)", "•Any level \n•Unlock all \n•400 Million dollars \n•All weapons unlocked \n•Max Skills", true)
            .addField("Diamond ($35)", "•Any level \n•Unlock all \n•700 Million dollars \n•All weapons unlocked \n•Max Skills", true)
            .addField("Platinum ($40)", "•Anly level \n•Unlock all \n•2 Billion dollars \n•All weapons unlocked \n•Max Skills", true)
            .addField("Order From Our Site", "[Click Here](https://frostyarmy.com/shop)", true)
            .setColor("00bfff")
        message.author.send(embed)
        if (client.user.presence.status === ('online')) {
            var embed = new Discord.RichEmbed()
                .addField("Services Status", "The following is the current status of our services status are updated in real time")
                .addField("Status", "Active", true)
                .addField("Information", "Currently we are accepting orders. If you have any questions please contact <@117280061236707332>.", true)
                .setColor("228B22")
            message.author.send(embed)
        } else {
            if (client.user.presence.status === ('dnd')) {
                var embed = new Discord.RichEmbed()
                    .addField("Services Status", "The following is the current status of our services status are updated in real time")
                    .addField("Status", "Offline", true)
                    .addField("Information", "Currently we are not accepting orders or working on orders. We will get to your order whenever we open back up for orders. If you have any questions please contact <@117280061236707332>.", true)
                    .setColor("DC143C")
                message.author.send(embed)
        } else {
            if (client.user.presence.status === ('idle')) {
                var embed = new Discord.RichEmbed()
                    .addField("Services Status", "The following is the current status of our services status are updated in real time")
                    .addField("Status", "Busy", true)
                    .addField("Information", "Currently we are working on orders. If you have any questions please contact <@117280061236707332>.", true)
                    .setColor("FF7F50")
                message.author.send(embed)
            }}
    }};



    if (command === 'status') {
        var embed = new Discord.RichEmbed()
            .setAuthor("Status Information")
            .addField("Attention:", 'The status is updated automatically by <@117280061236707332> just because the status might state that it is busy or offline does not mean that we are not accepting orders this simply just means that <@117280061236707332> may be asleep and or may be doing an account currently and will get to your order as soon as he is finished if you have ordered and are waiting please contact <@117280061236707332>', true)
                .setThumbnail("https://i.imgur.com/mjHyRm5.png", true)
            .setColor("00bfff")
        message.author.send(embed)
        if (client.user.presence.status === ('online')) {
            var embed = new Discord.RichEmbed()
                .addField("Services Status", "The following is the current status of our services status are updated in real time")
                .addField("Status", "Active", true)
                .addField("Information", "Currently we are accepting orders. If you have any questions please contact <@117280061236707332>.", true)
                .setColor("228B22")
            message.author.send(embed)
        } else {
            if (client.user.presence.status === ('dnd')) {
                var embed = new Discord.RichEmbed()
                    .addField("Services Status", "The following is the current status of our services status are updated in real time")
                    .addField("Status", "Offline", true)
                    .addField("Information", "Currently we are not accepting orders or working on orders. We will get to your order whenever we open back up for orders. If you have any questions please contact <@117280061236707332>.", true)
                    .setColor("DC143C")
                message.author.send(embed)
        } else {
            if (client.user.presence.status === ('idle')) {
                var embed = new Discord.RichEmbed()
                    .addField("Services Status", "The following is the current status of our services status are updated in real time")
                    .addField("Status", "Busy", true)
                    .addField("Information", "Currently we are working on orders. If you have any questions please contact <@117280061236707332>.", true)
                    .setColor("FF7F50")
                message.author.send(embed)
            }}
    }};
/*
    if (command === 'status') {
        var embed = new Discord.RichEmbed()
            .addField("Status", client.user.presence.status)
        message.author.send(embed)
    };
*/

    if (command === 'help') {
        var embed = new Discord.RichEmbed()
            .setAuthor("Help")
            .addField("Commands", "This is a list of commands")
            .addField("!help", "Displays help")
            .addField("!services", "Displays the current services")
            .addField("!faq", "Displays the FAQ")
            .addField("!status", "Displays the current status")
        message.author.send(embed)
    };


    if (command === 'online') {
        let modRole = message.guild.roles.find("name", "Administrator");
        if(message.member.roles.has(modRole.id)) {
            client.user.setStatus('online');
            client.user.setActivity("Services are: Active! (Orders are clear and expected to be delivered ontime)")
        } else {
            message.reply("Sorry, you have to be an Admin to do that!")
        }
    };

    if (command === 'offline') {
        let modRole = message.guild.roles.find("name", "Administrator");
        if(message.member.roles.has(modRole.id)) {
            client.user.setStatus('dnd')
            client.user.setActivity("Services are: Offline (Orders will be delivered as soon as possible)");
        } else {
            message.reply("Sorry, you have to be an Admin to do that!")
        }
    };
    
     if (command === 'busy') {
        let modRole = message.guild.roles.find("name", "Administrator");
        if(message.member.roles.has(modRole.id)) {
            client.user.setStatus('idle')
            client.user.setActivity("Services are: Busy (Orders make take longer then expected)");
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