import React from 'react'
import { PROJECTS } from '../../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className="pb-4 border-b border-neutral-900 lg:mb-35">
        <motion.h1 
        whileInView = {{ opacity: 1, y: 0 }}
        initial = {{ opacity: 0, y: -100 }}
        transition = {{ duration: 0.5 }}
        className="my-10 text-4xl text-center">Projects</motion.h1>
        <div>
            {PROJECTS.map((project,index) => (
                <div key = {index} className='flex flex-wrap mb-8 lg:justify-center' >
                    <motion.div 
                    initial = {{ opacity: 0, x: -100 }}
                    animate = {{ opacity: 1, x: 0 }}
                    transition = {{ duration: 1.5 }}
                    className="w-full lg:w-1/4">
                        <img 
                            src={project.image} 
                            alt={project.title}
                            width={150}
                            height={150}
                            className='mb-6 rounded' />
                    </motion.div>
                    <motion.div 
                    whileInView = {{ opacity: 1, x: 0 }}
                    initial = {{ opacity: 0, x: 100 }}
                    transition = {{ duration: 2 }}
                    className="w-full max-w-xl lg:w-3/4">
                        <h4 className='mb-2 font-semibold'>{project.title}</h4>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech,index) => (
                            <span className='px-2 py-1 mr-2 text-sm font-medium text-purple-900 rounded bg-neutral-900 hover:text-neutral-300 hover:cursor-pointer hover:py-2 hover:px-3' 
                             key={ index }>{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects