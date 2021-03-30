const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message) => {

  if (message.channel.nsfw){
  message.channel.send("**🎆 gif yükleniyorrr 🎇**").then(message => {
    var nespriler = [
   "https://images-ext-1.discordapp.net/external/O9AJP9O_gE042iPwTkHNPPUgMSKYCx_d3JEZHHMM-Dw/https/cdn.nekobot.xyz/8/7/7/83b7ebf484255d51759380277ad95.gif",
      "https://imgur.com/Sm2E1G4",
   "https://imgur.com/wEeHCWl",
   "https://cdn.discordapp.com/attachments/816288308131790870/821668228044423178/c03ee2d6bf50c9c52c9894d45d0c3.gif",
   "https://media.discordapp.net/attachments/816288308131790870/821668605020209162/91904dd14e75ac4494d54053e423d.gif",
   "https://media.discordapp.net/attachments/816288308131790870/821668678646366208/ca0c3e90e1f62d42b91c39981a987.gif",
   
   "https://www.gifdeliverynetwork.com/spiritedvillainouslacewing",
   "https://www.redgifs.com/watch/niceseriousguineapig",
   "https://cdn.nekobot.xyz/4/f/0/9a922c1c38a7fddfea4578514d216.gif",
   "https://www.redgifs.com/watch/angelicdangeroushatchetfish",
   "https://cdn.discordapp.com/attachments/791698227753517097/813694384776282112/5d14a96de1778a1d4a03baf134c4a.gif",
   "https://cdn.discordapp.com/attachments/791698227753517097/811849588549877790/27b40636bfe8d762aeb8697e8ca6e.gif",
   "https://cdn.discordapp.com/attachments/791698227753517097/811847258688454666/c14f0b496baadcd235e854a72a289.gif",
   "https://cdn.discordapp.com/attachments/791698227753517097/811128919591485480/fe11fdcd119bc8b16b3e7167c108d.gif",
   "https://cdn.discordapp.com/attachments/791698227753517097/811128856009768980/303d53cccf0fdaa2a698349c28a4e.gif",
   "https://media.discordapp.net/attachments/791698227753517097/811128104633499658/7c4b6a464fc8f883a274c7189d6c5.gif?width=618&height=498",
   "https://cdn.discordapp.com/attachments/791698227753517097/809835966075371530/f864e851073417758c760a8bf1c96.gif",
   "https://www.redgifs.com/watch/niceseriousguineapig",
   "https://cdn.discordapp.com/attachments/791698227753517097/815836380533227530/5150f385889362172f767785da57f.gif",
   "https://cdn.discordapp.com/attachments/815851459425861643/815852984436391936/aa8c140c0e8ba9f1576f3275325dd.gif",
   "https://cdn.discordapp.com/attachments/815851459425861643/815852558387118080/66cb7a95daa300552c8587fbff9ff.gif"
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
  name: "pgif",
  description: "Şanslı Sayınızı Bulmaya Çalışır",
  usage: "şanslı sayını tahmin eder"
};