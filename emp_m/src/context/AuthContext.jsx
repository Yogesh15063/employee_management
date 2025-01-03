import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../utils/LocalStorage'

export const AuthPro = createContext()
const AuthContext = ({children}) => {

  const [userData, setuserData] = useState(null)
  useEffect(() => {
   
    const {employees,admin} = getData();
    setuserData({employees,admin});
  
  
  }, [])
 
  
  return (
    <AuthPro.Provider value={userData}>{children}</AuthPro.Provider>
  )
}

export default AuthContext
