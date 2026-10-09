import { useState } from "react";

const TaskThree = () => {
  const [price, setPrice] = useState({
    name: "Laptop",
    price: 45000,
    stock: 10,
  });
const copy={...price}
  const update = () => {
    setPrice((p) => ({
      ...p,
      price: 50000,
    }));
  };
  const add=()=>{
    setPrice({...price,brand:"Dell"})
  }
  return (
    <div className="bg-pink-200 flex gap-10 p-10">
      <h1>Task Three</h1>
        <h1>Product Details</h1>
      <h1>Name - {price.name}</h1>
      <h1>Price -  {price.price}</h1>
      <h1>Stocks - {price.stock}</h1>
      <h1>Brand-{price.brand}</h1>
      <button onClick={update} className=" bg-emerald-700 text-white p-2 rounded ">Update Price</button>
      <button onClick={add}className=" bg-emerald-700 text-white p-2 rounded ">Add</button>
    </div>
  );
};

export default TaskThree;
