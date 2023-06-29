//connecting database mongo with express application
const mongoose=require("mongoose");
//creating a database
 mongoose.connect("mongodb://0.0.0.0:27017/projectiad",)
 
.then(()=>
{
console.log('connection successful')})
.catch((e)=>{ //catching error

console.log(e.message);
console.log("failed");
})


