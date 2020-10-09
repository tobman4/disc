const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');
const { exit } = require('process');
const request = require('request');


const dad = require("./dad.js");


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.author.bot) {
    return;
  }
  let dad_res = dad.test_msg(msg.content);
  if(dad_res != null) {
    msg.channel.send(dad_res);
    return;
  }
  
  let res = null;
  switch(msg.content.toUpperCase()) {
    case "!STEAM PRICE":
      res = get_steam_price(msg);
      break;
  }

  if(res != null) {
    msg.channel.send(res);
  }

});

function get_steam_price(msg) {
  request('https://steam.seewang.me/api', (err, res) => {
    if (err) { return console.log(err); }
    let data = JSON.parse(res.body);
    let out = "You can buy all games on steam for only " + data[0]["sale"] + "$";
    msg.channel.send(out);
  });
}

console.log("<SETUP DONE>");
fs.readFile("./token.keys", 'utf8', (err,data) => {
    if(err) {
        throw err;
    }
    client.login(data);
});
