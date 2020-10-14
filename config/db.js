const mongoose = require('mongoose');
const db = 'mongodb+srv://Snow:' + process.env.DB_PASSWORD + '@fire451.jxyew.mongodb.net/potato_powered?retryWrites=true&w=majority';

console.log(process.env.DB_PASSWORD)

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
