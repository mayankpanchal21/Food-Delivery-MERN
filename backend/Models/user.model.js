const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
   fullname:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String
   },
   mobileno:{
    type:number,
    required:true
   },
   role:
   {
    type:String,
    enum:[user,admin,deliveryboy],
    required:true
   }
},{timestamps:true} );
const user = mongoose.model('user', userschema);

export default user;