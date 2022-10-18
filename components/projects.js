import React, { useEffect, useState } from 'react'
import Project from "./Project"


const Projects = ({ projectData }) => {
  const [projects, setProjects] = useState([]);
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
        {projects?.map(project => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects