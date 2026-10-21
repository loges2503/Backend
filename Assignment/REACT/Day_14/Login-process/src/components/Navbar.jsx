import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <div className="bg-amber-400 flex justify-between gap-6 p-2 ">
        <div className="mx-3">
            Logo
        </div>
        <div className="mx-3 flex gap-15">
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/">Register</Link>
        </div>
    </div>
    
    
    </>
  )
}

export default Navbar
