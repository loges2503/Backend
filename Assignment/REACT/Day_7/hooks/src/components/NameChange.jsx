import { useState } from "react";

const NameChange=()=>{
    const [name,setName]=useState("Arun");
    const handleClick=()=>{
       setName("Kumar")
    }
    return(
        <>
        <div className="flex justify-center items-center gap-10 my-5">
            <h2>{name}</h2>
        <button onClick={handleClick} className="bg-black p-2 rounded text-white flex justify-center items-center">Change Name</button>



        </div>
        
        
        </>
    )
}
export default NameChange;