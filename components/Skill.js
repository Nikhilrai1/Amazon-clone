import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { skillInfo } from '../data/skillInfo';
import { urlFor } from '../utils/client';


const Skill = ({skills}) => {
  return (
    <div className="p-10 w-full">
      <div className="title flex flex-col pb-10 justify-center items-center">
        <span className='text-sm sm:text-xl md:text-4xl font-bold text-gray-700'>Skills 🔥</span>
        <span className='mt-5 text-gray-400 w-[90%] md:w-[20rem] border border-b-4'></span>
      </div>
      <div className="grid grid-rows-1 grid-cols-1 sm:grid-rows-6 sm:grid-cols-2 md:grid-rows-4 md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-6 gap-5">
        {skills?.map(skill => (
          <div key={skill._id} className="relative group cursor-pointer flex justify-center w-40 h-40 sm:w-60 sm:h-60 lg:w-40 lg:h-40 mx-auto items-center p-5 shadow-md rounded-md hover:bg-green-200">
            <CircularProgressbarWithChildren
              className='flex justify-center items-center'
              value={skill.progress}
              strokeWidth={5}
            >
              <img src={urlFor(skill.skillImage.asset._ref).url()} alt="react" className="w-[90%] h-[90%] rounded-full" />
            </CircularProgressbarWithChildren>
            <span className="absolute hidden group-hover:flex -top-5 -left-5 py-1 px-2 bg-black text-white">{skill.name}</span>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Skill