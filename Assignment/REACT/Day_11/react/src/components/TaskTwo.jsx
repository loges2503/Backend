import { useState } from "react"

const TaskTwo = () => {
  const[isLiked,setLiked]=useState(false)
  const handleClick=()=>{
    setLiked((p)=> !p)
  }
  return (
    <div className=" bg-amber-100 flex flex-col  justify-center items-center p-3 my-5 gap-y-4">
      <h1><strong>Task Two</strong></h1>
      <h1 >My Post</h1>
  <button className="bg-blue-500 p-2 border rounded" onClick={handleClick}>  {isLiked ? "Liked":"Like"}</button>    
    </div>
  )
}

export default TaskTwo
