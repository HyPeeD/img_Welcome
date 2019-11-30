const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const { exec } = require('child_process');
const canvas = require("canvas");
const Canvas = require("canvas");
const fs = require('fs');
const util = require("util")
const ms = require("ms");
const jimp = require("jimp");
const guild = require('guild');
const dateFormat = require('dateformat');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
var table = require('table').table
const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
client.login(TOKEN);
const me = client;
const bot = client



client.on('guildMemberAdd', member => {
let channel = member.guild.channels.get("646121774655864842");
if (member.user.bot) return;
var Canvas = require('canvas')
var jimp = require('jimp')
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
const w = ['./file.png'];
             let Image = Canvas.Image,
                canvas = Canvas.createCanvas(500, 260),
                  ctx = canvas.getContext('2d');
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);

             

      })
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);

                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 265, 162);

                                                     var guild;
    while (!guild)
                        guild = member.guild
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {

})
})
                              //AVATAR?
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(132.4, 117.7, 92.7, 0, Math.PI*2, true);
                   ctx.closePath();

                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();
 channel.sendFile(canvas.toBuffer())
                          })
})
});






