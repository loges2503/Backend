import { useState } from "react"

const TaskTwo = () => {
    const[course,setCourse]=useState(["HTML", "CSS", "JavaScript"])
    const copy=[...course]
    const Add=()=>{
        setCourse((p)=>
           [...p,"React"]
        )
    }
    const update=()=>{
      setCourse(copy.map((e,i)=>(
        [e === "CSS" ? "Advanced Css" : e]

      )))

    }
  return (
    <div className="bg-grey-200 flex gap-10 p-10">
      <h1>Task Two</h1>
      {course.map((e,i)=>(
        <h1 key={i}>{e}</h1>
      ))}
      <button onClick={Add} className=" bg-emerald-700 text-white p-2 rounded ">Add</button>
      <button onClick={update}className=" bg-emerald-700 text-white p-2 rounded ">update</button>
    </div>
  )
}
export default TaskTwo
