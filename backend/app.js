const mongoose=require("mongoose");
const express=require("express");
const app=express()
require("dotenv").config();


// database connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>console.log("DB connected")).catch((error)=>console.log(error));

var userRoute=require('./routes/userRoutes')

app.use('/',userRoute)

const port=process.env.PORT || 9000;

app.listen(port ,()=>{
    console.log(`server listening on port ${port}`);
})