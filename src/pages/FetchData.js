import React, { useEffect, useState } from "react"
import axios from "axios"
import {useNavigate, Link, Navigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { trusted } from "mongoose";
import project4 from "./FetchData.module.css";
  

const FetchData = (props) => {
  const [data,setdata] = useState(false);
   useEffect(()=>{
      console.log(props.data)
      setdata(props.data);
   },[props.data])
  return (
    <div className="FetchData">
  
          {
            data && data.map((user) => {
              return <div>
              <p className={project4.Class3}>MobileNumber: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.MobileNumber} </p> 
              <p className={project4.Class2}>Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.Name}</p>
              
              <p className={project4.Class4}>EmailID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.EmailID}</p>
              <p className={project4.Class5}>Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.Password}</p>
              <p className={project4.Class6}>UserType:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.UserType}</p>
              <br />
            </div>
             
            })
            }
      
  
      </div>
      
  )
}

export default FetchData

