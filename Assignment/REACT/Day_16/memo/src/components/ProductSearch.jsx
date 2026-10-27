import { useMemo, useState } from "react"

const ProductSearch = () => {

  
  const[search,setSearch]=useState("")
  const[increment,setIncrement]=useState(0)
  const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mobile", price: 25000 },
  { id: 3, name: "Headphone", price: 2000 },
  { id: 4, name: "Keyboard", price: 1500 },
  { id: 5, name: "Mouse", price: 800 }
]
let datas=[...products]
const filterProducts=(products,search)=>{
  console.log('filter');
  
    return datas.filter((e)=>e.name.toLowerCase().includes(search.toLowerCase()))
    
  }
const handleClick=()=>{
  console.log('counter');
  
  setIncrement((p)=>p +1)
}
  const value=useMemo(()=>{
    return filterProducts(products,search)
  },[search])
  return (
    <>
    <div>
      <h1 className="heading">Product Search</h1>
     <h1> Result: {increment}</h1>
      <button onClick={handleClick}>Increment</button>  <br /><br />
     search products : <input type="text" onChange={(e)=>setSearch(e.target.value)} />
      
      
      {value.map((e,i)=>(
        <div key={e.id}>
          <h1>S.no: {e.id}</h1>
          <h1> Name : {e.name}</h1>
          <h1>Price: {e.price}</h1>

        </div>
      ))}


    </div>
    </>
  )
}

export default ProductSearch
