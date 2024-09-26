import React from 'react';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { animate, motion } from 'framer-motion';


const IconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },

  },

});

function Footer() {
  return (

    <footer className=" text-white py-6 ">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex space-x-6 text-3xl">
          <motion.div
            variants={IconVariants(2.5)}
            initial="initial"
            animate="animate"
            >
            <FaReact className='text-teal-400' />
          </motion.div>
          <motion.div
            variants={IconVariants(3)}
            initial="initial"
            animate="animate"
            >
            <RiTailwindCssFill className='text-[#38BDF8]' />
          </motion.div>
          <motion.div
            variants={IconVariants(5)}
            initial="initial"
            animate="animate"
            >
            <FaLaravel className='text-[#FF2D20]' />
          </motion.div>
          <motion.div
            variants={IconVariants(4)}
            initial="initial"
            animate="animate"
            >
            <FaPhp className='text-[#777BB4]' />
          </motion.div>
          <motion.div
            variants={IconVariants(3)}
            initial="initial"
            animate="animate"
            >
            <FaNode className='text-[#339933]' />
          </motion.div>

        </div>
        <div>
          <p className="text-sm "> Availaibe 2024</p>
        </div>
      </div>
    </footer >

  );
}

export default Footer;
