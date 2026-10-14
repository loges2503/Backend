import { useState } from "react"

const TaskOne = () => {
  const[isOn,setIsOn]=useState(false)
  const handleToggle=()=>{
    setIsOn((p)=> !p )
  }

  return (
    <div>
      <h1>status:{isOn ? "On" : "Off"}</h1>
      <button onClick={handleToggle}>{isOn ? " Turn Off":"Turn On" }</button>
    </div>
  )
}

export default TaskOne
