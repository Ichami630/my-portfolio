import React from 'react'
import { FaGithub,FaPhone, FaFacebook, FaLinkedinIn, FaSquareXTwitter, FaArrowUp,FaEnvelope } from 'react-icons/fa6'
import { FaMapMarker } from 'react-icons/fa';
import { motion } from 'framer-motion'

const iconsFall = (delay) => ({
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 1.2, delay: delay } }
});

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
      window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
      });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="py-8">
      {/* Main Footer Content */}
      <div className="container flex flex-col items-center justify-between px-6 mx-auto text-center md:flex-row md:text-left">
        
        {/* Branding Section */}
        <motion.div
        whileInView = {{ opacity: 1, x: 0 }} 
        initial = {{ opacity: 0, x: -100 }}
        transition = {{ duration: 2, delay: 0 }}
        className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold ">Brandon Ichami</h2>
          <p className="mt-1 text-neutral-400"><span className='text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text'>Full-Stack Developer</span> | Passionate about building scalable applications.</p>
          <div className="flex items-center justify-center sm:justify-center sm:items-center md:justify-start md:items-start">
            <FaEnvelope className="mt-1 text-pink-600" />
            <span className="ml-2 text-neutral-500">brandonichami@gmail.com</span>
          </div>
          <div className="flex items-center justify-center sm:justify-center sm:items-center md:justify-start md:items-start">
          <FaMapMarker className='mt-1 text-blue-500' /> <span className='ml-2 text-neutral-500'>Molyko Buea, CM</span>
          </div>
          <div className="flex items-center justify-center sm:justify-center sm:items-center md:justify-start md:items-start">
          <FaPhone className='mt-1 text-cyan-300' /> <span className='ml-2 text-neutral-500'>(+237) 653-595-434</span>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
        whileInView = {{ opacity: 1, y: 0 }} 
        initial = {{ opacity: 0, y: -100 }}
        transition = {{ duration: 2.5, delay: 0.5 }} 
        className="mb-6 md:mb-0">
          <h3 className="mb-2 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><button onClick={() => scrollToSection('about')} className="transition duration-300 hover:text-neutral-400 hover:underline">About</button></li>
            <li><button onClick={() => scrollToSection('skills')} className="transition duration-300 hover:text-neutral-400 hover:underline">Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="transition duration-300 hover:text-neutral-400 hover:underline">Projects</button></li>
          </ul>
        </motion.div>

        {/* Social Icons */}
        <div>
          <motion.h3 
          whileInView = {{ opacity: 1, x: 0 }} 
          initial = {{ opacity: 0, x: 100 }}
          transition = {{ duration: 1.5, delay: 0 }}
          className="mb-2 text-lg font-semibold">Connect With Me</motion.h3>
          <div className="flex justify-center gap-4 md:justify-start">
            <motion.a
              variants={iconsFall(0)}
              initial="initial"
              whileInView="whileInView"
              href="https://github.com/ichami630"
              className="text-2xl transition duration-300 hover:text-neutral-400"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              variants={iconsFall(0.5)}
              initial="initial"
              whileInView="whileInView"
              href="https://facebook.com"
              className="text-2xl transition duration-300 hover:text-neutral-400"
              aria-label="Facebook"
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              variants={iconsFall(0.7)}
              initial="initial"
              whileInView="whileInView"
              href="https://linkedin.com"
              className="text-2xl transition duration-300 hover:text-neutral-400"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              variants={iconsFall(1)}
              initial="initial"
              whileInView="whileInView"
              href="https://twitter.com"
              className="text-2xl transition duration-300 hover:text-neutral-400"
              aria-label="Twitter"
            >
              <FaSquareXTwitter />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-4 mt-8 text-center border-t border-neutral-700">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} <span className="font-bold hover:underline">ichami</span>. All rights reserved.
        </p>
      </div>

      {/* Back to Top Button */}
      {/* <button 
        onClick={scrollToTop} 
        className="fixed p-3 text-white transition duration-300 rounded-full bottom-4 right-4 bg-neutral-700 hover:bg-neutral-600"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button> */}
    </footer>
  )
}

export default Footer
