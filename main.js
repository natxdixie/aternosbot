var mineflayer = require('mineflayer')

var bot = mineflayer.createBot({
  host: "pirecrafty.aternos.me",   
  username: "BotServer",
  version: "1.17.1"
})

bot.on('login', async () => {
    console.log(' bot is on ')
})