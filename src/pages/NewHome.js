import React, { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom';
import axios from "axios"
import Styles from "./ChangePassword.module.css"

function NewHome(){
   
    const history=useNavigate();

    const [UserID1,setUserID1] = useState('UserID1')
    const [CreatePassword,setCreatePassword] = useState('Password')
    const [NewPassword,setNewPassword] = useState('NewPassword')
    
  
   async function Submit(e){
      e.preventDefault();
    
  
      try{
        
         await axios.post("http://localhost:8000/",{
          UserID1,CreatePassword,NewPassword
        })
        .then(res1=>{
          console.log(res1);
          if(res1.data==="exist"){
               return alert("User Already Exist")
          }
          else if(res1.data==="notexist"){
               return history("/NextPage")
          }
     })
      
  
  }
  catch(e){
     console.log(e);
  
  }
  
  }
      
    return (
       <React.Fragment >
       
       <img className={Styles.image} src="assets/Logo.png" alt="Kasi Pandian Group" loading="lazy" />
        <p className={Styles.CompanyName}>SD Softwares</p>
        <p className={Styles.Address}>(A Unit of Kasi Pandian Group) <br/>
            Address: 2A, JBM Elite Phase 4, Sri Ganesh Nagar,<br/> 
            Kolapakkam,Chennai - 600 128 <br/>
            Email:annaiangadi@gmail.com <br/>
            Phone:9445570462/7010914209</p>
        <p className={Styles.Billsplus}>BillsPlus</p>
   
    
        <form action="POST">
            <ul className={Styles.Contents}>
                <label for="">User ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text"  onChange={(e) => { setUserID1(e.target.value) }} placeholder="UserID"/><br/>
                <label for="">Create Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text"  onChange={(e) => { setCreatePassword(e.target.value) }} placeholder="CreatePassword"/><br/>
                <label for="">Confirm Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text"  onChange={(e) => { setNewPassword(e.target.value) }} placeholder="NewPassword"/><br/>
                <button class="Submit" type="submit" onClick={Submit}>Submit</button>
                <button class="Cancel" onClick="">Cancel</button>
                <button class="Delete" onClick="">Delete</button>
        
            </ul>
            
        </form>
       </React.Fragment>
    )
}

export default NewHome