import { useState } from "react"

const TaskFour = () => {
const[fruit,setFruit]=useState("")
const[arrfruit,setArrFruit]=useState([])
const[edit,setEdit]=useState(null)

const handleChange=(e)=>{
    setFruit(e.target.value)
}
const handleAdd=()=>{
    setArrFruit([...arrfruit,fruit])
    setFruit("")
}
const handleUpdate=(fruit,i)=>{
    setFruit(fruit)
   setEdit(i)
}
const handleSave=()=>{
     setArrFruit(arrfruit.map((e,i)=>i===edit ? fruit : e)
      
    );
     setFruit("") 
     
}
  return (
    <div className="bg-gray-300 p-5 flex gap-10 ">

        <div><h1>Task Four</h1></div>
      <input className="border" type="text" value={fruit}
      onChange={handleChange} />
      <button onClick={handleAdd}className="bg-blue-950 text-white p-2 rounded">Add</button>
      {arrfruit.map((e,i)=>(
        <div>
        <h1 key={i}>{e}</h1>
        <button onClick={()=>handleUpdate(e,i)} className="bg-blue-950 text-white p-2 rounded mx-2">Update</button> 
        <button onClick={handleSave} className="bg-blue-950 text-white p-2 rounded">Save</button>   
    </div>
      ))}
    </div>
  )
}

export default TaskFour
