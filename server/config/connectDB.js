const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
        });
        const connection = mongoose.connection;
        connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
            process.exit(1);
        });
        connection.once('open', () => {
            console.log('MongoDB connected successfully');
        });
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

module.exports = connectDB;