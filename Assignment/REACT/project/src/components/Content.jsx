import {Component} from "react";
import Orange from "../assets/Orange.png";
import Pineapple from "../assets/Pineapple.png";
import Mango from "../assets/Mango.png";



class Content extends Component{
    render(){
        return (
            <div className = "juice">
            <div className="juice1">
            <img  src={Orange} alt="Orange Juice" style={{ width: "200px",
    height: "200px", padding:"20px" }} />
    </div>
    <div className="juice2">
            <img  src={Pineapple} alt="Pineapple Juice"style={{ width: "200px",
    height: "200px", padding:"20px"}} /> 
        </div>
    <div className="juice3">
            <img  src={Mango} alt="Mango Juice" style={{ width: "200px",
    height: "200px", padding:"20px"}} /> </div>
            </div>
        )

        
    }
}
export default Content ;
