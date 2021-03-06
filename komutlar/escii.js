var figlet = require('figlet');

module.exports.run = (client, message, args, tools) => {

  var yozi = 10 // Karakter sayısını buradan değiştirebilirsiniz

  if(args.join(' ').length > yozi) return message.channel.send(`En fazla **10** karakter yazabilirsin.`)

  if(!args[0]) return message.channel.send('Lütfen bir yazı girin...');

  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Bir hata var...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ascii',
  description: 'Yazınızı ascii art Olarak Yazar.',
  usage: 'ascii'
};
