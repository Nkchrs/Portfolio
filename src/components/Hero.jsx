import React, { useState, useEffect } from "react";


const phrases = ["Front end", "Back end", "Full stack"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="">
      <div className="container mx-auto py-10 ">

        <div className="font-semibold text-white  space-y-4 gap-4 text-6xl  ">
          <h1
            className="text-6xl text-left ">HELLO,</h1>
          <p className="">Je suis
            <span className="text-6xl text-orange-300"> Christopher</span>,</p>
          <p
            className="lg:pr-64 text-left text-6xl animate-fadeIn">Developer {phrases[index]} </p>
        </div>
        <p className="mt-10 text-4xl text-left text-white transition-transform duration-1000 ease-in-out  transform hover:translate-x-28">A propos de moi</p>
        <hr className="h-px w-[250px] my-2 bg-white border-0" />
        <p className="mt-5 text-4xl text-left text-white transition-transform duration-1000 ease-in-out hover:translate-x-28">Mes projets</p>
        <hr className="h-px w-[200px] my-2 bg-white border-0" />
        <p className="mt-5 text-4xl text-left text-white transition-transform duration-1000 ease-in-out hover:translate-x-28">Contact</p>
        <hr className="h-px w-[200px] my-2 bg-white border-0" />
      </div>
    </div>

  )
}








export default Hero