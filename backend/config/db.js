
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//function for connecting to mongo atlas database.
mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    );

    console.log('Mongo atlas DB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;