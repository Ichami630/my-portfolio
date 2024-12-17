import React from 'react'
import { PROJECTS } from '../../constants'

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <h1 className="text-4xl text-center my-10">Projects</h1>
        <div>
            {PROJECTS.map((project,index) => (
                <div key = {index} className='mb-8 flex flex-wrap lg:justify-center' >
                    <div className="w-full lg:w-1/4">
                        <img 
                            src={project.image} 
                            alt={project.title}
                            width={150}
                            height={150}
                            className='mb-6 rounded' />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h4 className='mb-2 font-semibold'>{project.title}</h4>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech,index) => (
                            <span className='text-sm mr-2 bg-neutral-900 hover:text-neutral-300 
                             text-purple-900 px-2 py-1 rounded font-medium
                             hover:cursor-pointer hover:py-2 hover:px-3' 
                             key={ index }>{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects