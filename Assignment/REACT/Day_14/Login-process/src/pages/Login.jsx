import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  const[logindata,setLoginData]=useState({useremail:"",userpassword:""})
  const handleChange=(e)=>{
    setLoginData({...logindata,[e.target.name]:e.target.value})

  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const getDatas = JSON.parse(localStorage.getItem("logindata"))||[]
    const obj = {id:Date.now(),email:logindata.useremail,password:logindata.userpassword}
    getDatas.push(obj)

    const change= JSON.stringify(getDatas)
    localStorage.setItem("logindatas",change)
    setLoginData({useremail:"",userpassword:""})
    navigate("/home")
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-100 justify-center items-center gap-6 my-20'>
      <input className='border p-1 rounded ' type="email" name="useremail" value={logindata.useremail} placeholder="enter your email" onChange={handleChange} />
      <input className='border p-1 rounded ' type="password" name="userpassword" value={logindata.userpassword} placeholder="enter your password" onChange={handleChange} />
      <input className='border p-1 rounded  w-20 bg-black text-white' type="submit"  value="Login"  />


    </form>
  )
}

export default Login
