import { useState } from "react";

const TaskFour = () => {
  const [products, setProducts] = useState([
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Phone", price: 20000, inStock: false },
  { id: 3, name: "Tablet", price: 15000, inStock: true }
]);
const handleUpdate=(id)=>{
setProducts(products.map(product =>
  product.id === id
    ? { ...product, inStock: !product.inStock }
    : product
));
}

  return (
    <div className=" bg-amber-100 flex flex-col  justify-center items-center my-5 gap-y-4 p-3">
      <strong>Task Four</strong>
      {products.map((e,i)=>(
        <div key={e.id}>
           <h1>{e.name}</h1>
        <h1>{e.price}</h1>
        <h1>{e.inStock ? "In Stock " :"Out of Stock" }</h1>
        <button className="bg-blue-500 p-2 border rounded" onClick={()=>handleUpdate(e.id)}>Toggle Stock</button>
        </div>
       
      ))}
    </div>
  )
}

export default TaskFour
