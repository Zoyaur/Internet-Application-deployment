const mongoose= require("mongoose");

const contactSchema= new mongoose.Schema({
     fullname:{
        type:String,
        require:true,
        minLength:5
     },
     email:{
        type:String,
        require:true,
        unique:true,
        minLength:4,
       

     },
     phone:{
        type:String,
        require:true,
        minLength:5
     },
     message:{
        type:String,
        require:true,
        minLength:2
     },
})
// creating collection
const UserContact = new mongoose.model('UserContact',contactSchema);
module.exports=UserContact;