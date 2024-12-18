import React from 'react'
import logo from '../assets/images/logo.png'
import { ABOUT_TEXT } from '../../constants'
import { motion } from 'framer-motion'

const About = () => {
  return (
        <div className='pb-4 border-b border-neutral-900 lg:mb-35' id='about'>
            <h1 className='my-10 text-4xl text-center text-white'>About <span className='text-transparent bg-gradient-to-r from-primary via-slate-300 to-secondary-200 bg-clip-text'>Me</span></h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                    whileInView = {{ x: 0, opacity: 1 }} 
                    initial = {{ x: -100, opacity: 0 }}
                    transition = {{ duration: 0.5 }}
                    viewport={{once: true}}
                    className="flex items-center justify-center">
                        <img src={logo} alt="about" />
                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                    whileInView = {{ x: 0, opacity: 1 }}
                    initial = {{ opacity: 0, x: 100 }} 
                    transition = {{ duration: 0.5 }}
                    viewport={{once: true}}
                    className="flex justify-center lg:justify-start">
                        <p className='max-w-xl py-6 my-2 overflow-hidden text-neutral-300'>
                            {ABOUT_TEXT}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
  )
}

export default About