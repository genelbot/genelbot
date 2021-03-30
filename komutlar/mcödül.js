const Discord = require('discord.js');
const snekfetch = require('snekfetch');

exports.run = (client, message, args) => {
  let [title, contents] = args.join(" ").split("-");
  if(!contents) {
    [title, contents] = ["Basarim Kazanildi", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;
  if(args.join(" ").toLowerCase().includes("sword")) rnd = 34;

  if(title.length > 22 || contents.length > 22) return message.channel.send("Maksimum uzunluk 22 karakter.").then(message.delete.bind(message), 2000);
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "eğlence" //Komutun kategorisini belirtiyoruz
 };
 exports.help = {
  name: 'başarım',
  description: 'Belirtilen oyuncunun kostümünü gösterir.',
  usage: 'mcbody oyuncu'
 };
