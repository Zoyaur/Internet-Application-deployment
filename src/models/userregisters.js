const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
     fullname:{
        type:String,
        require:true
     },
     email:{
        type:String,
        require:true,
        unique:true

     },
     psw:{
        type:String,
        require:true
     },
     confirmpsw:{
        type:String,
        require:true
     },
})
//collection
const nonUser = new mongoose.model('nonUser',userSchema);
module.exports=nonUser;