import React, { useState } from 'react'
import axios from 'axios' 
import { useNavigate } from "react-router-dom";


function Login() {  
  
  const API = "http://172.20.172.21:8800/api/v1/auth"
  const [username, setUsername] = useState("")
  const[password, setPassword] = useState("")
    const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault()

  axios.post(API + '/login', { phone: username, password })
    .then(res => {
      console.log(res)
      if (res.data.access_token) {
        navigate("/admin")
      } else {
        alert('Login xato')
      }
    })
    .catch(err => {
      console.log(err)
      alert("login yoki")
    })
}


  return (
    <div className='bg-gradient-to-tr from-cyan-50 via-sky-100 to-blue-100 h-[100vh]'>
      <div className='max-w-7xl mx-auto flex justify-center py-30'>
        <div className='w-90 h-90 px-3 py-3 rounded-xl shadow-xl/30 bg-white'>
          <p className='text-3xl font-bold text-center py-2'>ADMINGA KIRISH</p>
          <form onSubmit={handleSubmit}> 
            <div className='my-3'>
              <fieldset className='border px-3 pb-2'>
                <legend className='font-bold'>LOGIN</legend>
                <label>Login enter:</label>
                <input 
                  onChange={(e) => setUsername(e.target.value)} 
                  value={username}
                  className='border py-1 px-2 mx-1 rounded-sm' 
                  type="text" 
                  placeholder='Login enter'
                />
              </fieldset>
            </div>
            <div>
              <fieldset className='border px-3 pb-2 my-10'>
                <legend className='font-bold'>PASSWORD</legend>
                <label>Password enter:</label>
                <input 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password}
                  className='border py-1 rounded-sm mx-1 pl-2' 
                  type="password" 
                  placeholder='••••••••'
                />
              </fieldset>
            </div>
            <div className='flex justify-center border mx-12 py-2 rounded-xl hover:bg-blue-500 hover:text-white'>
              <button type="submit">ACCESS</button> 
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login