const mongoose = require('mongoose');
const db = 'mongodb+srv://Snow:Wiggle3_Waggle@fire451.jxyew.mongodb.net/potato_powered?retryWrites=true&w=majority';


const connectDB = async () => {
  console.log(mongoose);
  try {
    await mongoose.connect(db,{useNewUrlParser: true});
    console.log('MongoDB is Connected...');

  } catch (err) {
    console.log("not connected to db :(");
    console.error(err.message);
  }
};

module.exports=connectDB;
