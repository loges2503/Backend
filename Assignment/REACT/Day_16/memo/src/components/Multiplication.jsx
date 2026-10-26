import { useMemo, useState } from "react"


const Multiplication = () => {
    const [number,setNumber]=useState(0)
    const[theme,setTheme]=useState(true)
    
    
    const handletheme=()=>{
        console.log("theme ");
        
        setTheme((p)=> !p)
    }
    const calculateDouble=(n)=>{
    for(let i = 0;i<1;i++){
        console.log("hi",i);    
    }
    return n * 2

}
const double=useMemo(()=>{
    console.log("memo");
    
    calculateDouble(number)
},[number])
 
    
  return (
    <>
    <div>
        <h1>Result : {double}</h1>
        <input type="number" onChange={(e)=>setNumber(e.target.value)} /> <br /> <br />
       <div className={theme ? "Light":"Dark"}>
        <h1>Switch Theme</h1>
         <button className="btn" onClick={handletheme}>{theme ? "Light" : "Dark"}</button>
       </div>
    </div>
    </>
  )
}

export default Multiplication
