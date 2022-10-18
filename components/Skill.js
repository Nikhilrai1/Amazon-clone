import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { urlFor } from '../utils/client';
import { motion } from "framer-motion"

const Skill = ({ skill, isDirectionLeft }) => {
    return (
        <motion.div
            initial={{
                x: isDirectionLeft ? -200 : 200,
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
            className="relative group cursor-pointer flex justify-center w-40 h-40 sm:w-60 sm:h-60 lg:w-40 lg:h-40 mx-auto items-center p-5 shadow-md rounded-md hover:bg-green-200">
            <CircularProgressbarWithChildren
                className='flex justify-center items-center bg-white rounded-full'
                value={skill.progress}
                strokeWidth={5}
            >
                <img src={urlFor(skill.skillImage.asset._ref).url()} alt="react" className="w-[90%] h-[90%] rounded-full" />
            </CircularProgressbarWithChildren>
            <span className="absolute hidden group-hover:flex -top-5 -left-5 py-1 px-2 bg-black text-white">{skill.name}</span>
        </motion.div>
    )
}

export default Skill