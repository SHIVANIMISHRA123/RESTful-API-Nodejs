require ('dotenv').config();
const {mongoose} = require('mongoose');
const db_url = process.env.DB_URL;
  

 const connect = function(){
    mongoose.connect(db_url).then((val)=>{
        console.log('Database Has Connected'); 
    }).catch((err)=>{
        console.log('Database has not connected')
    })
 }
module.exports = connect;