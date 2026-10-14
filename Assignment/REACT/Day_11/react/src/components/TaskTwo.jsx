import { useState } from "react"

const TaskTwo = () => {
  const[isLiked,setLiked]=useState(false)
  const handleClick=()=>{
    setLiked((p)=> !p)
  }
  return (
    <div>
      <h1>My Post</h1>
  <button onClick={handleClick}>  {isLiked ? "Liked":"Like"}</button>    
    </div>
  )
}

export default TaskTwo
