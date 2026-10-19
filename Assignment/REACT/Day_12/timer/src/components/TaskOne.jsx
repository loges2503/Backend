import { useEffect, useState } from "react"
let timer;
const TaskOne = () => {

const[counter,setCounter]=useState(0)


const handleStart=()=>{
clearInterval(timer)
     timer = setInterval(()=>{
        setCounter((p)=> p + 1)
    },1000)
   
}

const handleStop=()=>{
    
        clearInterval(timer)
    
}
const handleReset =()=>{
     clearInterval(timer)
    setCounter(0)
}

  return (
    <>
    <div className="flex flex-col justify-center items-center bg-blue-700 p-3 gap-y-4">
      <strong>Task One</strong>
    
    <h1>{counter}</h1>
    <button className="bg-black text-amber-50 p-2 rounded" onClick={handleStart}>Start</button>
    <button className="bg-black text-amber-50 p-2 rounded " onClick={handleStop}>Stop</button>
    <button className="bg-black text-amber-50 p-2 rounded " onClick={handleReset}>Reset</button>
    </div>
    </>
  )
}

export default TaskOne
