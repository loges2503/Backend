import { useMemo, useState } from "react"

const ProductSearch = () => {

  
  const[product,setProduct]=useState("")
  const[increment,setIncrement]=useState(0)
  const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mobile", price: 25000 },
  { id: 3, name: "Headphone", price: 2000 },
  { id: 4, name: "Keyboard", price: 1500 },
  { id: 5, name: "Mouse", price: 800 }
]
let datas=[...products]
const filterProducts=()=>{
    if(products){
      datas =datas.filter((e)=>e.name.toLowerCase().includes(product.toLowerCase()))
    }
  }
const handleClick=()=>{
  setIncrement((p)=>p +1)
}
  const value=useMemo(()=>{
    return filterProducts(products)
  },[product])
  return (
    <>
    <div>
      <h1 className="heading">Product Search</h1>
    <h1>filtered Products: {value}</h1>
      <input type="text" onChange={(e)=>setProduct(e.target.value)} />
      <h1> Result: {increment}</h1>
      <button onClick={handleClick}>Increment</button> 
      
      {products.map((e,i)=>(
        <div key={e.id}>
          <h1>{e.id}</h1>
          <h1>{e.name}</h1>
          <h1>{e.price}</h1>

        </div>
      ))}


    </div>
    </>
  )
}

export default ProductSearch
