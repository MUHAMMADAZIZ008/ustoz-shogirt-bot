import { confirmBotton } from "../keyboards/confirm.botton.js";
import { homeKeyboards } from "../keyboards/home.js";
import { Partner, User } from "../schema/index.js";



export const askConfirm = async (ctx, partnerId) => {
    try {
        const newPartner = await Partner.findOne({ _id: partnerId })


        let technologyToString;

        const searchTechnology = newPartner.technology[0]
        if (newPartner.technology.length > 0) {
            technologyToString = newPartner.technology.reduce(
                (acc, curratnValue) => acc += ', ' + curratnValue
            )
        } else {
            technologyToString = newPartner.technology[0]
        }
        return [ctx.reply(`
Sherik kerak:

🏅 Sherik: ${newPartner.partner}
📚 Texnologiya: ${technologyToString} 
🇺🇿 Telegram: @${newPartner.telegram}
📞 Aloqa: ${newPartner.contact}
🌐 Hudud: ${newPartner.area}
💰 Narxi: ${newPartner.price}
👨🏻‍💻 Kasbi: ${newPartner.job}
🕰 Murojaat qilish vaqti: ${newPartner.time_to_contact} 
🔎 Maqsad: ${newPartner.puropse}

#sherik #${searchTechnology} #${newPartner.area}
        `),
        ctx.reply(`Barcha ma'lumotlar to'g'rimi?`, {
            reply_markup: confirmBotton
        })
        ]
    } catch (error) {
        console.error(error.message);

    }
}
export const answerYes = async (ctx) => {
    try {
        const telegramId = ctx.update.message.from.id
        const currentUser = await User.findOne({ telegramId })
        if (currentUser.chatId === ctx.chat.id) {
            await process.userStates.clear()
        }
        const userPartners = await Partner.find({ userId: currentUser._id })
        const currentPartner = userPartners.pop()

        let technologyToString
        if (currentPartner.technology.length > 0) {
            technologyToString = currentPartner.technology.reduce(
                (acc, curratnValue) => acc += ', ' + curratnValue
            )
        } else {
            technologyToString = currentPartner.technology[0]
        }
        const searchTechnology = currentPartner.technology[0]
        const sendMessage = `
Sherik kerak:

🏅 Sherik: ${currentPartner.partner}
📚 Texnologiya: ${technologyToString} 
🇺🇿 Telegram: @${currentPartner.telegram}
📞 Aloqa: ${currentPartner.contact}
🌐 Hudud: ${currentPartner.area}
💰 Narxi: ${currentPartner.price}
👨🏻‍💻 Kasbi: ${currentPartner.job}
🕰 Murojaat qilish vaqti: ${currentPartner.time_to_contact} 
🔎 Maqsad: ${currentPartner.purpose}

#sherik #${searchTechnology} #${currentPartner.area}
`

        const result = [
            sendMessage,
            ctx.reply(`
📪 So'rovingiz tekshirish uchun adminga jo'natildi!

E'lon 24-48 soat ichida kanalda chiqariladi.    
            `, {
                reply_markup: homeKeyboards
            })
        ]

        return result
    } catch (error) {
        console.error(error.message);
    }
}   