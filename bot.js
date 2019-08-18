const {Client, Attachment, RichEmbed, Guild, GuildMember, MessageMentions, Role} = require('discord.js');
const bot = new Client();
const superagent = require('superagent');
const PREFIX = '​';
const testpre = '-';
let activated = '0'
let activated2 = '0'
let activated3= '0'

bot.on('ready', () =>{
	console.log('Menace sends their regards.');
	bot.user.setActivity('you.', { type: ('WATCHING')})
})

bot.on('guildMemberAdd', member =>{

	const channel = member.guild.channels.find(channel => channel.name === "ᴡᴇʟᴄᴏᴍᴇ-ɴ-ʙʏᴇ");
	if(!channel) return;
	let role = member.guild.roles.find("name", "Unverified");
	member.addRole(role.id);
	channel.sendMessage(`${member}, Please read the rules while an admin verifies you.`);
	if(member.guild.memberCount === 200){
		channel.sendMessage(`${member}, you are the 200th member!`);
	}
	if(member.guild.memberCount === 300){
		channel.sendMessage(`${member}, you are the 300th member!`);
	}
	if(member.guild.memberCount === 400){
		channel.sendMessage(`${member}, you are the 400th member!`);
	}
	if(member.guild.memberCount === 500){
		channel.sendMessage(`${member}, you are the 500th member!`);
	}
	if(member.guild.memberCount === 600){
		channel.sendMessage(`${member}, you are the 600th member!`);
	}
	if(member.guild.memberCount === 700){
		channel.sendMessage(`${member}, you are the 700th member!`);
	}
	if(member.guild.memberCount === 800){
		channel.sendMessage(`${member}, you are the 800th member!`);
	}
})

bot.on('guildMemberRemove', member =>{

	const channel = member.guild.channels.find(channel => channel.name === "ᴡᴇʟᴄᴏᴍᴇ-ɴ-ʙʏᴇ");
	if(!channel) return;
	channel.sendMessage(`Look guys! Look! Look! ${member} disconnected.`)
})
bot.on('message', msg=>{

	mention = msg.mentions.users.first();
	
	if(msg.author.id === '333357946744602647')
	{
		if(msg.content === '-activate')
		{
			activated = '1'
		}
		if(msg.content === '-deactivate')
		{
			activated = '0'
		}
	}
	if(msg.author.id === '333357946744602647')
	{
		if(activated === '1')
		{
			console.log('wtf')
			let content = msg.content
			msg.channel.bulkDelete('1')
			msg.channel.send(content)
		}
	}
	
	
	
	if(msg.author.id === '345322541499285507')
	{
		if(msg.content === '-activate')
		{
			activated2 = '1'
		}
		if(msg.content === '-deactivate')
		{
			activated2 = '0'
		}
	}
	if(msg.author.id === '345322541499285507')
	{
		if(activated2 === '1')
		{
			console.log('wtf')
			let content = msg.content
			msg.channel.bulkDelete('1')
			msg.channel.send(content)
		}
	}
	
	if(msg.author.id === '372420756610613259')
	{
		if(msg.content === '-activate')
		{
			activated3 = '1'
		}
		if(msg.content === '-deactivate')
		{
			activated3 = '0'
		}
	}
	if(msg.author.id === '372420756610613259')
	{
		if(activated3 === '1')
		{
			console.log('wtf')
			let content = msg.content
			msg.channel.bulkDelete('1')
			msg.channel.send(content)
		}
	}
	
	
	
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
		let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];
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
	let args = msg.content.substring(PREFIX.length - 1).split(" ");
	switch(args[0]){
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
			const achannel = bot.channels.find(channel => channel.name === "ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛꜱ");
			const aAuthor = msg.author.username
			const agif = new Attachment('https://cdn.discordapp.com/attachments/598945838646951956/599001058374844437/men_gif.gif');
			if(!achannel) return;
			msg.channel.bulkDelete(1);
			achannel.sendMessage('@everyone\n\n' + aMessage + '\n\n' + 'Announcement made by ' + aAuthor + '.')
			achannel.sendMessage(agif)
		break;
		case '-regards':
			mention = msg.mentions.users.first();
			if(!msg.member.roles.find(r => r.name === "Leader")) return msg.channel.sendMessage("You are not the leader. You can't do that.");
			if(msg.author.id === '372420756610613259'){
				if(!args[1]) return msg.channel.sendMessage('Who are you trying to send your regards?')
				const regard = new Attachment('https://cdn.discordapp.com/attachments/598945838646951956/599001058374844437/men_gif.gif')
				mention.sendMessage('𝕸𝖊𝖓𝖆𝖈𝖊 sends their regards.');
				mention.sendMessage(regard);
				msg.channel.bulkDelete(1);
			}
			else{
				if(msg.author.id === '345322541499285507'){
					if(!args[1]) return msg.channel.sendMessage('Who are you trying to send your regards?')
					const regard = new Attachment('https://cdn.discordapp.com/attachments/598945838646951956/599001058374844437/men_gif.gif')
					mention.sendMessage('𝕸𝖊𝖓𝖆𝖈𝖊 send their regards.');
					mention.sendMessage(regard);
					msg.channel.bulkDelete(1);
				}
				else{
					return msg.channel.sendMessage("You are not the leader. You can't do that.");
				}
			}
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
		case 'dmallthosenigsbciwant':
			if(msg.author.id === '333357946744602647'){
			if(!args[1]) return msg.channel.sendMessage('?');
            let dmGuild = msg.guild;
			var message = msg.content.slice(22);
			let memberarray = dmGuild.members.array();
			let membercount = memberarray.length;
			console.log(`Responding to ${msg.author.username} :  Sending message to all ${membercount} members of ${dmGuild.name}.`)
			for (var i = 0; i < membercount; i++) {
				if(!args[1]) return msg.channel.sendMessage('?');
				let timeout = Math.floor((Math.random() * (10 - 0.01)) * 1000) + 10;
				let member = memberarray[i];
				sleep(timeout)
				if(i == (membercount-1)) {
					console.log(`Waited ${timeout}ms.\t\\/\tDMing ${member.user.username}`);
				} else {
					console.log(`Waited ${timeout}ms.\t|${i + 1}|\tDMing ${member.user.username}`);
                }
                member.send(`${message}`);
            }
            }
	break;
	}
})

bot.login(process.env.BOT_TOKEN);
