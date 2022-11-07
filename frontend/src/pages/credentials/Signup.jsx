import { useEffect,useState } from "react";
import React from 'react';
import FormInput from "../../components/textbox/FormInput";
import Navbar from "../../components/navbar/Navbar";
import "./signup.css";
import { useNavigate } from "react-router-dom";
let permission=false;


function Signuprequest(name1,email1,Birthday1,Phonenumber1, password1) {
 
  const data = { name: name1,email: email1, birthday: Birthday1,Phonenumber:Phonenumber1, password: password1 };

  fetch('/users/signup', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
     if(data.value =='1')
     permission=true;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
};




const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    birthday: "",
    password: "",
    Phonenumber:"",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      formatdate:"mm-dd-yyyy",
      placeholder: "birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "Phonenumber",
      type: "number",
      placeholder: "phone number",
      label: "Phonenumber",
      pattern :"[0-9]{3}-[0-9]{2}-[0-9]{3}",
      errorMessage:
        "Incorret phonenumber",                 
      required:true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    Signuprequest(values.name,values.email,values.birthday,values.Phonenumber, values.password);
    
    // if(permission){
    //   navigate("/signin");}


  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
    <Navbar/>
    <div className="signup">
      <form className="form1" onSubmit={handleSubmit}>
        <h1 className="h1alpha">Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="buttonsign">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;