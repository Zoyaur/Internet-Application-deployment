const express = require("express"); //configure express func in app file
const path=require("path");
const app = express(); //fetch all power method of express in 
const hbs = require('hbs');
const NonUser = require("./models/userregisters");
const User = require("./models/userlogin");
const UserContact=require("./models/usercontact");
const Userreview=require("./models/userreviews");
require("./db/mongo");
const port=process.env.PORT || 3000;

//starting the path
const static_path= path.join(__dirname ,"../public");
const templatepath= path.join(__dirname,"../templates/views");
const partialpath= path.join(__dirname,"../templates/partials");


//setting the path 
//middleware
/*app.use( '/css', express.static(path.join(__dirname, "..node_modules/bootstrap/dist/css")));
app.use( '/js',express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use( '/css',express.static(path.join(__dirname, "../node_modules/jquery/dist")));*/
app.use(express.static(static_path))

app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get("/", (req,res) => {
      res.render("login");} );
      app.get("/userlogin" ,async(req,res)=>{
        try{
            const allUser = User.find({});
            console.log(allUser);}
            catch(error){
                console.log(error);
            }
            }
        )
    

app.get("/login.hbs", (req,res) => {
            res.render("login");} );  
 
app.post("/login",async (req,res) => {
     try{
            // res.send(req.body);
            const userData= new  User(req.body) ; 
             await userData.save();
             res.status(201).render("index");
            
                }
    catch(error){
             res.status(500).send(error);
                }
            });
         
app.get("/reviews.hbs", (req,res) => {
                res.render("reviews");} );
app.post("/reviews",async (req,res) => {
    try{
            // res.send(req.body);
             const userInfo= new  Userreview(req.body); 
             await userInfo.save();
             res.status(201).render("index");}
    catch(error){
             res.status(500).send(error);
                    }
                });                    
app.get("/contact.hbs", (req,res) => {
             res.render("contact");} );  
app.post("/contact",async (req,res) => {
     try{
                            //res.send(req.body);
             const userInfo= new  UserContact(req.body) ; 
            await userInfo.save();
            res.status(201).render("index");
                     }
     catch(error){
              res.status(500).send(error);
                        }
     });                    

                    
app.get("/books.hbs", (req,res) => {
    res.render("books");} );  


 app.get("/register.hbs", (req,res) => {
          res.render("register");} );  
app.post("/register",async (req,res) => {
    try{
        // res.send(req.body);
         const userInfo= new  NonUser(req.body) ; 
        await userInfo.save();
         res.status(201).render("index");

    }
    catch(error){
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log("server is runnning  ")
});