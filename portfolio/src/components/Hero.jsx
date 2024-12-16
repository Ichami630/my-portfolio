import React from 'react'
import logo from '../assets/images/logo.png'

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className="flex flex-wrap mx-6">
            <div className="w-full lg:w-1/2 text-neutral-300">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="font-thin text-3xl tracking-tight pb-8 lg:mt-16 lg:text-6xl">
                        Brandon Ichami
                    </h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Full Stack Developer
                    </span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-normal">
                        I am a passionate full stack developer with a knack for crafting robust and scalable web applications. 
                        With 2 years of hands-on experience, I have honed my skills in front-end technologies like React,
                        as well as back-end technologies like PHP, MySQL, Node.js,and MongoDB. My goal is to leverage my expertise
                        to create innovative solutions that drive business growth and deliver exceptional user experiences.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img  src={logo} alt="bradon ichami" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero