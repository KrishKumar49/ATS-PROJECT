const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// const uri = process.env.DATABASE;
const uri = `mongodb+srv://KrishKumar:Krish%407042@cluster0.2ydcm.mongodb.net/krs-project`
console.log(uri);

async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log('connected to database');
    }
    catch(e){
        console.log(e);
    } 
}

module.exports = connectDB;
