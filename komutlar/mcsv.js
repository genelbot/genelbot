const Discord = require("discord.js");
const Gamedig = require('gamedig');
exports.run = async (client, message, args) => {

  let ip = args[0]
  if(!ip) return message.channel.send(`Bir Minecraft Sunucu İpsi Belirmelisin. +mcsv mc.hypixel.net`)
  
  Gamedig.query({
    type: 'minecraft',
    host: ip
}).then((state) => {
    message.channel.send(state)
    const embed = new Discord.MessageEmbed()
    .setAuthor('Minecraft Sunucu Bilgi')
    .setDescription(`**Sunucu Adı:** ${state.name}\n**Sunucu Şifresi: ** ${state.password ? 'Var' : 'Yok'}\n**Kullanıcı Sayısı: ** ${state.players.length}\n**Max Kullanıcı: ** ${state.maxplayers}`)
    message.channel.send(embed)
}).catch((error) => {
    message.channel.send("Server Offline")
    console.log("Server is offline");
});
  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ii'],
  permLevel: 0
};

exports.help = {
  name: "mcsv",
  description: "Bot i",
  usage: "istatistik"
};