import React from "react";
import logo from "../assets/Logochris.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";



const Navbar = () => {
    return (
        <div className="container mx-auto">
        <nav className="flex items-center justify-between py-6 text-white ">
            <div className="flex flex-shrink-0 items center text-4xl text-[#bac4b8] font-bold">
                <a href="/" aria-label="home">
                NC
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
                <a href="https://github.com/Nkchrs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="github">
                   <FiGithub />
                </a>

                <a href="https://www.linkedin.com/in/christopher-nankou-561539310/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkdIn">
                    <FaLinkedin />
                </a>
                
            
            </div>
            




        </nav>
        </div>
    )
}











export default Navbar