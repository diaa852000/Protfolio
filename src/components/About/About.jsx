import React, { useEffect } from 'react';
import {  Section } from '../../Styled/Container/Container.styles';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3
  });
  
  const animation = useAnimation();
  const negAnimation = useAnimation();

  useEffect(()=>{
    if(inView){
      animation.start({
        opacity:1,
        x: 0,
        transition:{ duration: 1.7, bounce:0.2}
      })
      negAnimation.start({
        opacity:1,
        x:0,
        ransition:{ duration: 1.7, bounce:0.2}
      })
    }else{
      animation.start({
        opacity: 0 ,
        x: '-100%',
    })
    negAnimation.start({
      opacity: 0,
      x: '100vw',
    })
    }
  },[inView])

  return (
    <div id='about' className='overflow-x-hidden'>
      <Section className='max-w-[1240px] mx-auto p-2 flex flex-col justify-center gap-2 '>
        <div className='py-2 text-center'>
          <h2 className='font-bold text-2xl md:text-4xl'>What I do</h2>
        </div>
        <div ref={ref} className='w-full  h-2/3 px-2 py-4'>
          <div className=' w-full h-full p-2'>
            <motion.div animate={animation} className='w-full lg:w-2/3 mx-auto py-4 px-2 md:px-5 rounded-md bg-[#312f2e] my-3'>
              <h4 className='uppercase font-bold text-sm md:text-lg text-[#d61342]'>web design :</h4>
              <p className=' text-white text-sm md:text-xl px-3 md:pl-10'>Implementing the required designs perfectly</p>
            </motion.div>
            <motion.div animate={negAnimation} className='w-full text-xs lg:w-2/3 mx-auto py-4 px-2 md:px-5 rounded-md bg-[#312f2e] my-3'>
              <h4 className='uppercase font-bold text-sm md:text-lg text-[#d61342]'>responsive :</h4>
              <p className='text-white text-sm md:text-xl px-3 md:pl-10'>make the design is super responsive for all devices</p>
            </motion.div>
            <motion.div animate={animation} className='w-full text-xs lg:w-2/3 mx-auto py-4 px-2 md:px-5 rounded-md bg-[#312f2e] my-3'>
              <h4 className='uppercase font-bold text-sm lg:text-lg text-[#d61342]'>state management :</h4>
              <p className='text-white text-sm md:text-xl px-3 md:pl-10'>handle the data and management it in the best manner</p>
            </motion.div>
            <motion.div animate={negAnimation} className='w-full text-xs lg:w-2/3 mx-auto py-4 px-2 md:px-5 rounded-md bg-[#312f2e] my-3'>
              <h4 className='uppercase font-bold text-sm md:text-lg text-[#d61342]'>experience with back-end</h4>
              <p className='text-white text-sm md:text-xl px-3 md:pl-10'>I have a little experience with back-end, just need to be needed to be revised</p>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default About