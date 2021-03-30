const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message) => {

  if (message.channel.nsfw){
  message.channel.send("**🎆 resim yükleniyor yükleniyorrr 🎇**").then(message => {
    var nespriler = [
"https://media.discordapp.net/attachments/816288308131790870/821675525172232232/302346041b5299694060edaa829c9.jpg?width=599&height=337",
        "https://media.discordapp.net/attachments/816288308131790870/821674858357719058/9602555bb8acc879caa29107ec8bb.jpg?width=599&height=337",
"https://media.discordapp.net/attachments/816288308131790870/822394874640597012/35553.jpg",
"https://media.discordapp.net/attachments/816288308131790870/822527223017766952/24850.jpg",

      ];
    var espri = nespriler[Math.floor(Math.random() * nespriler.length)];
    message.edit(`${espri}`);
  });}
  else{
    message.channel.send("Bu kanal bir nsfw kanalı değil")
  }
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "pfoto",
  description: "Şanslı Sayınızı Bulmaya Çalışır",
  usage: "şanslı sayını tahmin eder"
};