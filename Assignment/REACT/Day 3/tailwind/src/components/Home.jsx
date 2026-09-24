import homeblue from '../assets/home-blue_480.png'
import ProductCard from './ProductCard'

const Home = () => {
  return (
    <div>
      <h1 className=" text-6xl flex justify-around p-10"><strong>Building a better web, <br /> together</strong></h1>
      <p className='p-6'>We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users. This site is our home for content to help you on that journey,
         written by members of the Chrome team, and external experts who specialize in web development topics such as accessibility, performance, design, and more.</p>
      
      <div className='flex justify-center'> 
      <img  className=" p-4" src={homeblue} alt="image" />
    </div>
    <div className='flex gap-6 justify-center p-20'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
    
    
    </div>

    
  )
}

export default Home 
