const Discord = require('discord.js');
const client = new Discord.Client(); client.on('ready', () => {     console.log(`Logged in as ${client.user.tag}!`); }); client.on('message', msg => {     if (msg.content === 'ping') {         msg.reply('pong');     } }); client.login('Nzg3NzQ3MTcyMzM3NzEzMTUz.X9ZcuQ.8oQDE5LbkArg-X9N2Xd2htziGeE');

const Words = ["PIZDO","pizdo","KURWA","kurwa","JEBANA","jebana","luju","LUJU"];
client.on("ready", () => {
 console.log("I am ready!");
});

function myFunction() {
client.on("message", (message) => {
 if (Words.some(word => message.content.includes(word))) {
 message.reply("Kutury troche!");
 //setTimeout(2000)
 message.author.send("Nosz kurde co za cham się znalazł. Niepojęte, że tacy ludzie są na świecie");
 message.delete();
 }
});
}
