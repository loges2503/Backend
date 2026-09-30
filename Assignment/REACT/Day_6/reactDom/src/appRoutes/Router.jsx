import Home from "../pages/Home";
import {Routes,Route} from 'react-router-dom';
import About from "../pages/About";
import Contact from "../pages/Contact";
import Help from "../pages/Help";
const Router = () => {
  return (
      <>
      <Routes>
<Route path="/" element ={<Home/>} />
<Route path="/about" element ={<About/>} />
<Route path="/contact" element ={<Contact/>} />
<Route path="/help" element ={<Help/>} />

        
      </Routes>
      </>
  )
}

export default Router
