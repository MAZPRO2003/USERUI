import project4 from "./Home.module.css";
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { trusted } from "mongoose";

 function Home() {
  

  
  const [UserID,setUserID] = useState('')
  const [Name,setName] = useState('')
  const [MobileNumber,setMobileNumber] = useState('')
  const [EmailID,setEmailID] = useState('')
  const [UserType,setUserType] = useState('')
  const [isValidPhone,setIsValidPhone] = useState(true);
  const [isTouchedPhone,setIsTouchedPhone] = useState(false);
  const [isValidEmailID,setIsValidEmailID] = useState(true);
  const [isTouchedEmailID,setIsTouchedEmailID] = useState(false);
 
  useEffect(() => {
    if(MobileNumber.length !==10) setIsValidPhone(false); // useEffect will occur when there is a change in MobileNumber
    else setIsValidPhone(true);
  },[MobileNumber]);
  

  useEffect( () => {
    if(!(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(EmailID))) setIsValidEmailID(false);
    else setIsValidEmailID(true);
  } , [EmailID])


  const Reset = () => {
  return window.location.reload()
  }
  
  
  async function Submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/",{
        UserID,Name,MobileNumber,EmailID,UserType
      })
      .then(res=>{
        if(res.data=="exist"){
          toast('User Already Exists', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
            
        }
        else if(res.data=="notexist"){
          toast('User Created Successfully', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
           
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
           Phone:9445570462/7010914209<br/>
           GSTIN:12ABCDE34567GH<br/> </p>
        <p className={project4.Heading}>BillsPlus - Users</p>
    
        <form action="POST">
            <ul className={project4.contents}>
                <label for="">User ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="UserID" type="text" onChange={(e) => { setUserID(e.target.value) }} placeholder="UserID"  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                <label for="">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="Name" type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Name" /><br/>
                <label for="">Mobile Number&nbsp;</label>
                <input className={project4.MobileNumber} type="" maxLength="10" required pattern="[0-9]{10}" onChange={(e) => { setIsTouchedPhone(true);setMobileNumber(e.target.value) }} placeholder="MobileNumber (10 Digits)" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                {(isTouchedPhone && !isValidPhone) ?  <div className={project4.phonenotvalid}>Mobile Number is Not Valid</div> : null}
               
                
                <label for="">Email ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className={project4.EmailID} type="text" placeholder="EmailID" onChange={(e) => {setIsTouchedEmailID(true);setEmailID(e.target.value)}}/><br/>
                {(!isValidEmailID && isTouchedEmailID) ? <div className={project4.EmailIDnotvalid}>Email ID is Not Valid</div> : null}
                
                <label for="">User Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <select className={project4.UserType} required class="Option" onClick={(e) => { setUserType(e.target.value) }} placeholder="UserType">
                    <option value="Admin">Admin</option>
                    <option value="SuperVisor">Superviser</option>
                    <option value="Sales Executive">Sales Executive</option>
                </select>
               
                <input  className={project4.Submit} type="submit" onClick={Submit}               
                 disabled = {!(isValidPhone && isTouchedPhone && isValidEmailID && isTouchedEmailID)}/>
                 <ToastContainer/>
                <button className={project4.delete}>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className={project4.cancel} onClick={Reset}>Cancel</button> 
            
            </ul>
            </form>
           
            
       </div>   
    
    </React.Fragment>

   
  )
  }
  


export default Home;