import { homeKeyboards } from '../keyboards/home.js';
import { User } from '../schema/index.js'



export const start = async (ctx) => {
    try {
        const user = ctx.update.message.from
        const telegramId = user.id.toString();
        const currentUser = await User.findOne({ telegramId })
        
        if (!currentUser) {
            const newUser = new User({
                chatId: ctx.chat.id,
                telegramId,
                username: user.username,
                firstName: user.first_name,
                lastName: user.last_name,
                language: user.language_code
            })
            await newUser.save()
            if (newUser.chatId === ctx.chat.id) {
                await process.userStates.clear()
            }
        }
        if (currentUser.chatId === ctx.chat.id) {
            await process.userStates.clear()
        }
        ctx.reply(`
Assalom alaykum ${user.first_name}
UstozShogird kanalining rasmiy botiga xush kelibsiz!

/help yordam buyrugi orqali nimalarga qodir ekanligimni bilib oling!
`, {
            reply_markup: homeKeyboards
        })
    } catch (error) {
        console.error(error.message);
    }

}