import { askConfirm } from "./confirm.js";



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
    const userName = ctx.message.text
    process.partner.partner = userName
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
        process.partner.technology = technologyToArray
        
        
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
        process.partner.contact = userPhone
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
        const userArea = ctx.message.text
        process.partner.area = userArea
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


export const savePrice = async (ctx) =>{
    try {

        const userPrice = ctx.message.text
        process.partner.price = userPrice
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
        const userJob = ctx.message.text
        process.partner.job = userJob
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
        const userDate = ctx.message.text
        process.partner.time_to_contact = userDate
        return ctx.reply(`
🔎 Maqsad: 

Maqsadingizni qisqacha yozib bering.
        `)
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        return ctx.reply("Kasb saqlashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
}

export const savePurpose = async (ctx) =>{
    try {
        const userPurpose = ctx.message.text
        process.partner.purpose = userPurpose
        return askConfirm(ctx, process.partner)
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        return ctx.reply("Kasb saqlashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
}