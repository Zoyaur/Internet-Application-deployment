const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
uname  :{
    type :String,
    required:true
},
psw:{
    type:String,
    require:true}


})
const User = new mongoose.model('User',userSchema);
module.exports= User;