import { useState } from "react"

const TaskOne = () => {
  const[isOn,setIsOn]=useState(false)
  const handleToggle=()=>{
    setIsOn((p)=> !p )
  }

  return (
    <div className="  bg-amber-100  flex flex-col  justify-center items-center my-5">
      <h1 className="p-4"> <strong>Task One</strong></h1>
      <h1  className= {isOn ? "text-green-600" : "text-red-600"}>status: {isOn ? " On " : "Off"}</h1>
      <button className=" bg-blue-500 p-2 border rounded " onClick={handleToggle}>{isOn ? " Turn Off":"Turn On" }</button>
    </div>
  )
}

export default TaskOne
