import React, { useState } from 'react'


const Login = ({handleSubmitForm}) => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleForm = (e)=>{
  e.preventDefault() 
  handleSubmitForm(email,password)
}

  return (
<>
<div className="main w-full min-h-screen flex justify-center items-center bg-[#1F2937]"> 
        <div className="bg-gray-800 rounded-lg  w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center text-white p-2">Login</h2>
        <form onSubmit={(e)=> {handleForm(e)}}>
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-400 mb-1">Username</label>
                <input type="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  id="username" className="border border-gray-600 rounded-lg w-full p-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your username" required/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-400 mb-1">Password</label>
                <input type="password"
                   value={password}
                   onChange={(e)=> setPassword(e.target.value)}
                   id="password" className="border border-gray-600 rounded-lg w-full p-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" required/>
            </div>
            <button type="submit" className="bg-blue-600 text-white font-bold py-2 rounded-lg w-full hover:bg-blue-700 transition duration-200">Login</button>
        </form>
        <div className=" pt-3 text-center">
            <a href="" className="text-blue-400 text-sm hover:underline">Forgot Password?</a>
        </div>
    </div>
</div>    


</>
  )
}

export default Login;
