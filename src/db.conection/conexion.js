// Clave hola2023
// nombre de usurario: sebastian

//
const mongoose = require("mongoose");

const password = "hola2023";
const uri = `mongodb+srv://sebastian:${password}@cluster0.zje6ixh.mongodb.net/?retryWrites=true&w=majority`;

module.exports = () => {
  const connect=()=>{
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },
    (err)=>{
      if (err){
        console.log('error db')
      }else{
        console.log('database conectada')
      }

    })

  }
  connect()
  
};
