import React, { useState } from 'react'

import CustomBtn from '../CustomBtn/CustomBtn';
import homeStyle from './Home.module.css';

import shape from '../../images/shape.png';
import myPic from '../../images/pic3.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';


export default function Home() {

  const facebookUri = 'https://www.facebook.com/profile.php?id=100003836633797';
  const instagramUri = 'https://www.instagram.com/diaaeltaiby8/';
  const twitterUri = 'https://twitter.com/DiaaEltaiby';
  const githubUri = 'https://github.com/diaa852000';
  const linkedinUri = 'https://www.linkedin.com/in/diaa-el-taiby-64861416a/';

  const [isHoverd, setHovered] = useState(false);

  return (
    <div className={`container flex items-center justify-between mx-auto py-3 px-16 ${homeStyle.semiScreen}`}>
      
      <div className=''>
        <h5 className='px-1 mt-8'>Hello, my name is</h5>
        <h1>Diaa <span>Eltaiby</span></h1>
        <h6 className='px-1'>i'm a <span>Frontend</span> Developer</h6>

        <div className="inline-block my-5 mx-1">
          <CustomBtn />
        </div>

        <div className='flex flex-nowrap w-fit gap-10 my-5 mx-1'>
          <a className={homeStyle.socialBtn} href={facebookUri} target='_blank'><img src={facebook} alt="notFound" /></a>
          <a className={homeStyle.socialBtn} href={instagramUri} target='_blank'><img src={instagram} alt="notFound"/></a>
          <a className={homeStyle.socialBtn} href= {twitterUri} target='_blank'><img src={twitter} alt="notFound"/></a>
          <a className={homeStyle.socialBtn} href={githubUri} target='_blank'><img src={github} alt="notFound"/></a>
          <a className={homeStyle.socialBtn} href={linkedinUri} target='_blank'><img src={linkedin} alt="notFound"/></a>
        </div>
      
      </div>
      
      <div className='relative self-center h-4/5 w-1/2' onMouseEnter={()=> setHovered(true)} onMouseLeave={()=>{setHovered(false)}}>
        <img className={`absolute bottom-0  h-full w-3/4 ${isHoverd ? homeStyle.hoverShape : ''}`} src={shape} alt="notFound" />
        <img className={`absolute left-0 h-4/5 w-3/4 ${isHoverd ? homeStyle.hoverPic : ''}`} src={myPic} alt="notFound" />
      </div>

    </div>
  )
}
