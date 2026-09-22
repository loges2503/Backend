import {Component} from "react"

class Navbar extends Component{
    render(){
        return (
            <nav 
             style={{
                backgroundColor:"green",color:"white",
               display:"flex", justifyContent:"space-evenly",alignItems:"center"
            }} >
                <h2>Cool Juice Shop</h2>
                <a href="#home" style={{color:"white" ,textDecoration:"None",}}>Home</a>
                <a href="#about"style={{color:"white" ,textDecoration:"None",}}>About</a>
                <a href="#contact" style={{color:"white" ,textDecoration:"None",}}>Contact</a>

            </nav>
        )

    }
}
export default Navbar 