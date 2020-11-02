const mongoose = require('mongoose');

// Edit the line below with your own connection string
const db = 'mongodb+srv://' + process.env.DB_USERNAME +':' + process.env.DB_PASSWORD + '@fire451.jxyew.mongodb.net/' + process.env.DB_NAME + '?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(db,{useNewUrlParser: true});
    console.log('MongoDB is Connected...');

  } catch (err) {
    console.log("not connected to db :(");
    console.error(err.message);
  }
};

module.exports=connectDB;
