import { useRef } from "react"

const StopWatch = () => {
    const startRef=useRef(0) 
    const counterRef=useRef(null)
    let timerRef=useRef(null)
    const handleStart=()=>{
        if (timerRef.current) return;
         timerRef.current=setInterval(()=>{
            
           counterRef.current.innerText = startRef.current+= 1
        },1000)
    }
    const handleStop=()=>{
        clearInterval(timerRef.current)
         timerRef.current = null;
        
    }

    const handleReset=()=>{
         clearInterval(timerRef.current)
         timerRef.current = null;
        startRef.current=0
        
        counterRef.current.innerText=0
    }
    
  return (
    <>
    <h1 ref={counterRef}>0</h1>
    <button onClick={handleStart}>start</button>
    <button onClick={handleStop}>stop</button>
    <button onClick={handleReset}>Reset</button>
    
    </>
  )
}

export default StopWatch
