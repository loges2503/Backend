const ArrayRenderingMap=()=>{

    const skills =["HTML", "CSS", "JavaScript", "React", "Node"];

return(
    <>
    <ul>
    {skills.map((skill,index)=>(
<li key={index}>{skill}</li>    ))}
    </ul>
    
    </>
)
}
export default ArrayRenderingMap;