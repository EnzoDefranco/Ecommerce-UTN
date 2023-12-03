const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/tuLibro";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB FUNCIONANDO"))
    .catch((error) => console.error(error));
};

module.exports = db;