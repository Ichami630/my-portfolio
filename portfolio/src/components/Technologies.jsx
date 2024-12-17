import React from 'react'
import {RiReactjsLine, RiPhpLine} from 'react-icons/ri'
import {SiMongodb,SiMysql} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {BiLogoPostgresql} from 'react-icons/bi'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10,-10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    }
  }
})

const Technologies = () => {
  return (
    <div className='pb-4 border-b border-neutral-800 lg:mb-35 lg:pb-14' id="skills">
      <motion.h1 
      whileInView = {{ opacity: 1, y: 0 }}
      initial = {{ opacity: 0, y: -100 }}
      transition = {{ duration: 2.5 }}
      className="my-10 text-4xl text-center">Skills</motion.h1>
      <motion.div
      whileInView = {{ opacity: 1, x: 0 }}
      initial = {{opacity: 0, x: -100}} 
      transition = {{ duration: 2.5 }}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants ={ iconVariants(2.5)}
        initial = 'initial'
        animate = 'animate'
        className="p-4 border rounded-2xl border-neutral-800">
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
        variants ={ iconVariants(3)}
        initial = 'initial'
        animate = 'animate' 
        className="p-4 border rounded-2xl border-neutral-800">
          <SiMongodb className='text-7xl ' />
        </motion.div>
        <motion.div
        variants ={ iconVariants(5)}
        initial = 'initial'
        animate = 'animate' 
        className="p-4 border rounded-2xl border-neutral-800">
          <FaNodeJs className='text-green-500 text-7xl' />
        </motion.div>
        <motion.div
        variants ={ iconVariants(2)}
        initial = 'initial'
        animate = 'animate' 
        className="p-4 border rounded-2xl border-neutral-800">
          <BiLogoPostgresql className='text-7xl text-sky-700' />
        </motion.div>
        <motion.div
        variants ={ iconVariants(6)}
        initial = 'initial'
        animate = 'animate' 
        className="p-4 border rounded-2xl border-neutral-800">
          <RiPhpLine className='text-7xl text-sky-800' />
        </motion.div>
        <motion.div 
        variants ={ iconVariants(4)}
        initial = 'initial'
        animate = 'animate'
        className="p-4 border rounded-2xl border-neutral-800">
          <SiMysql className='text-7xl text-sky-400' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies