import { useState } from "react"

const TaskFour = () => {
const[data,setData]=useState([ { id: 1, name: "Arun", salary: 25000 },
  { id: 2, name: "Priya", salary: 30000 },
  { id: 3, name: "Kumar", salary: 28000 }])
const update=()=>{
setData((p)=>(
    p.map((e)=>e.id === 2 ? {...e,salary:35000}: e )

))
}
const add=()=>{
    setData((p)=>(
        [...p,{  id: 4,
  name: "Bala",
  salary: 32000}]

    ))
}
  return (
    <div className="bg-amber-100 flex gap-10 p-10">
      <h1>Task Four</h1>
      {data.map((e)=>(
        <div key={data.id}>
                <h1>{e.name}</h1>
                <h1>{e.salary}</h1>
        
                
        </div>
      ))}

      <button onClick={update}className=" bg-emerald-700 text-white p-2 rounded ">Update</button>
      <button onClick={add}className=" bg-emerald-700 text-white p-2 rounded ">Add</button>
    </div>
  )
}

export default TaskFour
