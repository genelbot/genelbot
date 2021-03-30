const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT Komut Sistemleri')
.setTimestamp()
              .addField('» +arrow', 'yazdığınız yazıyı arrow logoya çevirir')
              .addField('» +google', 'yazdığınız yazıyı google logoya çevirir')
              .addField('» +gold', 'yazdığınız yazıyı altın logoya çevirir')
              .addField('» +odun', 'yazdığınız yazıyı odun logoya çevirir')
              .addField('» +pembe', 'yazdığınız yazıyı pembe logoya çevirir')
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
  name: 'logo3',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};