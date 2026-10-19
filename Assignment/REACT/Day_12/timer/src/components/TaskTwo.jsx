import { useEffect, useState } from "react"
let timer;
const TaskTwo = () => {
const[message,setMessage]=useState("Please wait")


    
  const startTimer = ()=>{    
    timer=  setTimeout(()=>{
          setMessage("Welcome to React!")
          
      },3000)
    }
    useEffect(()=>{
      startTimer();
   
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const handleStart=()=>{
    clearTimeout(timer);
    setMessage("Please wait");
    startTimer();
  }
  return (
   <>

  <div className="flex flex-col justify-center items-center bg-blue-300 p-3 gap-y-4" >
     <h1>{message}</h1>
   <button className=" bg-black text-amber-50 p-2 rounded" onClick={handleStart}>Restart</button>
   
  </div>
  </>
  )
}

export default TaskTwo
