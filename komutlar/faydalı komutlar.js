const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT Komut Sistemleri')
.setTimestamp()

.addField('» +tdk', 'yazdığınız kelimeyi tdk da aratır')
.addField('» +deprem', 'bugün gerçekleşen 5 deprem hakkında bilgi verir')
.addField('» +haber', 'günün önemli haberlerini gösterir')
.addField('» +kullanıcı-bilgi', 'etiketlediğiniz kişinin bilgilerini atar (kimseyi etiketlemezseniz kendi bilgilerinizi atar)')
.addField('» +burç', 'yazdığınız burcun günlük yorumunu yapar')
.addField('» +film-ara', 'yazdığınız filmi imdb den aratır')
.addField('» +hesapla', 'yazdığınız matematik işlemini cevaplar')
.addField('» +karekök', 'yazdığınız sayının karekökünü alır')
.addField('» +korona', 'koronavirus ile ilgili bilgilere erişirsin')
.addField('» +atatürk', 'Atamızın bir özlü sözünü ve resmini atar')
.addField('» +havadurumu', 'Yazdığınız yerin hava durumunu verir')
.addField('» +bilgi', 'İlginç bilgi verir')
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
  name: 'faydalı',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};