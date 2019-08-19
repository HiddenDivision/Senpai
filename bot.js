const {Client, Attachment, RichEmbed, Guild, GuildMember, MessageMentions, Role} = require('discord.js');
const bot = new Client();
const superagent = require('superagent');

bot.on('ready', ()=>{
    bot.user.setActivity("Senpai.", {type: ('LISTENING')})
    console.log('Online.')
    var Channel = bot.channels.get("612823247775596545");
    Channel.fetchMessage("612824583636123680");
    Channel.fetchMessage("612825576608104460");
    Channel.fetchMessage("612826965233106974");
    Channel.fetchMessage("612827432612921349");
    Channel.fetchMessage("601884630270083092");
    Channel.fetchMessage("601884630270083092");
})

bot.on('raw', event =>{
	const eventname = event.t
	if(eventname === 'MESSAGE_REACTION_ADD')
	{
		var reactionChannel = bot.channels.get(event.d.channel_id);
		if(event.d.message_id === '612824583636123680')
		{
			reactionChannel.fetchMessage(event.d.message_id)
			.then(msg => {
			var msgReaction = msg.reactions.get(event.d.emoji.name + ":" + event.d.emoji.id);
			var user = bot.users.get(event.d.user_id)
			})
			.catch(err => console.log(err))
		}
		else {
			reactionChannel.fetchMessage(event.d.message_id)
			.then(msg => {
			var msgReaction = msg.reactions.get(event.d.emoji.name + ":" + event.d.emoji.id);
			var user = bot.users.get(event.d.user_id)
			})
			.catch(err => console.log(err))
		}
	}
});

bot.on('messageReactionAdd', (messageReaction, user) =>{
	var roleName = messageReaction.emoji.name
	var r16 = messageReaction.message.guild.roles.find("id", "612797772428607570");
	var r18 = messageReaction.message.guild.roles.find("id", "612797979627225105");
	var r21 = messageReaction.message.guild.roles.find("id", "612797988066033686");
	console.log(roleName)
	var member = messageReaction.message.guild.members.find(member => member.id === user.id);
	if(member)
	{
		if(roleName === 'Sip'){
			member.addRole(r16.id)
			console.log("Success.")
		}
		if(roleName === 'sippy'){
			member.addRole(r18.id)
			console.log("Success.")
		}
		if(roleName === 'gasm'){
			member.addRole(r21.id)
			console.log("Success.")
		}
	}
})

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(channel => channel.id === '612746732601606339')
    if(!channel) return;
    let role = member.guild.roles.find("id", "612746023919681597");
    member.addRole(role.id);
    if(member.avatarURL === null){
        const embed9 = new RichEmbed()
        .setAuthor(`Thanks for joining your senpai!`, ``, '')
        .setDescription(`Have fun with your unique senpai, ${member}!`)
        .setImage(`https://cdn.discordapp.com/attachments/612740129194508300/612751913984983061/Senpai_GIF.gif`)
        .setColor(0xe6d7fd)
        channel.sendEmbed(embed9)
    }
    else{
        const embed = new RichEmbed()
        .setAuthor(`Thanks for joining your senpai!`, ``, '')
        .setDescription(`Have fun with your unique senpai, ${member}!`)
        .setImage(`https://cdn.discordapp.com/attachments/612740129194508300/612751913984983061/Senpai_GIF.gif`)
        .setColor(0xe6d7fd)
        channel.sendEmbed(embed)
    }
})

bot.on('guildMemberRemove', member =>{
    const channel = member.guild.channels.find(channel => channel.id === '612746732601606339')
    if(!channel) return;
    channel.send(`${member} has left senpai.`)
})

