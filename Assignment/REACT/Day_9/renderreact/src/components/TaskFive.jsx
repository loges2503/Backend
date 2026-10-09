import { useState } from "react"

const TaskFive = () => {
const password ="react1234"
const[showPassword,setShowPassword]=useState(false);
const pass=()=>{
setShowPassword((p)=>!p)
}
  return (
    <div  className="bg-blue-300 flex gap-10 p-10">
      <h1>Task Five</h1>
        <h2>{showPassword ? password:"*****"}</h2>
      <button onClick={pass}className=" bg-emerald-700 text-white p-2 rounded ">{showPassword ? "Hide Password" : "Show Password"}</button>
    </div>
  )
}
export default TaskFive
