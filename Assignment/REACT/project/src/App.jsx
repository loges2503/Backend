import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import About from "./components/About";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="content">
       <Navbar />
      <Banner/>
       <About/>

      <Content/>
     
    </div>
          <Footer/>

    </div>
  )
}

export default App
