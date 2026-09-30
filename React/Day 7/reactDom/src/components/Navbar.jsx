import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <div className="bg-amber-800  p-5  flex justify-between">
      
      <Link to ={'/'}>Home</Link>
      <Link to ={'/about'}>About</Link>
      <Link to ={'/contact'}>Contact</Link> 
      <Link to ={'/help'}>Help</Link>

      

    </div>
    
    </>
  )
}

export default Navbar
