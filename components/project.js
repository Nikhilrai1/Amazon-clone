import React, { useEffect, useState } from 'react'
import { urlFor } from '../utils/client'


const Project = ({ projectData }) => {
  const [projects, setProjects] = useState([]);
  const varriableImage = (projectImg) => {
    let randomPosition = Math.floor(Math.random() * projectImg.length)
    return projectImg[randomPosition];
  }
  useEffect(() => {
    setProjects(projectData)
  }, [])

  return (
    <div id="project" className="p-10 w-full">
      <div className="title flex flex-col pb-10 justify-center items-center">
        <span className='text-sm sm:text-xl md:text-4xl font-bold text-gray-700'>Projects 💻</span>
        <span className='mt-5 text-gray-400 w-[90%] md:w-[20rem] border border-b-4'></span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {
          projects?.map(project => (
            <div key={project.name} className="cursor-pointer shadow-md w-full md:w-1/3 lg:w-1/5 transition-all hover:scale-105 duration-200">
              <div className="image relative flex items-center justify-center">
                <img className='h-40' src={urlFor(varriableImage(project.projectImage)).url()} alt="project" />
              </div>
              <div className="info flex flex-col items-start justify-center p-3">
                <span className='text-gray-900 font-bold mb-3'>{project.name}</span>
                <p>{project.description}</p>
              </div>
              <div className="technology flex flex-wrap items-start justify-start p-3 gap-2">
                {
                  project.technology.map(tech => (
                    <div key={tech.name} className="image relative group">
                      <img src={urlFor(tech.technologyImage.asset._ref).url()} className="h-5 w-5 rounded-full" alt="technology" />
                      <span className='bg-black p-2 absolute -top-12 -left-5 text-sm hidden group-hover:flex text-white'>{tech.name}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Project