const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT Komut Sistemleri')
.setTimestamp()
.addField('» +seviye-aç', 'sunucunuzda seviye sistemini açar')
.addField('» +seviye-kapat', 'sunucunuzda seviye sistemini kapatır')
.addField('» +seviye-ayarlar', 'sunucunuzdaki seviye sisteminin ayarlarını atar')
.addField('» +seviye-log', 'sunucunuzdaki seviye sisteminin log kanalını ayarlar')
.addField('» +seviye-rol', 'sunucunuzda belli birseviyeye ulaşıldığında rol verilmesini ayarlar')
.addField('» +seviye-xp', 'sunucunuzda mesaj başına verilecek seviye miktarını ayarlar')
.addField('» +seviye', 'sunucudaki seviyenizi atar')
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
  name: 'seviye-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};