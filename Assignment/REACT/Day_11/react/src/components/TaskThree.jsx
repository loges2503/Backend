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
    <div>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.city}</h1>
      <button onClick={handleClick}>Change Name</button>
      <button onClick={handleCount}>Increase Count</button>
      <button onClick={handleCity}>Change City</button>

    </div>
  )
}

export default TaskThree
