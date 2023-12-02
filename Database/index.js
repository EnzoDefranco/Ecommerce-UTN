const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://localhost:27017/ecommerceUTN';

const db = async () => {
    await mongoose
        .connect(MONGO_URL)
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.log(err));
};

module.exports = db;