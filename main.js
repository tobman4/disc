const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');
const { exit } = require('process');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.author.bot) {
    return;
  }
  let name = null;
});


console.log("<SETUP DONE>");
fs.readFile("./token.keys", 'utf8', (err,data) => {
    if(err) {
        throw err;
    }
    client.login(data);
});
