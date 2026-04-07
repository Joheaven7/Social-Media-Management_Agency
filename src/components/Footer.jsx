import React from 'react'
import assets from '../assets/assets'
import {motion} from 'motion/react'

const Footer = ({theme}) => {
  return (
    <motion.div
       initial={{opacity:0, y: 50}}
       whileInView={{opacity:1, y: 0}}
       transition={{duration: 0.8}}
       viewport={{once: true}} 
    className={`px-4 sm:px-10 lg:px-24 xl:px-40 py-12 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-slate-50 text-gray-700"}`}>
      {/* footer top */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <motion.div 
        initial={{opacity:0, x: -30}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 0.6, delaye: 0.2}}
        viewport={{once: true}}
        className='space-y-5 text-sm text-gray-700 dark:text-gray-300'>
          <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="" className='w-32 sm:w-44'/>
          <p className='max-w-md mt-4'>From strategy to execution, we craft digital solutions that move 
            your business forward.</p>

            <ul className='flex gap-8 mt-6'>
              <li><a className='hover:text-primary transition-colors text-gray-700 dark:text-gray-300 dark:hover:text-white' href="#hero">Home</a></li>
              <li><a className='hover:text-primary transition-colors text-gray-700 dark:text-gray-300 dark:hover:text-white' href="#services">Services</a></li>
              <li><a className='hover:text-primary transition-colors text-gray-700 dark:text-gray-300 dark:hover:text-white' href="#our-work">Our Work</a></li>
              <li><a className='hover:text-primary transition-colors text-gray-700 dark:text-gray-300 dark:hover:text-white' href="#contact-us">Contact Us</a></li>
            </ul>
        </motion.div>

        <motion.div 
        initial={{opacity:0, y: 30}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 0.5, delay3: 0.3}}
        viewport={{once: true}}
        className='text-gray-600 dark:text-gray-300'>
          <h3 className='font-semibold'>Subscribe to our newsletter</h3>
          <p className='text-sm mt-2 mb-6'>The latest news, articles, and 
            resources, sent to your inbox weekly.</p>

            <div className='flex gap-2 text-sm'>
              <input type="email" placeholder='Enter your email' 
              className='w-full p-3 text-sm outline-none rounded dark:text-white
              bg-transparent border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400'/>
              <button className='bg-primary text-white rounded px-6 whitespace-nowrap hover:opacity-90 transition-opacity'>Subscribe</button>
            </div>

        </motion.div>
      </div>
      <hr className='border-gray-300 dark:border-gray-600 my-8'/>

      {/* Optional footer bottom with copyright */}
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 0.5, delay: 0.4}}
      viewport={{once: true}}
      className='text-sm text-gray-500 dark:text-gray-400 flex justify-center 
      sm:justify-between gap-4 flex-wrap'>
        <p> Copyright {new Date().getFullYear()} © JohnDear All Rights Reserved.</p>
        <div className='flex items-center justify-between gap-4'>
          <img src={assets.facebook_icon} alt="" className='dark:brightness-0 dark:invert hover:opacity-80 cursor-pointer transition-opacity' />
          <img src={assets.twitter_icon} alt="" className='dark:brightness-0 dark:invert hover:opacity-80 cursor-pointer transition-opacity' />
          <img src={assets.instagram_icon} alt="" className='dark:brightness-0 dark:invert hover:opacity-80 cursor-pointer transition-opacity' />
          <img src={assets.linkedin_icon} alt="" className='dark:brightness-0 dark:invert hover:opacity-80 cursor-pointer transition-opacity' />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer