
const TaskThree = () => {
  const handleSave=()=>{
     const user = {
      name: "Loges",
      age: 21,
      email: "iamloges21@gmail.com",
    };
    localStorage.setItem("userdata",JSON.stringify(user))
  }
  
    return (
    <div className="flex flex-col justify-center items-center bg-blue-800 p-3 gap-y-4">
      <button className="bg-black text-amber-50 p-2 rounded" onClick={handleSave}>save</button>
    </div>
  )
}

export default TaskThree
