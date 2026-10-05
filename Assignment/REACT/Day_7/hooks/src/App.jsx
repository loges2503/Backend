import Counter from "./components/Counter"
import NameChange from "./components/NameChange"

 
 const App = () => {
   return (
     <div>
       <h1 className="bg-amber-900 flex justify-center p-5">Render and Hooks</h1>
       <NameChange/>
       <Counter/>
     </div>
   )
 }
 
 export default App
 