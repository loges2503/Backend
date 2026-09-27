const ArrayOfObjects=()=>{

    const students = [

    { id: 1, name: "Arun", course: "React" },

    { id: 2, name: "Priya", course: "Node" },

    { id: 3, name: "Kumar", course: "MongoDB" }

]
    return(
        <>


        {students.map((student)=>(
<h1 key={student.id}>{student.name}  - {student.course}</h1>
             
        ))}
        
        
        
        </>
    )
}
export default ArrayOfObjects