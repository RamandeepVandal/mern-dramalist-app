const mongoose = require('mongoose');

// connect to Mongo DB
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.DRAMA_MONGODB);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;