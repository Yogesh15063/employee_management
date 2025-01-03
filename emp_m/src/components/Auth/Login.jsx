import React, { useState } from "react";

const Login = ({handleLogin}) => {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
 const submitHandler=(e)=>{
  e.preventDefault();
  handleLogin(email,password)
  setEmail('');
  setPassword('');

 }


  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2  p-20 rounded-md">
        <form onSubmit={(e)=>{
           submitHandler(e)
        }} className="flex flex-col justify-center items-center">
        <input 
        required
          value={email}
          onChange={(e)=>{
             setEmail(e.target.value)
          }}
          className="mb-4 bg-transparent border-2 border-white p-2 rounded-md"
          type="email"
          placeholder="Enter email"
        />
        <input 
        required
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          className="rounded-md border-2 border-white bg-transparent p-2"
          type="password"
          placeholder="Enter password"
        />
        <button className="mt-8 border-2 border-white rounded-md p-2">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
