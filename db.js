const mongoose = require('mongoose')
    mongoose.connect("mongodb+srv://ashikameens70:8970736107@cluster0.96qg4.mongodb.net/")
    .then(()=>{
        console.log("Connected to DataBase")
    })
    .catch((err)=>{console.log(`Error:${err}`)})