const mongoose = require('mongoose');


async function databaseConnection() {
  await mongoose.connect(process.env.DB);
  console.log('DB connected!')
}

module.exports = databaseConnection;