import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmpDashboard from './components/Dashboard/EmpDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthPro } from './context/AuthContext'

const App = () => {
 
  const [user,setUser]=useState(null)
  const handleLogin=(email,password)=>{
  if(email=="admin@example.com" && password=="123"){
    setUser("admin")
  }
  }
  const data = useContext(AuthPro)
  console.log(data)
  return (
    <>
    {!user?<Login handleLogin={handleLogin}/>:''}
    {user=='admin'?<AdminDashboard/>:<EmpDashboard/>}
   
    </>
  )
}

export default App
