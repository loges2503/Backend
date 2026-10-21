import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate()
  const[registerdata,setRegisterData]=useState({username:"",useremail:"",userpassword:""})
  const handleChange=(e)=>{
    setRegisterData({...registerdata,[e.target.name]:e.target.value})

  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const getDatas = JSON.parse(localStorage.getItem("registerdata"))||[]
    const obj = {id:Date.now(),name:registerdata.username,email:registerdata.useremail,password:registerdata.userpassword}
    getDatas.push(obj)

    const change= JSON.stringify(getDatas)
    localStorage.setItem("registerdatas",change)
    setRegisterData({username:"",useremail:"",userpassword:""})
    navigate("/login")
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-100 justify-center items-center gap-6 my-20'>
      <input className='border p-1 rounded ' type="text" name="username" value={registerdata.username} placeholder="enter your name" onChange={handleChange} />
      <input className='border p-1 rounded ' type="email" name="useremail" value={registerdata.useremail} placeholder="enter your email" onChange={handleChange} />
      <input className='border p-1 rounded ' type="password" name="userpassword" value={registerdata.userpassword} placeholder="enter your password" onChange={handleChange} />
      <input className='border p-1 rounded  w-20 bg-black text-white' type="submit"  value="Register"  />


    </form>
  )
}

export default Register
