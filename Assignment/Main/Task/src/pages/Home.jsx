import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
     <div className="home">
      <h1>My Practice Hub</h1>

      <div className="card-container">
        
        
         <Link to="/react">
         <div className="card">
          <h2>React</h2>
        </div></Link>
        
           <Link to="/project">
           <div className="card">
            <h2>Projects</h2>
             </div>
            </Link>
      </div>
    </div>
    
    
    </>
  )
};

export default Home;