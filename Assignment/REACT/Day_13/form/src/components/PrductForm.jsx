import { useState } from "react"

const PrductForm = () => {
    const [product,setProduct]=useState({productname:"",productprice:"",productquantity:""})
    const[data,setData]=useState([])
    const [edit,setEdit]=useState(null)

const handleChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
}
const handleAdd=()=>{
    if(edit === null){
        setData([...data,product])
    }else{
        setData(data.map((e,i)=>i == edit ? product : e))
        setEdit(null)
    }
    setProduct({productname:"",productprice:"",productquantity:""})
    
    

}
const handleEdit=(pname,pindex)=>{
    setProduct(pname)
    setEdit(pindex)
}

  return (
   <>
   <div className="flex flex-col border-2 bg-gray-200 h-100 gap-7 justify-center items-center p-6">
    <h1>Product select  Form</h1>
  <input className="border" type="text" name="productname" value={product.productname} placeholder="enter product name" onChange={handleChange}/>
    <input className="border" type="text" name="productprice" value={product.productprice} placeholder="enter product price" onChange={handleChange}/>
    <input className="border" type="number" name="productquantity" value={product.productquantity} placeholder="enter quantity" onChange={handleChange}/>
   <button className="bg-black text-white w-15 p-1 rounded" onClick={handleAdd}>{edit === null ? "Save":"Update"}</button>
   {data.map((e,i)=>(
    <div key={i}>
        <h1>Name: {e.productname}</h1>
        <h1>Price : {e.productprice}</h1>
        <h1>Quantity: {e.productquantity}</h1>
        <button className="bg-black text-white w-15 p-1 rounded" onClick={()=>handleEdit(e,i)}>Edit </button>
    </div>
   ))}
   </div>


   </>
  )
}

export default PrductForm
