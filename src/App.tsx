import { Route, Routes } from "react-router"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Footer from "./components/footer/Footer"



function App() {


  return (
    <>

    <Navbar/>
    
      
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/about" element={ <About/> }/>
    </Routes>

    <Footer/>

    </>
  )
}

export default App
