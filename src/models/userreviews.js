const mongoose= require("mongoose");

const reviewSchema= new mongoose.Schema({
     fullname:{
        type:String,
        require:true
     },
     email:{
        type:String,
        require:true,
        unique:true

     },
     comment:{
        type:String,
        require:true
     },
     
      
     
     
})


//collection
const Userreview = new mongoose.model('Userreview',reviewSchema);
module.exports=Userreview;
