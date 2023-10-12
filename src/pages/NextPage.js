import React from 'react'

const NextPage = () => {
 
  return (
    <React.Fragment >
       
       <img className="image" src="assets/Logo.png" alt="Kasi Pandian Group" loading="lazy" />
        <p className="CompanyName">SD Softwares</p>
        <p className="Address">(A Unit of Kasi Pandian Group) <br/>
            Address: 2A, JBM Elite Phase 4, Sri Ganesh Nagar,<br/> 
            Kolapakkam,Chennai - 600 128 <br/>
            Email:annaiangadi@gmail.com <br/>
            Phone:9445570462/7010914209</p>
        <p className="Billsplus">BillsPlus</p>
   
    
        <form action="POST">
            <ul className="Contents">
                <label for="">User ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text"  onChange="" placeholder="UserID"/><br/>
                <label for="">Create Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text"  onChange="" placeholder="CreatePassword"/><br/>
                <label for="">Confirm Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text"  onChange=""placeholder="NewPassword"/><br/>
                <button class="Submit" onClick="">Submit</button>
                <button class="Cancel" onClick="">Cancel</button>
                ,<button class="Delete" onClick="">Delete</button>
        
            </ul>
            
        </form>
       </React.Fragment>
  )
}

export default NextPage