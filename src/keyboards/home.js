import { Keyboard } from "grammy";



export const homeKeyboards = new Keyboard()
    .text("Sherik kerak", "sherik")
    .text("Ish joyi kerak", "ish_joyi")
    .row()
    .text("Hodim kerak", "hodim")
    .text("Ustoz kerak", "ustoz")
    .row()
    .text("Shogird kerak", "shogird");
