import { useState } from "react"

const TaskOne = () => {
const[student,setStudent]=useState("")
const[name,setName]=useState([])

const handleChange=(e)=>{
 const value=e.target.value
    setStudent(value)
    
}
const handleClick=()=>{
        if(student===""){
    alert("Please Enter any values")
    return;
}
  setName([...name,student])
  setStudent("")

}
  return (
    <>
    <div className="bg-blue-400 p-5 flex gap-10 ">
      <h1>Task One</h1>
      
      <input className="border" type="text" val={student} onChange={handleChange} />
      <button onClick={handleClick} className="bg-blue-950 text-white p-2 rounded">Add</button>
    </div>

    {name.map((e,i)=>(
        <h2 key={i}>{i + 1 } {e}</h2>
    ))}
    
    </>
  )
}

export default TaskOne
