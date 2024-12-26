import { Partner, User } from "../schema/index.js";



export const partner = async (ctx) => {

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

    const currnetUserId = ctx.update.message.from.id
    const currnetUser = await User.findOne({ telegramId: currnetUserId })
    const newParnerIdAndName = {
        userId: currnetUser._id,
        partner: ctx.message.text
    }
    const newPartner = new Partner(newParnerIdAndName)
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

        const currnetUserId = ctx.update.message.from.id;
        const currnetUser = await User.findOne({ telegramId: currnetUserId })
        const currnetPartner = (await Partner.find({ userId: currnetUser._id }).exec()).pop();

        if (!currnetPartner) {
            return ctx.reply("Foydalanuvchi topilmadi. Iltimos, qayta urinib ko'ring.");
        }

        const updateResult = await Partner.updateOne(
            { _id: currnetPartner._id },
            { $set: { technology: technologyToArray } }
        );

        if (updateResult.nModified === 0) {
            return ctx.reply("Texnologiyalarni saqlashda xatolik yuz berdi.");
        }

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
        const newPhoneText = ctx.message.text.trim()
        const currnetUserId = ctx.update.message.from.id;
        const currnetUser = await User.findOne({ telegramId: currnetUserId })
        const currnetPartner = (await Partner.find({ userId: currnetUser._id }).exec()).pop();

        if (!currnetPartner) {
            return ctx.reply("Foydalanuvchi topilmadi. Iltimos, qayta urinib ko'ring.");
        }

        const updateResult = await Partner.updateOne(
            { _id: currnetPartner._id },
            { $set: { 
                telegram: currnetUser.username,
                contact: newPhoneText
            } }
        );

        if (updateResult.nModified === 0) {
            return ctx.reply("Texnologiyalarni saqlashda xatolik yuz berdi.");
        }
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




export const saveArea = async (ctx) =>{
    try {
        const newAreaText = ctx.message.text.trim()
        const currnetUserId = ctx.update.message.from.id;
        const currnetUser = await User.findOne({ telegramId: currnetUserId })
        const currnetPartner = (await Partner.find({ userId: currnetUser._id }).exec()).pop();

        if (!currnetPartner) {
            return ctx.reply("Foydalanuvchi topilmadi. Iltimos, qayta urinib ko'ring.");
        }

        const updateResult = await Partner.updateOne(
            { _id: currnetPartner._id },
            { $set: { 
                area: newAreaText
            } }
        );

        if (updateResult.nModified === 0) {
            return ctx.reply("Hududni saqlashda xatolik yuz berdi.");
        }
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


export const savePrivce = async (ctx) =>{
    try {
        const newPriceText = ctx.message.text.trim()
        const currnetUserId = ctx.update.message.from.id;
        const currnetUser = await User.findOne({ telegramId: currnetUserId })
        const currnetPartner = (await Partner.find({ userId: currnetUser._id }).exec()).pop();

        if (!currnetPartner) {
            return ctx.reply("Foydalanuvchi topilmadi. Iltimos, qayta urinib ko'ring.");
        }

        const updateResult = await Partner.updateOne(
            { _id: currnetPartner._id },
            { $set: { 
                price: newPriceText
            } }
        );

        if (updateResult.nModified === 0) {
            return ctx.reply("Narx saqlashda xatolik yuz berdi.");
        }
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



export const saveJob = async (ctx) =>{
    try {
        const newJobText = ctx.message.text.trim()
        const currnetUserId = ctx.update.message.from.id;
        const currnetUser = await User.findOne({ telegramId: currnetUserId })
        const currnetPartner = (await Partner.find({ userId: currnetUser._id }).exec()).pop();

        if (!currnetPartner) {
            return ctx.reply("Foydalanuvchi topilmadi. Iltimos, qayta urinib ko'ring.");
        }

        const updateResult = await Partner.updateOne(
            { _id: currnetPartner._id },
            { $set: { 
                job: newJobText
            } }
        );

        if (updateResult.nModified === 0) {
            return ctx.reply("Kasb saqlashda xatolik yuz berdi.");
        }
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


export const saveDate = async (ctx) =>{
    try {
        const newDateText = ctx.message.text.trim()
        const currnetUserId = ctx.update.message.from.id;
        const currnetUser = await User.findOne({ telegramId: currnetUserId })
        const currnetPartner = (await Partner.find({ userId: currnetUser._id }).exec()).pop();

        if (!currnetPartner) {
            return ctx.reply("Foydalanuvchi topilmadi. Iltimos, qayta urinib ko'ring.");
        }

        const updateResult = await Partner.updateOne(
            { _id: currnetPartner._id },
            { $set: { 
                time_to_contact: newDateText
            } }
        );

        if (updateResult.nModified === 0) {
            return ctx.reply("Kasb saqlashda xatolik yuz berdi.");
        }
        return ctx.reply(`
🔎 Maqsad: 

Maqsadingizni qisqacha yozib bering.
        `)
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        return ctx.reply("Kasb saqlashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
}