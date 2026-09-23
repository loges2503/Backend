import ProductCard from "./ProductCard"

const Home =()=>{
    return(<>
    <div className="Home">
            <h1>Web Design Development </h1>
            <h2>Company and Digital Agency </h2>
            
    </div>
<div className="btn">
                <button className="bg-pink-500 border-2 rounded-2xl p-2 text-amber-50   ">Lets Talk </button>
                <button className="bg-pink-500 border-2 rounded-2xl p-2 text-amber-50 ">Our Services </button>
            </div> 
            <div className="  flex gap-13 justify-center ">
                <ProductCard/>
                <ProductCard/>

                <ProductCard/>

            </div>
    </>)
}


export default Home


