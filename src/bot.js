import { Bot } from "grammy";
import connectDB from "./database/db.js";
import {
    askName,
    help,
    partner,
    partnerNameSave,
    saveArea,
    saveDate,
    saveJob,
    savePhone,
    savePrice,
    savePurpose,
    saveTechnology,
    start
} from "./commands/index.js";
import { answerYes } from "./commands/confirm.js";


export const bot = new Bot('7699328433:AAFx_QfMSzoGIzv-PzmD_6dW6OX8tmBAOFA');

process.userStates = new Map();
process.partner = {}

bot.command("start", start);
bot.command("help", help);

bot.on("message:text", async (ctx) => {
    const chatId = ctx.chat.id;
    const message = ctx.message.text;
    const currentState = process.userStates.get(chatId);
    if (message === 'Sherik kerak') {
        if (!currentState) {
            await partner(ctx);
            await askName(ctx);
            process.userStates.set(chatId, ['Sherik kerak', "step1"]);
        }

    }
    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step1') {
        await partnerNameSave(ctx);
        process.userStates.set(chatId, ['Sherik kerak', 'step2']);
    }
    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step2') {
        await saveTechnology(ctx);
        process.userStates.set(chatId, ['Sherik kerak', 'step3']);
    }

    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step3') {
        await savePhone(ctx);
        process.userStates.set(chatId, ['Sherik kerak', 'step4']);
    }
    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step4') {
        await saveArea(ctx);
        process.userStates.set(chatId, ['Sherik kerak', 'step5']);
    }
    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step5') {
        await savePrice(ctx);
        process.userStates.set(chatId, ['Sherik kerak', 'step6']);
    }

    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step6') {
        await saveJob(ctx);
        process.userStates.set(chatId, ['Sherik kerak', 'step7']);
    }
    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step7') {
        await saveDate(ctx);
        process.userStates.set(chatId, ['Sherik kerak', 'step8']);
    }
    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step8') {
        const [answer1, answer2] = await savePurpose(ctx);
        await answer1
        await answer2
        process.userStates.set(chatId, ['Sherik kerak', 'step9']);
    }
    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step9' && message === 'Ha') {
        const [answer1, answer2] = await answerYes(ctx);
        
        await ctx.api.sendMessage(process.env.GROUP_ID, answer1),
        await answer2


        process.userStates.set(chatId, ['Sherik kerak', 'step10']);
    }
});







connectDB()
bot.start();

console.log('Bot muvaffaqiyatli ishga tushirildi');
