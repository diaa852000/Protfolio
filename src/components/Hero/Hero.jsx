import React from 'react'

import myPic from '../../assest/images/pic1.png';

import facebook from '../../assest/images/facebook.png';
import github from '../../assest/images/github.png';
import linkedin from '../../assest/images/linkedin.png';

import { Link } from 'react-router-dom';
import { PrimaryBtn } from '../../Styled/Buttons/Buttons.styles';
import { HeroContent, Section } from '../../Styled/Container/Container.styles';

const facebookUri = 'https://www.facebook.com/profile.php?id=100003836633797';
const githubUri = 'https://github.com/diaa852000';
const linkedinUri = 'https://www.linkedin.com/in/diaa-el-taiby-64861416a/';
const cvUri = 'https://drive.google.com/file/d/1Cefg_Wb8NqSvycfYbtpRGlN7_tUm0afo/view?usp=drive_link';



export default function Hero() {
  return (
    <div id='home'>
      <div className='h-[800px] relative max-w-[1240px] mx-auto md:flex items-star overflow-hidden'>
          <HeroContent className=' capitalize absolute top-[50%] transform translate-y-[-50%] px-4 md:px-2 py-2'>
              <div className='text-white'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold my-1'>hello, my name is</h2>
                <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold my-1'>diaa <span className='text-gray-500'>eltaiby</span></h2>
                <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold my-1'>i'm a <span className='text-gray-500 pe-1'>frontend</span>developer</h2>
              </div>
              <div className='text-start my-1'>
                <PrimaryBtn href={cvUri} target='_blank' className=' text-xl xl:text-2xl text-center font-semibold w-36 md:w-40 rounded-full py-2'>my cv</PrimaryBtn>
              </div>
              <div className='flex items-center gap-3 md:justify-start pl-3 my-3'>
                <Link to={facebookUri} className='hover:scale-110 transition-all duration-200 ease-in-out'><img src={facebook} alt="facebook" /></Link>
                <Link to={githubUri} className='hover:scale-110 transition-all duration-200 ease-in-out'><img src={github} alt="github" /></Link>
                <Link to={linkedinUri} className='hover:scale-110 transition-all duration-200 ease-in-out'><img src={linkedin} alt="linkedin" /></Link>
              </div>
          </HeroContent>
          <div className='absolute top-[4rem] right-0 md:right-[2rem] lg:top-[2rem] lg:right-[3rem] xl:right-[10rem] 
            2xl:right-[0] 2xl:top-[50%] 2xl:transform 2xl:translate-y-[-50%] z-[-1] lg:z-[2]'>
              <img src={myPic} alt="myPic" className='mix-blend-multiply' />
          </div>
      </div>
    </div>
  )
}




