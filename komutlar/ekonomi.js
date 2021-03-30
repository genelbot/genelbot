const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT Komut Sistemleri')
.setTimestamp()

.addField('» **e+yardım** yazarak ekonomi komutlarına ulaşabilirsin ekonomi kısmının prefixi **e+** dır ')
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
  name: 'ekonomi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};