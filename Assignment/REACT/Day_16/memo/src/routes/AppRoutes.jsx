import Multiplication from "../components/Multiplication"
import ProductSearch from "../components/ProductSearch"
import ShoppingCart from "../components/ShoppingCart"
import { Routes, Route } from "react-router-dom";
const AppRoutes = () => {
    
  return (
    <>
    <Routes>
      <Route path="/easy" element={<Multiplication/>}/>
      <Route path="/medium" element={<ProductSearch/>}/>
      <Route path="/hard" element={<ShoppingCart/>}/>

    </Routes>
    
    </>
  )
}

export default AppRoutes
