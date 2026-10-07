import { useState } from "react"

const Object = () => {
const[obj,setObj] = useState({name:"Arun",age:22,course:"React" })
const updateClick=()=>{
    setObj({...obj,course:"MERN"})
}
const changeCity=()=>{
    setObj({...obj,city:"Chennai"})
}

  return (
    <div className=" bg-amber-600 flex justify-center items-center h-100 gap-10">
     <h2>Name:{obj.name}</h2>
     <h2>Age:{obj.age}</h2>
     <h2>Course:{obj.course}</h2>
     <h2>City:{obj.city}</h2>
     <button className="bg-blue-950 p-2 text-white rounded "onClick={updateClick} > Update Course </button>
     <button className="bg-blue-950 p-2 text-white rounded " onClick={changeCity}>Add City</button>
    </div>
  )
}

export default Object
