import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
const App=()=> {

  return (
    <main className="bg-black">
     <Navbar/>
     <h2 className="sm:text-yellow-500">Hi</h2>
     <Hero/> 
     <Highlights/>

    </main>
  )
}

export default App;
