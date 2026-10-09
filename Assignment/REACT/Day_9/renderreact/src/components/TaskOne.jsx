import { useState } from "react"

const TaskOne = () => {
    const[name,setName]=useState("Arun")
    const[salary,setSalary]=useState(25000)
    const increase=()=>{
        setSalary((p)=> p + 5000)
    }
    
  return (
    <div className="bg-amber-200 flex gap-10 p-10">
      <h1>Task One</h1>
      <h1>{name}</h1>
      <h1>{salary}</h1>
        <button onClick={increase}
         className=" bg-emerald-700 text-white p-2 rounded " >Increase Salary</button>
    </div>
  )
}

export default TaskOne
