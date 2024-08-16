import React, { useRef, useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router'
import axios from 'axios'


function Signup() {
   const email = useRef(null)
   const password = useRef(null)
   const navigate = useNavigate()
   const [userData, setUserdata] = useState({
      email: "", password: "", username: ""
   })

  async function handleClick() {

      email.current.textContent = ""
      password.current.textContent = ""

      const empty = Object.values(userData).some(val => val === "")
      if (empty) {
         alert("Fill all the fields")
      }

      if (!empty) {
         if (!userData.email.includes("@") || !userData.email.includes(".com")) {
            console.log("no")
            email.current.textContent = "Enter a valid email"
    
         }
         if (userData.password.length < 5) {
            password.current.textContent = "Minimum password length is 5 characters";
            return;
         }
        let response = await axios.post('http://localhost:5000/userRegister' , {
         email:userData.email , password:userData.password , username:userData.username
        })
        if(response.data.includes("User is already registered"))
         email.current.textContent = "Email is already registered"
      }
   }

   return (
      <>
         <div className='signup-main'>
            <div className='signup-box'>
               <p>Signup Here</p>
               <p>Already a user? <span onClick={() => navigate('/login')} style={{ cursor: "pointer", borderBottom: "1px solid black" }}>Log in</span></p>
               <div className='signup-box-inputs'>
                  <p>Username</p>
                  <input value={userData.username} placeholder='Enter username' onChange={(event) => {
                     let data = event.target.value.trim()
                     setUserdata({ ...userData, username: data })
                  }}></input>
               </div>
               <div className='signup-box-inputs'>
                  <p>Email <span style={{ color: "red", fontSize: "0.75rem", marginLeft: "2rem" }} ref={email}></span></p>
                  <input value={userData.email} placeholder='Enter email' onChange={(event) => {
                     let data = event.target.value.trim()
                     setUserdata({ ...userData, email: data })
                  }}></input>
               </div>
               <div className='signup-box-inputs'>
                  <p>Password <span style={{ color: "red", fontSize: "0.75rem", marginLeft: "2rem" }} ref={password}></span></p>
                  <input value={userData.password} placeholder='Enter password' onChange={(event) => {
                     let data = event.target.value.trim()
                     setUserdata({ ...userData, password: data })
                  }}></input>
               </div>

               <div className='signup-box-button'>
                  <button onClick={() => handleClick()}>Sign Up</button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Signup