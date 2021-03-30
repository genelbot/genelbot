const Discord = require('discord.js');

exports.run = function(client, message) {
    if (message.channel.nsfw){
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT Komut Sistemleri')
.setTimestamp()
.addField('» +pgif', '+18 gif atar')
.addField('» +popo', '+18 popo resmi atar')
.addField('» +meme', '+18 meme resmi atar')
.addField('» +pfoto', '+18 resim atar')
.setFooter('LORDOZİBOT', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
}
else{
message.channel.send("Bu kanal bir nsfw kanalı değil")
}

}


exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'nsfw',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};