const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT Komut Sistemleri')
.setTimestamp()
.addField('» +adamasmaca', 'adam asmaca oynarsınız')
.addField('» +yazan-kazanır', 'yazan kazanır oynarsınız')
.addField('» +xox', 'xox oynarsınız')
.addField('» +sayı-tahmin', 'sayı tahmini oynarsınız')
.addField('» +düello', 'etiketlediğiniz kişi ile düello oynarsınız')
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
  name: 'minigame',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};