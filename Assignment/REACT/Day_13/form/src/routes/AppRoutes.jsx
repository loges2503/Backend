import { Route, Routes } from "react-router-dom"
import EmployeeForm from "../components/EmployeeForm"
import PrductForm from "../components/PrductForm"
import Navbar from "../pages/Navbar"

const AppRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/employeeform" element={<EmployeeForm/>} />
        <Route path="/productform" element={<PrductForm/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes
