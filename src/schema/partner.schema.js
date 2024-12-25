import mongoose, { Schema, model } from 'mongoose';

const PartnerSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    partner: {
        type: String,
    },
    technology: {
        type: Array,
    },
    telegram: {
        type: String,
        default: null
    },
    contact: {
        type: String,
    },
    area: {
        type: String,
    },
    price: {
        type: String,
    },
    job: {
        type: String,
    },
    time_to_contact: {
        type: String,
    },
    purpose: {
        type: String,
    }
});

export const Partner = model('partner', PartnerSchema);
