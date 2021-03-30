const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message) => {

  if (message.channel.nsfw){
  message.channel.send("**🎆 resim yükleniyor yükleniyorrr 🎇**").then(message => {
    var nespriler = [
  "https://cdn.discordapp.com/attachments/816288308131790870/822395089577574420/6d386aa54098a2ccb6969a041dd12.jpg",
      "https://media.discordapp.net/attachments/816288308131790870/821667521438154772/abab28b51f395c6afea2a26d60c06.jpg?width=224&height=336",
  "https://media.discordapp.net/attachments/816288308131790870/821667658537762816/abf551b6917868366263e6684d2e5.jpg?width=506&height=337",
  "https://media.discordapp.net/attachments/816288308131790870/821667883805048862/c9368e8059e58003db6d13dba59c8.jpg?width=506&height=337",
  "https://media.discordapp.net/attachments/816288308131790870/821671875330834482/d389152a8230e75248cd8ae73b4c8.jpg?width=288&height=337",
  "https://cdn.discordapp.com/attachments/816288308131790870/821668331731943424/59cdc709ff7be0ca35f8d85d6f2c4.png",
"https://cdn.discordapp.com/attachments/816288308131790870/821672308736524358/793c3a4ee156a2475aa2d887d5b94.jpg",
"https://cdn.discordapp.com/attachments/816288308131790870/821674083850256404/2b999bfbd2a560194cda330532cce.jpghttps://cdn.discordapp.com/attachments/816288308131790870/821674083850256404/2b999bfbd2a560194cda330532cce.jpg",
 "https://media.discordapp.net/attachments/816288308131790870/821675425234288660/1f61b8688f793efd7c749dfa78601.jpg?width=225&height=337",
  "https://media.discordapp.net/attachments/816288308131790870/821686545064525824/b6cb4e567831d4060c5d24c63e6c6.png?width=599&height=337",
  "https://cdn.discordapp.com/attachments/816288308131790870/822394265774718976/cdce7271f81063632e086287aab44.gif",

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
  name: "popo",
  description: "Şanslı Sayınızı Bulmaya Çalışır",
  usage: "şanslı sayını tahmin eder"
};