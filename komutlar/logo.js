const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT Komut Sistemleri')
.setTimestamp()
.addField('» +logo1', '5 tane logo komutu')
.addField('» +logo2', '5 tane logo komutu')
.addField('» +logo3', '5 tane logo komutu')
.addField('» +logo4', '5 tane logo komutu')
.setFooter('Lordozibot', client.user.avatarURL())
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
  name: 'logo',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};