import React, { createContext, useEffect, useState } from 'react'
import { Getlocalstorage, Setlocalstorage } from '../Utils/localStorage'
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState({ employeesData: [], AdminData: [] });
   Setlocalstorage()
   useEffect(()=>{
    const {employeesData , AdminData} = Getlocalstorage()
    setUserData({employeesData , AdminData})
   },[])


  return (

        <AuthContext.Provider value={{userData , setUserData}}>
          {children}
        </AuthContext.Provider>
  
  )
}

export default AuthProvider;
