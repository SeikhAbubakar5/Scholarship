let mongoose =require("mongoose");

let userSchema=new mongoose.Schema({
        name:{
            type:String
        },
        email:{
            type:String
        },
        enrollment:{
            type:String
        },
        roll:{
            type:Number
        }

})
module.exports=mongoose.model('User',userSchema)