import { useState } from "react"


const Counter = () => {
const[count,setCount]=useState(10)
const decrease=()=>{
if(count>0){
    setCount(count -1)
}
}
const reset =()=>{
    setCount(0)
}
  return (
    <>
    <div className="flex justify-center items-center gap-10 my-5">
        <h1>{count}</h1>
        <h1>{decrease}</h1>
<button onClick={()=>setCount(count + 1) } className="bg-black p-2 rounded text-white flex justify-center items-center">Increase</button>
<button onClick={decrease }className="bg-black p-2 rounded text-white flex justify-center items-center">Decrease</button>
<button onClick={reset} className="bg-black p-2 rounded text-white flex justify-center items-center">Reset</button>


    </div>

    
    </>
  )
}

export default Counter
