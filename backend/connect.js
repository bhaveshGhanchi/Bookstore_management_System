const mongoose = require('mongoose')
require('dotenv').config()
uri = `mongodb+srv://Mernmp:${process.env.PASS}@cluster0.mbaqegg.mongodb.net/?retryWrites=true&w=majority`
const options = {
    autoIndex: false, 
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000,
    family: 4 
  };

const con =  mongoose.connect(uri, options).then(
    () => { 
        console.log("Connection successful");
    },
    err => {console.log(err)}
  );

module.exports = con