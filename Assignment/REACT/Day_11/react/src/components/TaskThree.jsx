import { useState } from "react";

const TaskThree = () => {
  const [user, setUser] = useState({
  name: "Rahul",
  age: 22,
  city: "Chennai"
});
const handleClick=()=>{
  setUser({...user,name:"Arjun"})
}
const handleCount=()=>{
  setUser({...user,age:user.age + 1 })
}
const handleCity=()=>{
setUser({...user,city:"Banglore"})
}
  return (
    <div className=" bg-amber-100 flex flex-col  justify-center items-center my-5 gap-y-4 p-3">
      <strong>Task Three</strong>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.city}</h1>
      <button className="bg-blue-500 p-2 border rounded" onClick={handleClick}>Change Name</button>
      <button className="bg-blue-500 p-2 border rounded" onClick={handleCount}>Increase Count</button>
      <button className="bg-blue-500 p-2 border rounded" onClick={handleCity}>Change City</button>

    </div>
  )
}

export default TaskThree
