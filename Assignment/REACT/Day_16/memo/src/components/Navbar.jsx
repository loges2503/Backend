import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <div className="Nav"> 
    <div >
        <h1>Daily Task-Day 16</h1>
    </div>
    <div className="decor">
       <Link to="/easy">Easy</Link>
       <Link to="/medium">Medium</Link>
       <Link to="/hard">Hard</Link>
    </div>

    </div>
    </>
  )
}

export default Navbar
