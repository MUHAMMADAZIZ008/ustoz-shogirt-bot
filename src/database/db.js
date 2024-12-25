import { config } from 'dotenv';
import { connect } from 'mongoose';
config()

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ustozshogirdbot';

const connectDB = async () => {
  try {
    await connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB bilan ulanish muvaffaqiyatli amalga oshirildi');
  } catch (error) {
    console.error('MongoDB bilan ulanishda xatolik:', error.message);
    process.exit(1); 
  }
};

export default connectDB;
