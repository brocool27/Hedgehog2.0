bot.on('message', msg => {
const args = msg.content.slice(prefix.length).split(' '); 
const command = args.shift().toLowerCase();
    if(msg.author.bot) return;
    if (msg.content.toLowerCase() === "hhping") { msg.channel.send(new Date().getTime() - msg.createdTimestamp + " ms"); 
   
    }
 
    if (msg.content.toLowerCase() === 'hhavatar') {
    const embed = new discord.RichEmbed()
    .setColor("RANDOM")
    .setImage(msg.author.avatarURL)
    .setDescription("Looking good :wink:")
    .setTimestamp()
     msg.channel.send(embed);
    }
    
    if (msg.content.toLowerCase() === "hhhelp") {
    msg.channel.send("**HHavatar - Shows your avatar\nHHping - Gets the bot to respond\nHHban - bans the mentioned user\nHHkick - kicks the mentioned user**\n**HHinvite - Gives the bot invite link**\nIf you wish to be updated anytime feel free to join my discord server Discord.gg/4VTN9Rt")
    }
    
    if (msg.content.toLowerCase() === 'hhinvite') {
        msg.channel.send("Invite the bot using this link!\n**https://discordapp.com/oauth2/authorize?client_id=495271289955680256&scope=bot&permissions=2146958847**")
    }
    
    if (msg.content.toLowerCase() === 'HHbug') {
        msg.channel.send("Report a bug using this link!\n**https://docs.google.com/forms/d/e/1FAIpQLSdPuxWwFCsm9RNQiZI5d8GfLrYPsQ0uTx16nmLUgLTL7VkUxA/viewform**")
    
    }
    
    if (command === 'suggest'){ 
    const channel = msg.guild.channels.find(ch => ch.name === 'Channel name'); 
    
    let send = new discord.RichEmbed()
    .setColor("PINK")
    .setTitle("Suggestion was sent!!")
    .setDescription(`**Here is your suggestion**\nYour suggestion was sent to ${channel}\n**Your Suggestion Was:**\n\n ` + args.join(' '))
    msg.author.send(send)
    
    let suggestion = new discord.RichEmbed()
    .setColor("BLUE")
    .setTitle("Suggestion Incoming!!")
    .setDescription(`**Suggested by ${msg.author}**\n\n ` + args.join(' '))
    channel.send(suggestion)
    
    }
    if(msg.author === '275046537699262464') {
    if(command == 'test') {
        msg.channel.send('All good here.');
      }
    }    
});
bot.on('message', msg => {
    let args = msg.content.substring(prefix.length).split(" ");
     
     switch (args[0]) {
         case "kick":
                 if (!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply("Hmmm it seems like you don't have permissions for this command!")
             const user = msg.mentions.users.first()
             
             if(user) {
                 const member = msg.guild.member(user);
                 
                 if(member) {
                     member.kick('Kicked from server').then(() => {
                         msg.reply(`${user.tag} has been kicked from the server.`);
                     }).catch(err => {
                         msg.reply('I was unable to kick this user')
                         console.log(err);
                       if (!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply("Sorry you dont' have permissions for this command!")
                     });
                 } else {
                     msg.reply("I cannot find that user. Are they in the server?")
                 }
             } else {
                 msg.reply("Please mention a user to kick.")
             }
         
         break;
     }
 });
 
bot.on('message', msg => {
let args = msg.content.substring(prefix.length).split(" ");
     
     switch (args[0]) {
         case "ban":
                 if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply("Sorry you dont' have permissions for this command!")
             const user = msg.mentions.users.first()
             
             if(user) {
                 const member = msg.guild.member(user);
                 
                 if(member) {
                     member.ban('Banned from this server').then(() => {
                         msg.reply(`${user.tag} has been banned from the server.`);
                     }).catch(err => {
                         msg.reply('I was unable to ban this person')
                         console.log(err);
                       if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply("Sorry you dont' have permissions for this command!")
                     });
                 } else {
                     msg.reply("I cannot find that user. Are they in the server?")
                 }
             } else {
                 msg.reply("Please mention a person to ban.")
             }
         
         break;
     }
 });
 
bot.login(token)
