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
            return ctx.reply("Texnologiyalarni yangilashda xatolik yuz berdi.");
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
