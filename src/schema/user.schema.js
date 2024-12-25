import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  telegramId: { 
    type: String, 
    required: true, 
    unique: true
  },
  username: { 
    type: String, 
    default: null 
  },
  firstName: { 
    type: String, 
    required: true 
  },
  lastName: { 
    type: String, 
    default: null 
  },
  language: { 
    type: String, 
    default: 'uz'
  },
  joinedAt: { 
    type: Date, 
    default: Date.now
  }
});

export const User = model('User', UserSchema);
