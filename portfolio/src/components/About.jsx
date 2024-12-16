import React from 'react'
import logo from '../assets/images/logo.png'

const About = () => {
  return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <h1 className='text-center text-4xl text-white my-10'>About <span className='bg-gradient-to-r from-primary via-slate-300 to-secondary-200 bg-clip-text text-transparent'>Me</span></h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center items-center">
                        <img src={logo} alt="about" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className='max-w-xl my-2 py-6 overflow-hidden text-neutral-300'>
                            I am a dedicated and versatile full stack developer with a passion
                            for creating efficient and user-friendly web applications. With 5 years
                            of professional experience, I have worked with a variety of technologies, including
                            React, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with
                            a deep curiosity for how things work, and it has evolved into a career where I continuously
                            strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy
                            solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active,
                            exploring new technologies, and contributing to open-source projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About