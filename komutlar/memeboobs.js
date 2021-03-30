const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message) => {

  if (message.channel.nsfw){
  message.channel.send("**🎆 gif yükleniyorrr 🎇**").then(message => {
    var nespriler = [
"https://cdn.discordapp.com/attachments/816288308131790870/821668819264339998/00836.jpg",
"https://media.discordapp.net/attachments/816288308131790870/821673892203986954/01535.jpg?width=231&height=336",
"https://media.discordapp.net/attachments/816288308131790870/821680384830996514/29272.jpg",
"https://media.discordapp.net/attachments/816288308131790870/821680479836307456/30112.jpg?width=249&height=336",
"https://cdn.discordapp.com/attachments/816288308131790870/821680551785267210/20670.jpg",

"https://media.discordapp.net/attachments/816288308131790870/821672042734026782/10533.jpg?width=337&height=337"
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
  name: "meme",
  description: "Şanslı Sayınızı Bulmaya Çalışır",
  usage: "şanslı sayını tahmin eder"
};