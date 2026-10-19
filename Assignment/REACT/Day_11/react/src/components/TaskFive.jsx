import { useState } from "react";

const TaskFive = () => {
  const [students, setStudents] = useState([
  { id: 1, name: "Ravi", marks: 75, isPassed: true },
  { id: 2, name: "Priya", marks: 35, isPassed: false },
  { id: 3, name: "Kumar", marks: 90, isPassed: true }
]);
const handleClick=(id)=>{
  setStudents(
     students.map((student) =>
        student.id === id
          ? {
              ...student,
              marks: student.marks + 5,
             
            }
          : student
  ))
}
const handleDelete=(id)=>{
  setStudents(
    students.filter((student)=>student.id != id)
  )
}
  return (
    <>
    <div className=" bg-amber-100 flex flex-col  justify-center items-center my-5 gap-y-4 p-3">
      {students.map((e)=>(
        <div key={e.id}>
              <h1>Name:{e.name}</h1>
              <h1>Marks:{e.marks}</h1>
              <h1>Status:{e.isPassed ? "Pass" :"Fail"}</h1>
              <button className="bg-blue-500 p-2 border rounded" onClick={()=>handleClick(e.id)}>Increase Marks by five</button>
              <button className="bg-blue-500 p-2 border rounded" onClick={()=>handleDelete(e.id)}> Delete</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default TaskFive
