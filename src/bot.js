import { Bot } from "grammy";
import connectDB from "./database/db.js";
import { askName, help, partner, partnerNameSave, saveArea, saveJob, savePhone, savePrivce, saveTechnology, start } from "./commands/index.js";


export const bot = new Bot('7699328433:AAFx_QfMSzoGIzv-PzmD_6dW6OX8tmBAOFA');

const userStates = new Map();


bot.command("start", start);
bot.command("help", help);

bot.on("message:text", async (ctx) => {
    const chatId = ctx.chat.id;
    const message = ctx.message.text;
    const currentState = userStates.get(chatId);
    if (message === 'Sherik kerak') {
        if (!currentState) {
            await partner(ctx);
            await askName(ctx);
            userStates.set(chatId, ['Sherik kerak', "step1"]);
        }

    }
    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step1') {
        await partnerNameSave(ctx);
        userStates.set(chatId, ['Sherik kerak', 'step2']);
    }
    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step2') {
        await saveTechnology(ctx);
        userStates.set(chatId, ['Sherik kerak', 'step3']);
    }

    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step3') {
        await savePhone(ctx);
        userStates.set(chatId, ['Sherik kerak', 'step4']);
    }
    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step4') {
        await saveArea(ctx);
        userStates.set(chatId, ['Sherik kerak', 'step5']);
    }
    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step5') {
        await savePrivce(ctx);
        userStates.set(chatId, ['Sherik kerak', 'step6']);
    }

    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step6') {
        await saveJob(ctx);
        userStates.set(chatId, ['Sherik kerak', 'step7']);
    }
    if (currentState && currentState[0] === 'Sherik kerak' && currentState[1] === 'step7') {
        await saveDate(ctx);
        userStates.set(chatId, ['Sherik kerak', 'step8']);
    }
});







connectDB()
bot.start();

console.log('Bot muvaffaqiyatli ishga tushirildi');
