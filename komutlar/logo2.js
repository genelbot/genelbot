const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT Komut Sistemleri')
.setTimestamp()
              .addField('» +cool', 'yazdığınız yazıyı havalı logoya çevirir')
              .addField('» +kalp', 'yazdığınız yazıyı kalp logoya çevirir')
              .addField('» +discord', 'yazdığınız yazıyı discord logoya çevirir')
              .addField('» +grafiti', 'yazdığınız yazıyı grafiti logoya çevirir')
              .addField('» +elmas', 'yazdığınız yazıyı elmas logoya çevirir')
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
  name: 'logo2',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};