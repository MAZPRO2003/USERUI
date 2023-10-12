import project4 from "./Home.module.css";
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

 function Home() {
  const history=useNavigate();

  
  const [UserID,setUserID] = useState('')
  const [Name,setName] = useState('')
  const [MobileNumber,setMobileNumber] = useState('')
  const [EmailID,setEmailID] = useState('')
  const [UserType,setUserType] = useState('')
  const [isValid,setIsValid] = useState(true);
  const [isTouched,setIsTouched] = useState(false);
  const [isWorking,setIsWorking] = useState(true);
  const [emailValid,setemailValid] = useState(true);


  useEffect(() => {
    if(MobileNumber.length !==10 && isTouched === true) setIsValid(false); // useEffect will occur when there is a change in MobileNumber
    else setIsValid(true);
  },[MobileNumber]);
  const emailValidation =() =>{
    const regEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if(regEX.test(EmailID)){
      setMessage("Email is Valid")
    }
    else if(!regEX.test(EmailID)&& EmailID !== ""){
      setMessage("Email is not Valid");
    }
    else{
      setMessage("");
    }
    }
  }

 

  async function Submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/",{
        UserID,Name,MobileNumber,EmailID,UserType
      })
      .then(res=>{
        if(res.data=="exist"){
              alert("Mobile Number Already Exists")
        }
        else if(res.data=="notexist"){
          alert("User Details Saved")
          return window.location.reload("/")
        }
    })
    

}
catch(e){
   console.log(e);

}

}
    
  
  return (
   
    <React.Fragment>
    <div className={project4.image}><img src="assets/Logo.png" alt="Kasi Pandian Group" loading="lazy"/></div>
        
      <div className="Home">  
        <p className={project4.CompanyName} >SD Softwares</p>
         
        <p className={project4.Address}>(A Unit of Kasi Pandian Group)<br/>
           Address:2A, JBM Elite Phase 4, Sri Ganesh Nagar,<br/> 
           Kolapakkam, Chennai - 600 128 <br/>
           Email: annaiangadi@gmail.com <br/>
           Phone:9445570462/7010914209</p><br/>
        <p className={project4.Heading}>BillsPlus - Users</p>
    
        <form action="POST">
            <ul className={project4.contents}>
                <label for="">User ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="UserID" type="text" onChange={(e) => { setUserID(e.target.value) }} placeholder="UserID"  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                <label for="">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="Name" type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Name" /><br/>
                <label for="">Mobile Number&nbsp;</label>
                <input className={project4.MobileNumber} type="" maxLength="10" required pattern="[0-9]{10}" onChange={(e) => { setIsTouched(true);setMobileNumber(e.target.value) }} placeholder="MobileNumber (10 Digits)" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                {!isValid ? <div className={project4.phonenotvalid}>Mobile Number is Not Valid</div> : null}
                <label for="">Email ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className={project4.EmailID} type="tel" pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i" onChange={(e) => { setIsTouched(true);setEmailID(e.target.value) }} placeholder="EmailID" /><br/>
                {!isValid ? <div className={project4.emailnotValid}>Email ID is Not Valid</div> : null}
                <label for="">User Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <select className={project4.UserType} required class="Option" onClick={(e) => { setUserType(e.target.value) }} placeholder="UserType">
                    <option value="Admin">Admin</option>
                    <option value="SuperVisor">Superviser</option>
                    <option value="Sales Executive">Sales Executive</option>
                </select>
               
                <input  className={project4.Submit} type="submit" onClick={emailValidation}disabled = {!isValid} />
                <button className={project4.delete}>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className={project4.cancel}>Cancel</button> 
            </ul>
            </form>
           
            
       </div>   
    
    </React.Fragment>

   
  )