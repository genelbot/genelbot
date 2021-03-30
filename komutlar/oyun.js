const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT Komut Sistemleri')
.setTimestamp()
.addField('» +nitro', 'discord nitro kodu üretir !!!UYARI!!! Bu komutu bir kere yazdığınızda sürekli kod üretir ve reboot atılana kadar durmaz o yüzden ayrı bir kanal oluşturup orada kullanın.')
.addField('» +mcskin', 'yazdığınız mc hesabının skinini atar')
.addField('» +mcsv', 'yazdığınız mc sunucu adresinden sunucu ile ilgili bilgi verir')
.addField('» +csgo', 'yazdığınız csgo hesabının statlarını verir (NOT: hesabınız gizliyse bulamaz)')
.addField('» +başarım', 'yazdığınız yazıyı mc başarımına çevirir. (kullanımı: +başarım örnek - örnek')
.addField('» +steamfiyat', 'yazdığınız oyunun steam fiyatını söyler')
.addField('» +bedavaoyun', 'beleş oyunlar')
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
  name: 'oyun',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};