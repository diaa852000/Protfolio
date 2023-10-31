import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='px-2 sticky top-0 left-0 w-full z-10 bg-[#101213]'>
        <div className='flex justify-between items-center h-[4rem] max-w-[1240px] mx-auto text-white'>
          <NavLink to="/" className='w-full text-lg md:text-3xl font-bold md:pt-2 uppercase'>port<span className='text-[#d61342]'>folio</span></NavLink>
          <div className='hidden lg:flex uppercase'>
            <ScrollLink to='home'  spy={true} smooth={true} offset={-64} duration={500} 
              className='cursor-pointer hover:text-[#d61342] transition-all duration-200 ease-in-out font-semibold p-4'>home
            </ScrollLink>
            <ScrollLink to="about" spy={true} smooth={true} offset={-64} duration={500} 
              className='cursor-pointer hover:text-[#d61342] transition-all duration-200 ease-in-out font-semibold p-4'>About
            </ScrollLink>
            <ScrollLink  to='skills' spy={true} smooth={true} offset={-64} duration={500} className='cursor-pointer hover:text-[#d61342] transition-all duration-200 ease-in-out font-semibold p-4'>skills
            </ScrollLink>
            <ScrollLink  to='projects' spy={true} smooth={true} offset={-64} duration={500} className='cursor-pointer hover:text-[#d61342] transition-all duration-200 ease-in-out font-semibold p-4'>projects
            </ScrollLink>
            <ScrollLink  to='contact' spy={true} smooth={true} offset={-64} duration={500} className='cursor-pointer hover:text-[#d61342] transition-all duration-200 ease-in-out font-semibold p-4'>contact
            </ScrollLink>
          </div>
          <div onClick={handleNav} className='cursor-pointer block lg:hidden'>
            { nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
          </div>
        </div>
      <div className={nav ? 
        'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 transition-all z-10 text-sm md:text-lg lg:text-xl' : 'fixed left-[-100%]'}>
        <NavLink to="/"  className='w-full text-lg md:text-2xl lg:text-3xl font-bold uppercase m-4 block'>proto <span className='text-[#d61342]'>folio</span></NavLink>
        <ul className='uppercase p-4'>
          <ScrollLink to="home" spy={true} smooth={true} offset={-64} duration={500} 
            className=' hover:text-[#d61342] transition-all duration-200 ease-in-out font-semibold cursor-pointer px-1 py-4 border-b border-gray-600 block'>home</ScrollLink>
          <ScrollLink to="about" spy={true} smooth={true} offset={-64} duration={500} 
            className=' hover:text-[#d61342] transition-all duration-200 ease-in-out font-semibold cursor-pointer px-1 py-4 border-b border-gray-600 block'>about</ScrollLink>
          <ScrollLink to="skills" spy={true} smooth={true} offset={-64} duration={500} 
            className=' hover:text-[#d61342] transition-all duration-200 ease-in-out font-semibold cursor-pointer px-1 py-4 border-b border-gray-600 block'>skills</ScrollLink>

          <ScrollLink to="projects" spy={true} smooth={true} offset={-64} duration={500} 
            className=' hover:text-[#d61342] transition-all duration-200 ease-in-out font-semibold cursor-pointer px-1 py-4 border-b border-gray-600 block'>projects</ScrollLink>

          <ScrollLink to="contact" spy={true} smooth={true} offset={-64} duration={500} 
            className=' hover:text-[#d61342] transition-all duration-200 ease-in-out font-semibold cursor-pointer px-1 py-4 block'>contact</ScrollLink>
        </ul>
      </div>
    </div>

  )
}

export default Navbar