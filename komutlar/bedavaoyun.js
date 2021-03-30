const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Levinia BOT Komut Sistemleri')
.setTimestamp()
.addField('» +freemc', 'haftalık olarak yenilenen mc hesapları')
.addField('» +freekey', 'haftalık olarak yenilenen steamkeyler')
.addField('» +mcpre', 'bedava minecraft premium hesap')
.addField('» +hoi4', 'bedava hearts of iron 4')
.addField('» +steamkey', 'bedava steam key')
.addField('» +cp2077', 'bedava cyberpunk 2077')
.setFooter('LORDOZİBOT', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'bedavaoyun',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};