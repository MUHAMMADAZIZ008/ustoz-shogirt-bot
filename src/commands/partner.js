import { Partner } from "../schema/partner.schema.js";
import { User } from "../schema/user.schema.js";
import { askConfirm } from "./confirm.js";



export const partner = async (ctx) => {
    // const telegramId = ctx.update.message.from.id
    // const currentUser = await User.findOne({ telegramId })
    
    // if (currentUser.chatId === ctx.chat.id) {
    //     await process.userStates.clear()
    // }
    return ctx.reply(`
Sherik topish uchun ariza berish

Hozir sizga birnecha savollar beriladi. 
Har biriga javob bering. 
Oxirida agar hammasi to'g'ri bo'lsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.
`);
}

export const askName = async (ctx) => {
    return ctx.reply(`
Ism, familiyangizni kiriting?
`)
}

export const partnerNameSave = async (ctx) => {
    const userName = ctx.message.text
    const telegramId = ctx.update.message.from.id
    const currentUser = await User.findOne({ telegramId })

    const newPartner = new Partner({
        userId: currentUser._id,
        partner: userName
    })
    await newPartner.save()

    return ctx.reply(`
📚 Texnologiya:

Talab qilinadigan texnologiyalarni kiriting?
Texnologiya nomlarini vergul bilan ajrating. Masalan, 

Java, C++, C#
`)
}

export const saveTechnology = async (ctx) => {
    try {
        const technologyToArray = ctx.message.text.split(',').map(tech => tech.trim());
        const telegramId = ctx.update.message.from.id
        const currentUser = await User.findOne({ telegramId })

        const userPartners = await Partner.find({ userId: currentUser._id })

        const currentPartner = userPartners.pop()

        const filter = { _id: currentPartner._id }
        const update = {
            $set: { technology: technologyToArray, telegram: currentUser.username }
        }
        await Partner.updateOne(filter, update)

        return ctx.reply(`
📞 Aloqa: 

Bog'lanish uchun raqamingizni kiriting?
Masalan, +998 90 123 45 67
        `);
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        return ctx.reply("Texnologiyalarni saqlashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
};

export const savePhone = async (ctx) => {
    try {
        const userPhone = ctx.message.text
        const telegramId = ctx.update.message.from.id
        const currentUser = await User.findOne({ telegramId })

        const userPartners = await Partner.find({ userId: currentUser._id })
        const currentPartner = userPartners.pop()
        const filter = { _id: currentPartner._id }
        const update = {
            $set: { contact: userPhone }
        }
        await Partner.updateOne(filter, update)
        return ctx.reply(`
🌐 Hudud: 

Qaysi hududdansiz?
Viloyat nomi, Toshkent shahar yoki Respublikani kiriting.
            `)

    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        return ctx.reply("Raqamni saqlashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
}




export const saveArea = async (ctx) => {
    try {
        const userArea = ctx.message.text

        const telegramId = ctx.update.message.from.id
        const currentUser = await User.findOne({ telegramId })

        const userPartners = await Partner.find({ userId: currentUser._id })
        const currentPartner = userPartners.pop()
        const filter = { _id: currentPartner._id }
        const update = {
            $set: { area: userArea }
        }
        await Partner.updateOne(filter, update)

        return ctx.reply(`
💰 Narxi:

Tolov qilasizmi yoki Tekinmi?
Kerak bo'lsa, Summani kiriting?
        `)
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        return ctx.reply("Hududni saqlashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
}


export const savePrice = async (ctx) => {
    try {

        const userPrice = ctx.message.text

        const telegramId = ctx.update.message.from.id
        const currentUser = await User.findOne({ telegramId })

        const userPartners = await Partner.find({ userId: currentUser._id })
        const currentPartner = userPartners.pop()
        const filter = { _id: currentPartner._id }
        const update = {
            $set: { price: userPrice }
        }
        await Partner.updateOne(filter, update)


        return ctx.reply(`
👨🏻‍💻 Kasbi: 

Ishlaysizmi yoki o'qiysizmi?
Masalan, Talaba
        `)
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        return ctx.reply("Narxni saqlashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
}



export const saveJob = async (ctx) => {
    try {
        const userJob = ctx.message.text

        const telegramId = ctx.update.message.from.id
        const currentUser = await User.findOne({ telegramId })

        const userPartners = await Partner.find({ userId: currentUser._id })
        const currentPartner = userPartners.pop()
        const filter = { _id: currentPartner._id }
        const update = {
            $set: { job: userJob }
        }
        await Partner.updateOne(filter, update)

        return ctx.reply(`
🕰 Murojaat qilish vaqti: 

Qaysi vaqtda murojaat qilish mumkin?
Masalan, 9:00 - 18:00
        `)
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        return ctx.reply("Kasb saqlashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
}


export const saveDate = async (ctx) => {
    try {
        const userDate = ctx.message.text
        const telegramId = ctx.update.message.from.id
        const currentUser = await User.findOne({ telegramId })

        const userPartners = await Partner.find({ userId: currentUser._id })
        const currentPartner = userPartners.pop()
        const filter = { _id: currentPartner._id }
        const update = {
            $set: { time_to_contact: userDate }
        }
        await Partner.updateOne(filter, update)
        return ctx.reply(`
🔎 Maqsad: 

Maqsadingizni qisqacha yozib bering.
        `)
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        return ctx.reply("Kasb saqlashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
}

export const savePurpose = async (ctx) => {
    try {
        const userPurpose = ctx.message.text
        const telegramId = ctx.update.message.from.id
        const currentUser = await User.findOne({ telegramId })

        const userPartners = await Partner.find({ userId: currentUser._id })
        const currentPartner = userPartners.pop()
        const filter = { _id: currentPartner._id }
        const update = {
            $set: { purpose: userPurpose }
        }
        await Partner.updateOne(filter, update)
        return askConfirm(ctx, currentPartner._id)
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        return ctx.reply("Kasb saqlashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
}