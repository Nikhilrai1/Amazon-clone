import React from 'react';
import { ImTwitter } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { motion } from "framer-motion"
import {FaLinkedinIn} from "react-icons/fa"




const About = ({ about, social }) => {
  return (
    <div id="about" className="w-full p-10">
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-5 w-full">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1
          }}
          className="logo w-full md:w-1/2 flex justify-center items-center">
          <img src="/programmer.gif" alt="gif" />
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1
          }}
          className=" w-full md:w-1/2 ">
          <div className="title flex flex-col pb-10 justify-center items-center mt-10 md:mt-0">
            <div className='text-sm sm:text-xl md:text-4xl font-bold text-gray-700 flex justify-center items-center gap-4'>
              <span>About Me</span>
              <img src="boy.png" className='h-10 w-10 object-contain' alt="boy" />
            </div>
            <span className='mt-5 text-gray-400 w-[90%] md:w-[20rem] border border-b-4'></span>
          </div>
          <div className="information flex flex-col">
            <p className="text-gray-600 font-semibold m-2">{about}</p>
          </div>
          <div className="mt-5 md:mt-0">
            <div className="flex items-center justify-center gap-3 text-gray-600 p-2 px-3 shadow-sm">
              <a target='_blank' rel="noreferrer" href={social.facebook}><SiFacebook className="h-5 w-5 hover:text-green-500 transition-all hover:scale-125 cursor-pointer" /></a>
              <a target='_blank' rel="noreferrer" href={social.twitter}><ImTwitter className="h-5 w-5 hover:text-green-500 transition-all hover:scale-125 cursor-pointer" /></a>
              <a target='_blank' rel="noreferrer" href={social.instagram}><SiInstagram className="h-5 w-5 hover:text-green-500 transition-all hover:scale-125 cursor-pointer" /></a>
              <a target='_blank' rel="noreferrer" href={social.linkedin}><FaLinkedinIn className="h-5 w-5 hover:text-green-500 transition-all hover:scale-125 cursor-pointer" /></a>
              <a target='_blank' rel="noreferrer" href={social.github}><BsGithub className="h-5 w-5 hover:text-green-500 transition-all hover:scale-125 cursor-pointer" /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About