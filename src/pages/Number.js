import React, { useState } from 'react'

const Number =  () => {
  const[PhoneNumber,setPhoneNumber] = useState("")
  const[valid,setValid] = useState(true)

  const handleChange =(event) =>{
  const input = event.target.value;
  setPhoneNumber(input);
  setValid(validatePhoneNumber(input));
  
  const validatePhoneNumber=(PhoneNumber)  =>{
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.text(PhoneNumber);
  }
}

    return (
    <div>
        <label>
            Phone Number 
            <input 
            type="text"
            value={PhoneNumber}
            onChange={handleChange} />
        </label>
        {! valid && <p> please Enter a valid 10 digit phone number</p>}
    </div>
  )
}

export default Number;