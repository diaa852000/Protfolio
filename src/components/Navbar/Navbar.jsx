import React from 'react'
import { NavLink } from 'react-router-dom';

import navbarStyle from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className='nav-bar flex justify-between content-center container mx-auto py-3 px-16'>

        <h1 className={navbarStyle.logo}>Prot<span>Folio</span></h1>
        <ul className='list-items'>
          <li className={ `inline-block mx-2 mt-3 ${navbarStyle.navFont}`}><NavLink className='block 'to={'/home'}>Home</NavLink></li>
          <li className={ `inline-block mx-2 mt-3 ${navbarStyle.navFont}`}><NavLink className='block 'to={'/about'}>About</NavLink></li>
          <li className={ `inline-block mx-2 mt-3 ${navbarStyle.navFont}`}><NavLink className='block 'to={'/services'}>Services</NavLink></li>
          <li className={ `inline-block mx-2 mt-3 ${navbarStyle.navFont}`}><NavLink className='block 'to={'/skills'}>skills</NavLink></li>
          <li className={ `inline-block mx-2 mt-3 ${navbarStyle.navFont}`}><NavLink className='block 'to={'/contact'}>contact me</NavLink></li>
        </ul>
    </div>
  )
}
