const express = require("express")
const collection = require("./mongo")
const cors = require("cors")

const app = express()
 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const{UserID,Name,MobileNumber,EmailID,UserType}=req.body

    const data={
       UserID:UserID,
       Name:Name,
       MobileNumber:MobileNumber,
       EmailID:EmailID,
       UserType:UserType,

    }

    try{
        const check=await collection.findOne({MobileNumber:MobileNumber} && {EmailID:EmailID} &&{UserID:UserID})

        if(check){
            return res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
           
        }

    }
     catch(e){
        res.json("fail")
    }

})
app.post("/deleteUser",async (req,res) =>{
    const{UserID} = req.body;
    try{
     User.deleteOne({_id:UserID},function(err,res){
        console.log(err);
     })
     res.send({status:"OK", data:"Deleted"});
    }
    catch(Error){
        console.log(Error);
    }
})

app.listen(8000,()=>{
    console.log("port connected");
})
