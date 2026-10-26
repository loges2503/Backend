import { useRef } from "react"

const ShowHide = () => {
    const inputRef=useRef(null)
    const handleShow=()=>{
        inputRef.current.type="text"
        }
    const handleHide=()=>{
        inputRef.current.type="password"
    }
  return (
   <>
   <input type="password" ref={inputRef}/>   
   <button onClick={handleShow}>Show</button>
   <button onClick={handleHide}>Hide</button>
   </>
  )
}

export default ShowHide