bot.on('message', msg=>{
    if(msg.content === "-help"){
		const embed = new RichEmbed()
		.setTitle('Available Commands :')
		.addField('General commands', "'-help' : Shows you all available commands.\n'-kick' : Kicks a specific user from the server.\n'-ban' : Ban a specific user from the server.\n'-unban' : Unban a specific user from the server (Only with the discord ID).\n'-purge' : Pruge a specific amount of messages on the channel.\n'-announcement' : Makes a public announcement to the server.")
		.addField('Entertainment commands', "'-meme' : Sends memes.\n'-OwO' : Makes any text in OwO.")
		.addField('Current normal prefix', "'-' : It's the current prefix.")
		.setColor(0x160033)
		msg.channel.sendEmbed(embed);
    }
    if(msg.content === "-meme"){
		const randomPuppy = require('random-puppy');
		const snekfetch = require('snekfetch');
		let reddit = [
			"meme",
			"animemes",
			"MemesOfAnime",
			"animememes",
			"AnimeFunny",
			"dankmemes",
			"dankmeme",
			"wholesomememes",
			"MemeEconomy",
			"meirl",
			"me_irl",
			"2meirl4meirl"
		];
		let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
		msg.channel.startTyping();
		randomPuppy(subreddit).then(url =>{
			snekfetch.get(url).then(async res =>{
				await msg.channel.sendMessage({
					files: [{
						attachment: res.body,
						name: 'meme.png'
					}]
				}).then(msg.channel.stopTyping());
			});
		});
	}
    let args = msg.content.split(" ");
	switch(args[0]){
		case 'SP':
            if(args[1] === 'slap'){
                let ment = msg.mentions.users.first()
                let message = args.join(" ").slice(30);
                if(args[2] === '@everyone'){
                    message = args.join(" ").slice(17);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} slapped everyone! ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609624915326533645/tenor.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} slapped everyone! ${message}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609624915326533645/tenor.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to slap?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} slapped ${ment.username}! ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609624915326533645/tenor.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} slapped ${ment.username}! ${message}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609624915326533645/tenor.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed)
                    }
                }
            }
            if(args[1] === 'kiss'){
                let ment = msg.mentions.users.first()
                let message = args.join(" ").slice(30);
                if(args[2] === '@everyone'){
                    message = args.join(" ").slice(17);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} kissed everyone! ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609625749959475230/tenor_1.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} kissed everyone! ${message}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609625749959475230/tenor_1.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to kiss?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} kissed ${ment.username}! ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609625749959475230/tenor_1.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed2 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} kissed ${ment.username}! ${message}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609625749959475230/tenor_1.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed2)
                    }
                }
            }
            if(args[1] === 'fuck'){
                let ment = msg.mentions.users.first()
                let message = args.join(" ").slice(30);
                if(args[2] === '@everyone'){
                    message = args.join(" ").slice(17);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} is fucking... everyone... Gosh why? ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609628232526069766/tenor_2.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} is fucking... everyone... Gosh why? ${message}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609628232526069766/tenor_2.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to... Nothing!')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} is fucking... ${ment.username}... Gosh why? ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609628232526069766/tenor_2.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed3 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} is fucking... ${ment.username}... Gosh why? ${message}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609628232526069766/tenor_2.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed3)
                    }
                }
            }
            if(args[1] === 'fu'){
                let ment = msg.mentions.users.first()
                let message = args.join(" ").slice(28);
                if(args[2] === '@everyone'){
                    message = args.join(" ").slice(15);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`Everyone, go fuck yourselves. ${msg.author.username.toString()} doesn't like all of you. ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609629429953724416/tenor_3.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`Everyone, go fuck yourselves. ${msg.author.username.toString()} doesn't like all of you. ${message}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609629429953724416/tenor_3.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to tell to fuck theirself?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${ment.username}, go fuck yourself. ${msg.author.username.toString()} doesn't like you.  ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609629429953724416/tenor_3.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed4 = new RichEmbed()
                    .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609629429953724416/tenor_3.gif`)
                    .setColor(0x160033)
                    .setAuthor(`${ment.username}, go fuck yourself. ${msg.author.username.toString()} doesn't like you.  ${message}`, `${msg.author.avatarURL}`, '')
                    msg.channel.sendEmbed(embed4)
                    }
                }
            }
            if(args[1] === 'kill'){
                let ment = msg.mentions.users.first()
                let message = args.join(" ").slice(30);
                if(args[2] === '@everyone'){
                    message = args.join(" ").slice(17);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} killed everyone! ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609631380586102784/tenor_4.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} killed everyone! ${message}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609631380586102784/tenor_4.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to kill?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} killed ${ment.username}! ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609631380586102784/tenor_4.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed5 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} killed ${ment.username}! ${message}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609631380586102784/tenor_4.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed5)
                    }
                }
            }
            if(args[1] === 'hug'){
                let ment = msg.mentions.users.first()
                let message = args.join(" ").slice(29);
                if(args[2] === '@everyone'){
                    message = args.join(" ").slice(16);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} hugged everyone! ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/608736492394905621/612511266216607744/kiadUBP.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} hugged everyone! ${message}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/608736492394905621/612511266216607744/kiadUBP.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to hug?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} hugged ${ment.username}! ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609637268906311707/tenor_1.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed6 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} hugged ${ment.username}! ${message}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609637268906311707/tenor_1.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed6)
                    }
                }
            }
            if(args[1] === 'shoot'){
                let ment = msg.mentions.users.first()
                let message = args.join(" ").slice(31);
                if(args[2] === '@everyone'){
                    message = args.join(" ").slice(18);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} shot everyone! ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609643152260726785/tenor_6.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} shot everyone! ${message}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609643152260726785/tenor_6.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to shoot!?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} shot ${ment.username}! ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609643152260726785/tenor_6.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed7 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} shot ${ment.username}! ${message}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609643152260726785/tenor_6.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed7)
                    }
                }
            }
            if(args[1] === 'kms'){
                let ment = msg.mentions.users.first()
                let message = args.join(" ").slice(29);
                if(args[2] === '@everyone'){
                    message = args.join(" ").slice(16);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} goes kill himself with everyone... ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609647462264864779/tenor_7.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} goes kill himself with everyone... ${message}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609647462264864779/tenor_7.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to kill yourself with..?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} goes kill himself with ${ment.username}... ${message}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609647462264864779/tenor_7.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed8 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} goes kill himself with ${ment.username}... ${message}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609647462264864779/tenor_7.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed8)
                    }
                }
            }
            if(args[1] === 'boop'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(30);
                if(args[2] === '@everyone'){
                    message9 = args.join(" ").slice(17);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} booped everyone! ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609648336638705665/tenor_8.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} booped everyone! ${message9}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609648336638705665/tenor_8.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to boop?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} booped ${ment.username}! ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609648336638705665/tenor_8.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} booped ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609648336638705665/tenor_8.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                    }
                }
            }
            if(args[1] === 'suck'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(30);
                if(args[2] === '@everyone'){
                    message9 = args.join(" ").slice(17);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} is sucking... everyone... Why am I part of this? ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609648493434503193/tenor_9.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} is sucking... everyone... Why am I part of this? ${message9}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609648493434503193/tenor_9.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to... WHY??')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} is sucking... ${ment.username}... Why am I part of this? ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609648493434503193/tenor_9.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} is sucking... ${ment.username}... Why am I part of this? ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609648493434503193/tenor_9.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                    }
                }
            }
            if(args[1] === 'lick'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(30);
                if(args[2] === '@everyone'){
                    message9 = args.join(" ").slice(17);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} is licking... everyone... So lewd... ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609649685476540416/tenor_10.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} is licking... everyone... So lewd... ${message9}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609649685476540416/tenor_10.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to... lick..?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} is licking... ${ment.username}... So lewd... ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609649685476540416/tenor_10.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} is licking... ${ment.username}... So lewd... ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609649685476540416/tenor_10.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                    }
                }
            }
            if(args[1] === 'pat'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(29);
                if(args[2] === '@everyone'){
                    message9 = args.join(" ").slice(16);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} pats everyone! ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609794873335480350/tenor.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} pats everyone! ${message9}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609794873335480350/tenor.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to pat?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} pats ${ment.username}! ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609794873335480350/tenor.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} pats ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/609302155253383170/609794873335480350/tenor.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                    }
                }
            }
            if(args[1] === 'suicide'){
                if(args[2] === 'bomb'){
                    if(args[3] === '@everyone'){
                        let message9 = args.join(" ").slice(26);
                        if(msg.author.avatarURL === null){
                            const embed9 = new RichEmbed()
                            .setAuthor(`${msg.author.username.toString()} suicide bombed everyone! ${message9}`, ``, '')
                            .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609805383065927690/FXeaECZ.gif`)
                            .setColor(0x160033)
                            msg.channel.sendEmbed(embed9)
                        }
                        else{
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} suicide bombed everyone! ${message9}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609805383065927690/FXeaECZ.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        }
                    }
                    else{
                        msg.channel.send('Who are you are you trying to suicide bomb?')
                    }
                }
            }
            if(args[1] === 'cuddle'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(32);
                if(args[2] === '@everyone'){
                    message9 = args.join(" ").slice(19);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} cuddles everyone! ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609908895661424651/tenor.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} cuddles everyone! ${message9}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609908895661424651/tenor.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to cuddle?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} cuddles ${ment.username}! ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609908895661424651/tenor.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} cuddles ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609908895661424651/tenor.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                    }
                }
            }
            if(args[1] === 'tickle'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(32);
                if(args[2] === '@everyone'){
                    message9 = args.join(" ").slice(19);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} tickles everyone! ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609909154781593610/tenor_1.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} tickles everyone! ${message9}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609909154781593610/tenor_1.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to tickle?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} tickles ${ment.username}! ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609909154781593610/tenor_1.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} tickles ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609909154781593610/tenor_1.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                    }
                }
            }
            if(args[1] === 'peep'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(30);
                if(args[2] === '@everyone'){
                    message9 = args.join(" ").slice(17);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} is peeping on everyone! ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609910538969022494/tenor_2.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} is peeping on everyone! ${message9}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609910538969022494/tenor_2.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to peep?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} is peeping on ${ment.username}! ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609910538969022494/tenor_2.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} is peeping on ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609910538969022494/tenor_2.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                    }
                }
            }
            if(args[1] === 'ass'){
                if(args[2] === 'rape'){
                    let ment = msg.mentions.users.first()
                    let message9 = args.join(" ").slice(34);
                    if(args[3] === '@everyone'){
                        message9 = args.join(" ").slice(21);
                        if(msg.author.avatarURL === null){
                            const embed9 = new RichEmbed()
                            .setAuthor(`${msg.author.username.toString()} ass raped everyone! ${message9}`, ``, '')
                            .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609913346908618775/tenor_3.gif`)
                            .setColor(0x160033)
                            msg.channel.sendEmbed(embed9)
                            return;
                        }
                        else{
                            const embed = new RichEmbed()
                            .setAuthor(`${msg.author.username.toString()} ass raped everyone! ${message9}`, `${msg.author.avatarURL}`, '')
                            .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609913346908618775/tenor_3.gif`)
                            .setColor(0x160033)
                            msg.channel.sendEmbed(embed)
                            return;
                        }
                    }
                    if(ment === undefined){
                        msg.channel.send('Who are you trying to ass rape?')
                    }
                    else{
                        if(msg.author.avatarURL === null){
                            const embed9 = new RichEmbed()
                            .setAuthor(`${msg.author.username.toString()} ass raped ${ment.username}! ${message9}`, ``, '')
                            .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609913346908618775/tenor_3.gif`)
                            .setColor(0x160033)
                            msg.channel.sendEmbed(embed9)
                        }
                        else{
                            const embed9 = new RichEmbed()
                            .setAuthor(`${msg.author.username.toString()} ass raped ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                            .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609913346908618775/tenor_3.gif`)
                            .setColor(0x160033)
                            msg.channel.sendEmbed(embed9)
                        }
                    }
                }
            }
            if(args[1] === 'kidnap'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(32);
                if(args[2] === '@everyone'){
                    message9 = args.join(" ").slice(19);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} kidnapped everyone! ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609915218658852865/tenor_4.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} kidnapped everyone! ${message9}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609915218658852865/tenor_4.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to kidnap?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} kidnapped ${ment.username}! ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609915218658852865/tenor_4.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} kidnapped ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609915218658852865/tenor_4.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                    }
                }
            }
            if(args[1] === 'rape'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(30);
                if(args[2] === '@everyone'){
                    message9 = args.join(" ").slice(17);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} is going to rape everyone! ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609917249234403360/5e4.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} is going to rape everyone! ${message9}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609917249234403360/5e4.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to rape?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} is going to rape ${ment.username}... Oh no. ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609917249234403360/5e4.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} is going to rape ${ment.username}... Oh no. ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609917249234403360/5e4.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                    }
                }
            }
            if(args[1] === 'lewd'){
                let ment = msg.mentions.users.first()
                let message9 = args.join(" ").slice(30);
                if(args[2] === '@everyone'){
                    message9 = args.join(" ").slice(17);
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} wants to lewd everyone... WHY??? ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609918047074910228/tenor_5.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                        return;
                    }
                    else{
                        const embed = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} wants to lewd everyone... WHY??? ${message9}`, `${msg.author.avatarURL}`, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609918047074910228/tenor_5.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed)
                        return;
                    }
                }
                if(ment === undefined){
                    msg.channel.send('Who are you trying to lewd?')
                }
                else{
                    if(msg.author.avatarURL === null){
                        const embed9 = new RichEmbed()
                        .setAuthor(`${msg.author.username.toString()} wants to lewd ${ment.username}... WHY??? ${message9}`, ``, '')
                        .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609918047074910228/tenor_5.gif`)
                        .setColor(0x160033)
                        msg.channel.sendEmbed(embed9)
                    }
                    else{
                    const embed9 = new RichEmbed()
                    .setAuthor(`${msg.author.username.toString()} wants to lewd ${ment.username}... WHY??? ${message9}`, `${msg.author.avatarURL}`, '')
                    .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609918047074910228/tenor_5.gif`)
                    .setColor(0x160033)
                    msg.channel.sendEmbed(embed9)
                    }
                }
            }
            if(args[1] === 'fbi'){
                if(args[2] === 'open'){
                    if(args[3] === 'up'){
                        let ment = msg.mentions.users.first()
                        let message9 = args.join(" ").slice(37);
                        if(args[4] === '@everyone'){
                            message9 = args.join(" ").slice(24);
                            if(msg.author.avatarURL === null){
                                const embed9 = new RichEmbed()
                                .setAuthor(`${msg.author.username.toString()} is FBI opening up everyone! ${message9}`, ``, '')
                                .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609918828260098079/tenor_6.gif`)
                                .setColor(0x160033)
                                msg.channel.sendEmbed(embed9)
                                return;
                            }
                            else{
                                const embed = new RichEmbed()
                                .setAuthor(`${msg.author.username.toString()} is FBI opening up everyone! ${message9}`, `${msg.author.avatarURL}`, '')
                                .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609918828260098079/tenor_6.gif`)
                                .setColor(0x160033)
                                msg.channel.sendEmbed(embed)
                                return;
                            }
                        }
                        if(ment === undefined){
                            msg.channel.send('Who are you trying to FBI open up?')
                        }
                        else{
                            if(msg.author.avatarURL === null){
                                const embed9 = new RichEmbed()
                                .setAuthor(`${msg.author.username.toString()} is FBI opening up ${ment.username}! ${message9}`, ``, '')
                                .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609918828260098079/tenor_6.gif`)
                                .setColor(0x160033)
                                msg.channel.sendEmbed(embed9)
                            }
                            else{
                            const embed9 = new RichEmbed()
                            .setAuthor(`${msg.author.username.toString()} is FBI opening up ${ment.username}! ${message9}`, `${msg.author.avatarURL}`, '')
                            .setImage(`https://cdn.discordapp.com/attachments/602964327431012513/609918828260098079/tenor_6.gif`)
                            .setColor(0x160033)
                            msg.channel.sendEmbed(embed9)
                            }
                        }
                    }
                }
            }
            if(args[1] === 'help'){
                const embedH = new RichEmbed()
                .setTitle('Baby bot')
                .addField('General commands:', "'SP <action> <tag> <message (Optional)>'\nDescription: Use this command to have fun and interact with others!\nActions:\nslap\nkiss\nfuck\nfu\nkill\nhug\nshoot\nkms\nboop\nsuck\nlick\npat\nsuicide bomb\ncuddle\ntickle\npeep\nass rape\nkidnap\nrape\nlewd\nfbi open up\n")
                .addField('Current normal prefix', "'SP' : It's the current prefix.")
                .setColor(0x160033)
                msg.channel.sendEmbed(embedH);
            }
        break;
        case '-OwO':
		if(!args[1]) return msg.channel.sendMessage('OwO?');
			const owoMessage = args.join(" ").slice(5);
			someString = owoMessage
			anotherString = someString.replace(/r/g, 'w');
			s1 = anotherString.replace(/R/g, 'W');
			s2 = s1.replace(/l/g, 'w');
			s3 = s2.replace(/L/g, 'W');
			msg.channel.bulkDelete('1');
			msg.channel.sendMessage(s3);
		break;
		case '-purge':
			const command = args.join(" ");
			if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.sendMessage("You don't have the permission to purge messages!");
			if(!msg.guild.me.hasPermission("MANAGE_MESSAGES")) return msg.channel.sendMessage("I don't have the allowed permission to purge messages!");
			if(!args[1]) return msg.channel.sendMessage('Please specify a number of messages to be purged!');
			if(isNaN(parseFloat(args[1]))){
				return msg.channel.sendMessage('Are you really trying to purge "' + args[1] + '" messages?');
			}
			msg.channel.bulkDelete(args[1]);
		break;
		case '-announcement':
			if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.sendMessage("You don't have the permission to make an announcement!");
			if(!msg.guild.me.hasPermission("ADMINISTRATOR")) return msg.channel.sendMessage("I don't have the allowed permission to make an announcement!");
			if(!args[1]) return msg.channel.sendMessage('What are you trying to announce?')
			const aMessage = args.join(" ").slice(14);
			const achannel = bot.channels.find(channel => channel.id === "612746890383065248");
			const aAuthor = msg.author.username
			if(!achannel) return;
			msg.channel.bulkDelete(1);
			achannel.sendMessage('@everyone\n\n' + aMessage + '\n\n' + 'Announcement made by ' + aAuthor + '.')
		break;
		case '-kick':
			const tuser = msg.mentions.users.first();
			const kreason = args.join(" ").slice(28);
			if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to kick someone!");
			if(!msg.guild.me.hasPermission("KICK_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to kick someone!");
			if(!args[1]) return msg.channel.sendMessage('Please specify a user!')
			if(tuser){
				const member = msg.guild.member(tuser)
				if(member){
					if(!kreason){
						member.kick('You were kicked.');
						const kembed = new RichEmbed()
						.setTitle('User has been kicked!')
						.addField("User's name", tuser)
						.addField("User's ID", tuser.id)
						.addField("Reason", 'No reason specified.');
						msg.channel.sendEmbed(kembed);
					}
					else{
						member.kick(kreason);
						const kembed = new RichEmbed()
						.setTitle('User has been kicked!')
						.addField("User's name", tuser)
						.addField("User's ID", tuser.id)
						.addField("Reason", kreason);
						msg.channel.sendEmbed(kembed);
					}
				}
			}
		break;
		case '-ban':
			if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to ban someone!");
			if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to ban someone!");
			if(!args[1]) return msg.channel.sendMessage('Please specify a user!')
			const user = msg.mentions.users.first();
			const breason = args.join(" ").slice(27);
			if(user){
				const member = msg.guild.member(user)
				if(member){
					if(!breason){
						member.ban('You were banned.');
						const bembed = new RichEmbed()
						.setTitle('User has been banned!')
						.addField("User's name", user)
						.addField("User's ID", user.id)
						.addField("Reason", 'No reason specified.');
						msg.channel.sendEmbed(bembed);
					}
					else{
						member.ban(breason);
						const bembed = new RichEmbed()
						.setTitle('User has been banned!')
						.addField("User's name", user)
						.addField("User's ID", user.id)
						.addField("Reason", breason);
						msg.channel.sendEmbed(bembed);
					}
				}
			}
		break;
		case '-unban':
			if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to unban someone!");
			if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to unban someone!");
			if(!args[1]) return msg.channel.sendMessage('Please specify a user ID!')
			msg.guild.unban(args[1])
			const uembed = new RichEmbed()
			.setTitle('User has been unbanned!')
			msg.channel.sendEmbed(uembed);
		break;
    }
});

bot.login(process.env.BOT_TOKEN);
