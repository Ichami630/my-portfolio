import React from 'react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';
const App = () => {

  return (
    <div className="overflow-x-hidden text-neutral-300">
      <div className="fixed top-0 w-full h-full -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container px-6 mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Footer />
      </div>
    </div>
    
  )
}

export default App