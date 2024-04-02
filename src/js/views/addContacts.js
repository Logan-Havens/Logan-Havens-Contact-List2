import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const addContacts = () => {
   const{store, actions} = useContext(Context);
   const[fullName, setFullName] = useState("");
   const[email, setEmail] = useState("");
   const[phone, setPhone] = useState("");
   const[address, setAddress] = useState("");

      let navigate = useNavigate()

      const submitContact = (e) => {
         e.preventDefault()
         console.log(fullName, email, phone, address)
         actions.createContact({name:fullName, address, email, phone})
         setFullName("")
         setAddress("")
         setEmail("")
         setPhone("")
         navigate("/listContacts")

      };

      return (
         <>
             <h1>Add a New Contact</h1>
             <div class="form-group">
                 <label for="addFullName">Full Name</label>
                 <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="full name" className="form-control" id="addFullName" placeholder="Full Name" />
             </div>
             <div class="form-group">
                 <label for="addEmail">Email</label>
                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="addEmail" placeholder="Enter email" />
             </div>
             <div class="form-group">
                 <label for="addPhone">Phone</label>
                 <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone number" className="form-control" id="addPhone" placeholder="Enter phone" />
             </div>
             <div class="form-group">
                 <label for="addAddress">Address</label>
                 <input value={address} onChange={(e) => setAddress(e.target.value)} type="address" className="form-control" id="addAddress" placeholder="Enter address" />
             </div>
             <button onClick={(e) => submitContact(e)} class="btn btn-primary">Submit</button>
             <Link to={"/listContacts"}>or get back to contacts</Link> 
         </>
     );
 };
 
 export default addContacts;

