import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='bg-amber-300 flex justify-between  p-2  '>
      <div>
            Forms
      </div>
      <div>
        
            <Link to="/employeeForm">Employee Form</Link>
            <Link to="/productForm">Product Form</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar
