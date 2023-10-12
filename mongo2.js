const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

const newSchema1=new mongoose.Schema({
    UserID1:{
        type:String,
        required:true
    },
    CreatePassword:{
        type:String,
        required:true
    },
    NewPassword:{
        type:String,
        required:true
    }
})
const UserModel = mongoose.model("collection2",newSchema1)

const collection2 = mongoose.model("collection2",newSchema1)

module.exports=UserModel
module.exports=collection2