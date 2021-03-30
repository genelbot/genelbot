const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT Komut Sistemleri')
.setTimestamp()
.addField('» e+sunucutanıt', 'destek sunucumda 12 saatte bir sunucunuzu tanıtabilirsiniz')
.addField('» +sil', 'yazdığınız sayıda mesaj siler')
.addField('» +patlat', 'mesajı yazdığınız kanalı siler ve aynısını tekrar oluşturur')
.addField('» +hazırkurallar', 'sunucunuzda kullanabileceğiniz hazır kurallar listesi verir')
.addField('» +sunucubilgi', 'sunucu hakkında bilgi verir')
.addField('» +rol-ver', 'etiketlediğiniz kişiye etiketlediğiniz rolü verir')
.addField('» +oylama', 'oylama başlatırsınız')
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
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};