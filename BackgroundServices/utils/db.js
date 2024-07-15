const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// DB
const DB = process.env.DB;

const dbConnection = async () => {
  try {
    await mongoose.connect(DB).then(() => {
      console.log(`Database connection is successful.`);
    });
  } catch (error) {
    console.log(error.message);
    setTimeout(dbConnection, 5000);
  }
};

module.exports = dbConnection;
