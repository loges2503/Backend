import { useState } from "react"

const Array = () => {
    const [arr,setArray] =useState(["HTML", "CSS", "JavaScript"]);
    const handleClick=()=>{
        setArray([...arr,"React"])
       
    }

  return (
    <div className=" bg-amber-400 flex justify-center items-center h-100 gap-10">
        
       { arr.map((e,i)=>{
        i===2 ? "Advance JS": e
       return <p key={i}>{i === 2 ? "Advanced JS": e} </p>
            

        })}

        <button className="bg-blue-950 p-1 text-white rounded " onClick={handleClick}>Add React</button>
      
    </div>
  )
}

export default Array 
