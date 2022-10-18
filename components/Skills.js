import React from 'react'
import Skill from './Skill'



const Skills = ({ skills }) => {
  return (
    <div className="p-10 w-full">
      <div className="title flex flex-col pb-10 justify-center items-center">
        <span className='text-sm sm:text-xl md:text-4xl font-bold text-gray-700'>Skills 🔥</span>
        <span className='mt-5 text-gray-400 w-[90%] md:w-[20rem] border border-b-4'></span>
      </div>
      <div className="grid grid-rows-1 grid-cols-1 sm:grid-rows-6 sm:grid-cols-2 md:grid-rows-4 md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-6 gap-5">
        {skills.slice(0, Math.floor(skills.length / 2)).map(skill => (
          <Skill key={skill._id} skill={skill} isDirectionLeft={true} />
        ))}
        {skills.slice(Math.floor(skills.length / 2),skills.length).map(skill => (
          <Skill key={skill._id} skill={skill} isDirectionLeft={false} />
        ))}
      </div>
    </div>
  )
}

export default Skills