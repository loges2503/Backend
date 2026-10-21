import { Route, Routes } from "react-router-dom"
import Layout from "../layout/Layout"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route element={<Layout/>}>
        
        <Route path="/home" element={<Home/>}  />
         </Route>

         <Route path="/login"  element={<Login/>} />
         <Route path="/" element={<Register/>} />
    </Routes>
    
    
    </>
  )
}

export default AppRoutes
