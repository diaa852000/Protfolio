import React from 'react'
import { NavLink } from 'react-router-dom'

import btnStyle from './CustomBtn.module.css';

export default function button() {
  return (
    <div>
      <NavLink className={`py-2 px-6 rounded-full inline-block ${btnStyle.customBtn}`} to={'/cv'}>Download CV</NavLink>
    </div>
  )
}
