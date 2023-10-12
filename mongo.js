const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})



const newSchema=new mongoose.Schema({
    UserID:{
        type:String,
        required:true
    }, 
    Name:{
        type:String,
        required:true
    },
    MobileNumber:{
        type:Number,
        required:true
    },
    EmailID:{
        type:String,
        required:true
    },
   
    UserType:{
        type:String,
        required:true
    }
})


const UserModel = mongoose.model("collection",newSchema)
const collection = mongoose.model("collection",newSchema)

module.exports=collection
module.exports=UserModel
