const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
require('./util/eventLoader.js')(client);
const fs = require('fs');
const db = require("wio.db");


var prefix = ayarlar.prefix;





client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();



fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});





const log = message => {
    console.log(`${message}`);
};





client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
    
//Muteliyken sw den çıkana mute
client.on('guildMemberAdd', async(member) => {
    let mute = db.fetch(`muterol_${member.guild.id}`);
    let mutelimi = db.fetch(`muteli_${member.guild.id + member.id}`)
    if (!mutelimi) return;
    if (mutelimi == "muteli") {
    member.roles.add(mute)
     member.send("Muteliyken Sunucudan Çıktığın için Yeniden Mutelendin!")
         const modlog = db.fetch(`modlogKK_${member.guild.id}`)
      if (!modlog) return;
       db.delete(`muteli_${member.guild.id + member.id}`)
          const embed = new Discord.MessageEmbed()
        .setThumbnail(member.avatarURL())
        .setColor(0x00AE86)
        .setTimestamp()
        .addField('Eylem:', '**Mute**')
        .addField('Kullanıcı:', `${member} (${member.id})`)
        .addField('Yetkili:', `${client.user} (${client.user.id})`)
        .addField('Süre', "Sonsuz")
        .addField('Sebep', "Muteliyken Sunucudan Çıkmak.")
       member.guild.channels.cache.get(modlog).send(embed);
    }
    })
    //Muteliyken sw den çıkana mute

    client.on('message', async msg => {
        if (msg.content.toLowerCase() === 'sa') {
          await msg.react('🇦');
          await msg.react('🇸');
        }
      });

      client.on('message', msg => {
        if (msg.content === '+mcpre') {
          msg.reply('bu videoyu izleyerek alabilirsin https://www.youtube.com/watch?v=3zpfsq2wwwk');
        }
      });

      client.on('message', msg => {
        if (msg.content === '+hoi4') {
          msg.reply('bu videoyu izleyerek alabilirsin https://www.youtube.com/watch?v=svA0znINhXY');
        }
      });

      client.on('message', msg => {
        if (msg.content === '+steamkey') {
          msg.reply('bu videoyu izleyerek alabilirsin https://www.youtube.com/watch?v=7eJYY50gveY');
        }
      });
      client.on('message', msg => {
        if (msg.content === '+cp2077') {
          msg.reply('bu videoyu izleyerek alabilirsin https://www.youtube.com/watch?v=Ca-U6sz0zgI');
        }
      });
      client.on("message", message =>{
        if (message.content.includes(`<@!${client.user.id}>`)){
            message.channel.send(`Prefixim +`)
        }
    })

client.login("Nzg5Nzc1OTMwNTM3MDE3MzY0.X92-Jw.SCRVoZ7aY0FTTZo_aT0B9e3YIN8");




const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');

const { promisify } = require("util");
const ms = require("parse-ms");
const queue = new Map();

client.on('guildCreate', async guild => { client.channels.cache.get('821402320460972082').send(`${guild}, isimli sunucuya eklendim!  :)`)})
// atıldım
client.on('guildRemove', async guild => { client.channels.cache.get('821402320460972082').send(`${guild}, isimli sunucudan atıldım.. :(`)})

client.on("guildCreate", async guild => {
    guild.owner.send("beni sunucuna eklediğin için tşk");
  });
  client.on("guildDelete", async guild => {
    guild.owner.send("beni sunucundan neden attın ;( hüü");
  });



client.on("message", message => {
    if(message.content.toLowerCase() === '+i') {
        const tsay = new Discord.MessageEmbed()

        .setTitle('Botun istatistikleri')
        .setColor('RED')
        .addField('İstatistikler :',`  **${client.guilds.cache.size}** sunucuya hizmet veriyorum \n  **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** kullanıcıya hizmet veriyorum  \n **${client.channels.cache.size.toLocaleString()}** kanala hizmet veriyorum \n **<3**`)
        .setThumbnail(message.author.avatarURL({dynamic : true}))
        .setFooter('Botun istatistikleri')
        message.channel.send(tsay)
    } 
});
client.on("message", message => {
    if(message.content.toLowerCase() === '+freemc') {
        const tsay = new Discord.MessageEmbed()
        .setTitle('Bu hesapları deneyebilirsin')
        .setColor('BLUE')
        .addField('**1**.   **ernestoenriquezjr2@yahoo.com**' , 'şifre: **Erty56lt**')
        .addField('**2**.   **helmut.grassl73@web.de**' , 'şifre: **Teisnach1!**')
        .setThumbnail(message.author.avatarURL({dynamic : true}))
        message.channel.send(tsay)
    } 
});
client.on("message", message => {
    if(message.content.toLowerCase() === '+freekey') {
        const tsay = new Discord.MessageEmbed()

        .setTitle('Bu keyleri deneyebilirsin')
        .setColor('BLUE')
        .addField('HENÜZ KOD BULUNMAMAKTADIR')
        .setThumbnail(message.author.avatarURL({dynamic : true}))
        message.channel.send(tsay)
    } 
});

client.on("message", message => {
    if(message.content.toLowerCase() === '+site') {
        const tsay = new Discord.MessageEmbed()

        .setTitle('LORDOZİBOT | SİTE')
        .setColor('YELLOW')
        .setDescription(`        
        [≫ **TIKLA VE SİTEYE UÇ** ≪]( https://lordozi-bot.glitch.me/)
        `)
        .setThumbnail(message.author.avatarURL({dynamic : true}))
        message.channel.send(tsay)
    } 
});

client.on("message", message => {
    if(message.content.toLowerCase() === '+destek') {
        const tsay = new Discord.MessageEmbed()

        .setColor('YELLOW')
        .setDescription(`        
        [≫ **DESTEK OLMAK İÇİN LİNKE GİT VE REKLAMLARI GEÇ** ≪]( https://ay.live/9JFCOh )
        `)
        .setThumbnail(message.author.avatarURL({dynamic : true}))
        message.channel.send(tsay)
    } 
});
