require('dotenv').config()
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.token)

bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.on('text', async (ctx) => {
//  console.log(ctx.message);
  console.log("from: " + ctx.message.from.id)
  let modul = ctx.message.text.split(" ")[0];
  let modul_path = './app/modules'+modul+'.js';
  if (modul.substring(0, 1) != '/') {
    console.log("he says :"+modul);
    ctx.replyWithHTML('hy...!');
    return;
  }else{
    console.log("modul: " + modul_path)
    try {
      let app = require(modul_path);
      let msg = await app(ctx.message)
      console.log(msg);
      ctx.replyWithHTML(
        msg
      )
      // ctx.replyWithHTML("okee");
    } catch(e) {
      console.log(e);
      ctx.replyWithHTML(
        'undur-undur tidak mengenali perintah ini.',
        {'reply_to_message_id':ctx.message.message_id})
    }
  }
})

bot.startPolling()
