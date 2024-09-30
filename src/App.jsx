import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/footer";
import PreLoader from "./components/Preloader";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";



const App = () => {
  return (
    <div>
     
     <PreLoader/>
     <BackgroundBeamsWithCollision>
    <div className="overflow-x-hidden">
     
        <div className="flex flex-col min-h-screen">
        
        <Navbar />
        <div className="flex-grow py-16">
        <Hero />
        
      </div>

      <Footer/>
    </div>
   </div>
   </BackgroundBeamsWithCollision>
   </div>



  )
}


export default App