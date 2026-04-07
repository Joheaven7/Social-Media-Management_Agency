import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy';
import Services from './components/Services'
import OurWork from './components/OurWork';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });
   
  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // Refs for custom cursor Position tracking

  const mouse = useRef({x: 0, y:0})
  const position = useRef({x: 0, y:0})

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x -6}px, 
        ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x -20}px, 
        ${position.current.y - 20}px, 0)`
        
      }
     requestAnimationFrame(animate)

    }

     animate()

     return ()=>{
      document.removeEventListener('mousemove', handleMouseMove)
     }

  }, [])
  

  // Apply theme class to html element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  return (
    <div className="min-h-screen dark:bg-black relative">
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} setTheme={setTheme} />
      <TrustedBy theme={theme} />
      <Services theme={theme} />    
      <OurWork theme={theme}/>
      <Team theme={theme}/>
      <ContactUs theme={theme}/>
      <Footer theme={theme}/>

       {/* Custom Cursor Ring  */}
       <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border 
       border-primary pointer-events-none z-[9999]' 
       style={{transition: 'transform 0.1s ease-out'}}></div>

       {/* Custom Cursor Dot  */}
       <div ref={dotRef} className='fixed top-0 left-0 w-3 rounded-full bg-primary 
       pointer-events-none z-[9999]'></div>


    </div>
  )
}

export default App