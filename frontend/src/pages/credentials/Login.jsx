 import "./login.css";


import React, { useEffect, useState } from "react"


 







export default function Login() {





  const [backend, setUsers] = useState([{}])
  
  

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(data => {
      setUsers(data)
    }
    )
  }, [])




  
  return (
//     <div>

// {(typeof backend.users === 'undefined')?(
//   <p> Loading.... </p>
// ):(
//   backend.users.map((user,i)=>(
//     <p key={i}>{user}</p>
//   ))
// )}
//     </div>


    <div className="parent"> 
    {/* <Navbar /> */}
    
        <div className="loginRight">

          <div className="loginBox">
          <h2 className="loginLogo">Login</h2> 
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" >
              Create a New Account
            </button>
            
          </div>
          </div>
          
    
       
    </div>
  )
}