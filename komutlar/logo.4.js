const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT Komut Sistemleri')
.setTimestamp()
.addField('» +ambed', 'yazdığınız yazıyı ambed logoya çevirir')
.addField('» +craft', 'yazdığınız yazıyı craft logoya çevirir')
.addField('» +dance', 'yazdığınız yazıyı dance logoya çevirir')
.addField('» +dracula', 'yazdığınız yazıyı drakula logoya çevirir')
.addField('» +everest', 'yazdığınız yazıyı everest logoya çevirir')
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
  name: 'logo4',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};