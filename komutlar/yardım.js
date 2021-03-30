const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT Komut Sistemleri')
.setTimestamp()
.addField('» +eğlence', 'eğlence komutları')
.addField('» +müzik', 'müzik komutları')
.addField('» +ekonomi', 'ekonomi komutları')
.addField('» +moderasyon', 'moderasyon komutları')
.addField('» +oyun', 'oyun komutları')
.addField('» +logo', 'logo komutları')
.addField('» +faydalı', 'yararlı komutlar')
.addField('» +nsfw', 'nsfw komutları hehehe')
.addField('» +ping', 'botun pingini atar')
.addField('» +i', 'botun istatistiklerini atar')
.addField('» +destek', 'sahibime destek  olmak isteyenler için kısaltılmış bir link atar')
.setFooter('LORDOZİBOT',client.user.avatarURL())
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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};