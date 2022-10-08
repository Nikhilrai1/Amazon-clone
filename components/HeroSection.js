import React, { useState } from 'react'
import Modal from './Modal';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"
import { urlFor } from '../utils/client';


const HeroSection = ({ name, description, profileImage }) => {
    const [showModal, setShowModal] = useState(false)
    const [text] = useTypewriter({
        words: [
            "Hi, The Names's Nikhil Rai.",
            "I'm a FullStack Developer.",
            "I'm a Frontend Developer.",
            "I'm a Backend Developer.",
            "I'm a Mern Developer.",
            "I'm a programmer.",
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='w-[100%] shadow-lg overflow-hidden'>
            {showModal && <Modal modalTitle={"Contact Me"} modalButton={"Contact"} setShowModal={setShowModal} />}
            <div className="flex flex-col-reverse md:flex-row flex-wrap">
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
                    className="flex w-full md:w-1/2 flex-col justify-center items-center md:items-start p-5 sm:p-10">
                    <span className='text-green-500 font-semibold'>Hey There 👋 I am</span>
                    <h1 className='font-bold text-4xl my-3'>{name}</h1>
                    <span className='text-xl'><strong>{text} <Cursor /></strong></span>
                    <p className='text-gray-600'>
                        {description}
                    </p>
                    <button onClick={() => setShowModal(true)} className="flex text-white mt-10  bg-green-600 border-0 py-1 px-4 sm:py-2 sm:px-8 focus:outline-none hover:bg-green-500 hover:shadow-lg rounded-full font-bold text-lg">Contact Me</button>
                </motion.div>
                <div className="flex w-full md:w-1/2 p-5  sm:p-10 pb-0 md:pb-10 ">
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
                        className="w-full flex items-center justify-center">
                        <img src={urlFor(profileImage?.asset._ref).url()} className='w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] lg:w-[20rem] lg:h-[20rem] rounded-full' alt="profile" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection

