import { useState } from "react"

const TaskThree = () => {
const[num,setNum]=useState("")
const[arrnum,setArrNum] = useState([])
const handleChange=(e)=>{
    setNum(e.target.value)

}
const handleAdd=()=>{ 
  
  setArrNum([...arrnum, Number(num)])  
 
  setNum("")
}
  return (
   <>
   <div className="bg-blue-400 p-5 flex gap-10 ">
   <div ><h1>Task Three</h1></div>
   <input className="border" type="text" value={num} onChange={handleChange}/>
   <button onClick={handleAdd} className="bg-blue-950 text-white p-2 rounded">Add</button>
    {arrnum.map((e,i)=>(
        <div><h1 key={i}>{e} {e% 2 === 0 ? "even number" : "odd number"}</h1></div>
    ))}
</div>
   </>
  )
}
export default TaskThree
