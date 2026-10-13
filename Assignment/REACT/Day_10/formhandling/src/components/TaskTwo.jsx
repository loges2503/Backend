import { useState } from "react"

const TaskTwo = () => {
const[course,setCourse]=useState("")
const[arrcourse,setArrCourse]=useState([])
const handleChange=(e)=>{
    setCourse(e.target.value)
    

}
const handleClick=()=>{
    setArrCourse([...arrcourse, course]);
    setCourse("")
}
const handleDelete=(index)=>{

setArrCourse(arrcourse.filter((e,i)=>i !== index))
}

  return (
    <>
    <div className="bg-gray-300 p-5 flex gap-10 ">
    <div ><h1>Task Two</h1></div>
    <input className="border" type="text"  value={course} onChange={handleChange} />
    <button onClick={handleClick} className="bg-blue-950 text-white p-2 rounded ">Add </button>
   {arrcourse.map((e,i)=>(
    <div key={i}> <h1>{e}</h1>
    <button onClick={()=>handleDelete(i)} className="bg-blue-950 text-white p-2 rounded "> Delete</button>
    </div>
    
   ))
   }
   </div>
    </>
  )
}

export default TaskTwo
