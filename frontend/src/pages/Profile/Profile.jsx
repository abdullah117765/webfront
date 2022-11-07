import 'bootstrap/dist/css/bootstrap.min.css';
import {
   faUnlock,
  faEdit, faLock, 
 

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from 'react';

import Feedbackfunc from "..//feedback";
import Card from 'react-bootstrap/Card';
import logo from "./images.jpg";
import 'react-toastify/dist/ReactToastify.css';
import b3 from "./b3.jpg"
import { toast, ToastContainer } from 'react-toastify';
import Alert from 'react-bootstrap/Alert';
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { useLocation } from 'react-router-dom';

import me from "./me.jpeg";
import "./profile.css"
import Navbar from '../../components/navbar/Navbar';
import AlertDismissible from "../../components/toast.jsx";
import Toast2 from '../../components/toast.jsx';
// import Feedback from '../feedback';

import CToast from '@coreui/react-pro/src/components/toast/CToast'
import { CToastBody } from '@coreui/react'
import { CToastHeader } from '@coreui/react'
import { CToastClose } from '@coreui/react'






export default function Profile() {
//   const { params } = this.props.match;

// console.log("eded"+ params.id);


const location = useLocation();
const emailparam=location.state;
  const [backend, setUsers] = useState([{}]);
  const data = { email: emailparam.email};



  function toast (){

<CToast autohide={false} visible={true}>
  <CToastHeader closeButton>
    <svg
      className="rounded me-2"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
      role="img"
    >
      <rect width="100%" height="100%" fill="#007aff"></rect>
    </svg>
    <strong className="me-auto">CoreUI for React.js</strong>
    <small>7 min ago</small>
  </CToastHeader>
  <CToastBody>Hello, world! This is a toast message.</CToastBody>
</CToast>

  }


//name1,email1,Birthday1,Phonenumber1, password1, value1

  function updateuser(e) {
    // e.preventDefault();
// name: getname,email: getemail, birthday: getdate,Phonenumber:getdate, password: getpass 


    const data = { name: getname,email: getemail, Birthday: getdate,Phonenumber:getnum, password: getpass};
  
      fetch('/users/updateuser', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
         
          <Toast2/>
        })
        .catch((error) => {
          console.error('Error:', error);
        });

        // const rootElement = document.getElementById("root");
        // ReactDOM.render(
        //   <StrictMode>
        // <AlertDismissible />
        //    </StrictMode>,
        //   rootElement
        // );
       

        
  };






  const  getUser=()=>{
    
    fetch('/users/profile', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);

        
       setemail( data[0].Email);
       setname( data[0].Name);
       setpass( data[0].Password);
       setnum( data[0].Number);
       setdate( data[0].Birthday);
        // console.log( data[0].Birthday);
        // console.log( data[0].Number);
        // console.log( data[0].Name);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const [getname, setname] = useState("***********");
   const [getnum, setnum] = useState("***********");
   const [getemail, setemail] = useState("***********");
   const [getdate, setdate] = useState( "***********");
   const [getpass, setpass] = useState("***********");

  // function updatenum(event) {
  //   setnum(event.target.value);
  // }
  function updateemail(event) {
    setemail(event.target.value);
    
  }
  function updatepass(event) {
    setpass(event.target.value);
    
  }

  function updatedate(event) {
    setdate(event.target.value);
  }
  function updatename(event) {
    setname(event.target.value);
    
  }

  function updatenum(event) {
    setnum(event.target.value);
  }

  
  

  return (
    <div  >
    <Navbar/>
    {/* <Header/> */}
    


<div className="outer"style={{ backgroundImage: `url(${b3})` }}>
{/* style={{ backgroundImage: `url(${backpic})` }} */}
{/* , backgroundImage: `url(${blue})` */}
<div className='card'>
<div className='backbox'>
<h6>{getemail} </h6>
      <img  className='logo'  width="200" height="200"   src={me} />
      </div>
      <Card.Body >
      <h6 >NAME </h6> 
        <span className="giga">
 <input  className="te1"  onChange={updatename} value=  {getname} ></input>
 <button class="button-26"   role="button" onClick={updateuser}>  <FontAwesomeIcon icon={faEdit} />
 
            <span>Edit</span></button>
</span>
        <Card.Text>
        
        <p> </p><p> </p>
        <p> </p>
        <p> </p>
        
        {/* <h6>Email </h6> 
        <span className="giga">
 <input  className="te1"  onChange={updateemail} value={getemail} ></input>
 <button class="button-26"  onClick={updateuser}  role="button">  <FontAwesomeIcon icon={faEdit} />
 
            <span>Edit</span></button>
</span> */}
          
          <h6>Number </h6> 
          <span className="giga">
<input  className="te1" onChange={updatenum} value={getnum}  ></input>
<button class="button-26" onClick={updateuser} role="button"> <FontAwesomeIcon icon={faEdit} />
            <span>Edit</span></button>
</span>



<h6>Date </h6> 
          <span className="giga">            
<input  className="te1" onChange={updatedate} value={getdate}  ></input>
<button class="button-26" onClick={updateuser} role="button"> <FontAwesomeIcon icon={faEdit} />
            <span>Edit</span></button>
</span>


<h6>Password </h6> 
<span className="giga">
<input   onChange={updatepass} value={getpass}  ></input>
<button class="button-26"  onClick={updateuser} role="button">  <FontAwesomeIcon icon={faEdit} />
            <span>Edit</span></button>
            
</span>

<p> </p>
<p> </p>
<span className='fetchbut'>
<button class="btn-group btn-group-lg btn btn-info"  onClick={getUser}  role="button">  <FontAwesomeIcon icon={faUnlock} /></button>
</span>
        </Card.Text>
     
        
      </Card.Body>
    </div>
  
    


</div>

 </div>
 
     
   
  );
}