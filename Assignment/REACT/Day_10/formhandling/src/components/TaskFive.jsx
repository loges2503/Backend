import { useState } from "react"

const TaskFive = () => {
const [name,setName]=useState("")
const[emp,setEmp]=useState([])
const[edit,setEdit]=useState(null)
const handleChange=(e)=>{
    setName(e.target.value)
}

const handleClick=()=>{
    if(edit == null){
        setEmp([...emp,name])
    }else{
      setEmp(  emp.map((e,i)=>i === edit ? name : e))
    };
    setEdit(null)
    setName("")
}
const handleEdit=(names,i)=>{
    setName(names);
    setEdit(i);
    
}
const handleDelete=(index)=>{
    setEmp(emp.filter ((e,i) => i !== index))
}
  return (
   <>
   <div className="bg-blue-400 p-5 flex gap-10 ">
    <h1>Task Five</h1>
   <input className="border" type="text" value={name} onChange={handleChange}/>
    <button className="bg-blue-950 text-white p-2 rounded " onClick={handleClick}>{edit === null ? "Add" : "update"}</button>
    {emp.map((e,i)=>(
        <div>
            <h1 key={i}>{e}</h1>
            <button className="bg-blue-950 text-white p-2 rounded " onClick={()=>handleEdit(e,i)}>Edit</button>
            <button className="bg-blue-950 text-white p-2 rounded " onClick={()=>handleDelete(i)}>Delete</button>
        </div>
    ))}
   </div>
   
   </>
  )
}

export default TaskFive
