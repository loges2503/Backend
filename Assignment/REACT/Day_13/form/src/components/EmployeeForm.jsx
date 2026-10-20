import { useState } from "react"

const EmployeeForm = () => {
const[data,setData]=useState({username:"",userdept:"",userSalary:""})
const[store,setStore]=useState([])
const[edit,setEdit]=useState(null)
const handleChange=(e)=>{
setData({...data,[e.target.name]:e.target.value})
}
const handleAdd=()=>{
    if(edit === null){
        setStore([...store,data])
    }else{
        setStore(store.map((e,i)=> i === edit ? data : e))
    }
    setData({username:"",userdept:"",userSalary:""})
}
const handleDelete=(index)=>{
    setStore(
        store.filter((e,i)=>i !== index)
     )
}
const handleEdit=(emp,index)=>{
    setData(emp)
    setEdit(index)
}
  return (
    <>
    <div className="flex flex-col border-2 bg-gray-200 gap-7 justify-center items-center h-100 ">
        <h1>Employee Details Form</h1>
        <input className="border" type="text" value={data.username} name="username" placeholder="enter your name" onChange={handleChange} />
        <input className="border" type="text" value={data.userdept} name="userdept" placeholder="enter your department" onChange={handleChange} />
        <input  className="border"type="number" value={data.userSalary} name="userSalary" placeholder="enter your salary" onChange={handleChange} />
        <button className="bg-black text-white w-15 p-1 rounded"  onClick={handleAdd}>Save</button>
        {store.map((e,i)=>(
            <div key ={i}>
                <h1>{e.username}</h1> <h1>{e.userdept}</h1>
                <h1>{e.userSalary}</h1>
                <button className="bg-black text-white w-15 p-1 rounded" onClick={()=>handleEdit(e,i)}>Edit</button>
                <button className="bg-black text-white w-15 p-1 rounded" onClick={()=>handleDelete(i)}>Delete</button>
            </div>
        ))}
    </div>
    </>
  )
}

export default EmployeeForm
