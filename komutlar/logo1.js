const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT Komut Sistemleri')
.setTimestamp()
.addField('» +neon', 'yazdığınız yazıyı neon logoya çevirir')
.addField('» +altın', 'yazdığınız yazıyı altın logoya çevirir')
.addField('» +anime', 'yazdığınız yazıyı anime logoya çevirir')
.addField('» +comic', 'yazdığınız yazıyı çizgi romanımsı logoya çevirir')
.addField('» +balon', 'yazdığınız yazıyı balon logoya çevirir')
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
  name: 'logo1',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};