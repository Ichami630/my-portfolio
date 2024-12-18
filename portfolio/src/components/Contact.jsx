import React from 'react';
import { useState } from 'react';
import { FaGithub,FaPhone, FaFacebook, FaLinkedinIn, FaSquareXTwitter, FaArrowUp,FaEnvelope } from 'react-icons/fa6'
import { FaMapMarker } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData((prev) => {
            return { ...prev, [name]: value}
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        const {name,email,message} = formData;
        const newContact = {
            name,
            email,
            message
        }
        console.log(newContact);
        toast.success('submitted successfully!!');
    }
  return (
    <section className="relative pb-24 border-b border-neutral-900 lg:mb-10 " id="contact">
        <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          duration: 1.2,
          damping: 10
        }}
        viewport={{once: true}}
        className="my-10 text-4xl text-center">Contact</motion.h1>
      {/* Top Section */}
      <motion.div
      className="w-full px-8 py-12 text-white rounded-t-lg lg:h-56 lg:py-24 bg-secondary-200">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="mt-2 text-sm">Feel free to contact me for any inquiries or collaborations.</p>
      </motion.div>

      {/* Main Content */}
      <div 
      className="grid grid-cols-1 gap-6 mt-0 bg-gray-100 border rounded-b-lg shadow-md lg:pb-28 lg:grid-cols-2 lg:mt-0 lg:overflow-hidden">
        {/* Left Section - Contact Details */}
        <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3 }
          },
          viewport: {
            once: true,
          }
        }}
        className="hidden p-8 space-y-6 bg-gray-100 md:block">
          {/* Email */}
          <motion.div 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="flex items-center">
            <FaEnvelope className="text-pink-600" />
            <span className="ml-2 text-neutral-600">brandonichami@gmail.com</span>
          </motion.div>

          {/* Address */}
          <motion.div 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="flex items-center">
            <FaMapMarker className="text-blue-500" />
            <span className="ml-2 text-neutral-600">Molyko Buea, CM</span>
          </motion.div>

          {/* Phone */}
          <motion.div 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="flex items-center">
            <FaPhone className="text-cyan-400" />
            <span className="ml-2 text-neutral-600">(+237) 653-595-434</span>
          </motion.div>

          {/* Social Links */}
          <div className="flex mt-4 space-x-4 text-2xl">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://twitter.com"
              className="transition duration-300 text-neutral-700 hover:text-neutral-500">
              <FaSquareXTwitter />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com"
              className="transition duration-300 text-neutral-700 hover:text-neutral-500">
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://facebook.com"
              className="transition duration-300 text-neutral-700 hover:text-neutral-500">
              <FaFacebook />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://linkedin.com"
              className="transition duration-300 text-neutral-700 hover:text-neutral-500">
              <FaLinkedinIn />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <div className="flex items-center lg:absolute lg:top-0 lg:z-50 lg:bottom-10 lg:right-10 lg:w-1/2">
          <motion.div
          whileInView={{ x: 0, opacity: 1 }} 
          initial={{ x: 300, opacity: 0 }}
          transition={{ type: "spring", duration: 2.5 }}
          viewport = {{ once: true }}
          className="w-full p-8 bg-white rounded-lg shadow-lg lg:rounded-tr-lg lg:rounded-br-lg">
            <h2 className="mb-4 text-xl font-medium text-center text-black">Send me a Message</h2>
            <form onSubmit={submitForm}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  name='name'
                  onChange={handleChange}
                  type="text"
                  className="w-full p-2 mt-1 text-black border rounded focus:outline-none focus:ring-2 focus:ring-secondary-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  name='email'
                  onChange={handleChange}
                  type="email"
                  className="w-full p-2 mt-1 text-black border rounded focus:outline-none focus:ring-2 focus:ring-secondary-300"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name='message'
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 mt-1 text-black border rounded focus:outline-none focus:ring-2 focus:ring-secondary-300"
                  placeholder="Your Message"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }
                }}
                type="submit"
                className="px-4 py-2 text-white rounded bg-secondary-200 hover:bg-secondary-400">
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
