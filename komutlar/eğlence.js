const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT Komut Sistemleri')
.setTimestamp()
.addField('» +minigame', 'mini gamelerin listesi')
.addField('» +stresçarkı', 'stresçarkı çevirirsin')
.addField('» +ascii', 'yazdığınız yazıyı ascii formatına çevirir')
.addField('» +aşkölçer', 'etiketlediğin kişilerin aşkını ölçer')
.addField('» +intihar', ' intihar edersin')
.addField('» +sorusor', 'bota istedin soruyu sorarsın')
.addField('» +tersyaz', 'yazdın yazıyı ters yazar')
.addField('» +yazı-yaz', 'bota yazı yazdırırsın')
.addField('» +avatar', 'bot pp ni atar')
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};