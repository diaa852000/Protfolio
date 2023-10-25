import React, { useEffect } from 'react'
import _skills from './mySkills';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from '../../Styled/Container/Container.styles';

const Skills = () => {
  const [skills, inView] = useInView({
    threshold: 0.3
  });
  
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        opacity:1,
        y:0,
        transition:{ duration: 1.4, bounce:0.5}
      })
    }else{
      animation.start({
        opacity: 0,
        y:'100%',
        transition:{ duration: 1.4, bounce:0.2}
      })
    }
  },[inView])


  return (
    <div id='projects' className='p-2'>
      <div ref={skills} className=' max-w-[1240px] mx-auto md:h-96 flex flex-col justify-start gap-5 p-2'>
      <h2 className='font-bold text-2xl md:text-4xl capitalize text-center'>skills</h2>
        <div className='flex justify-center items-center flex-wrap  gap-2 p-2 text-sm leading-normal md:mt-5'>
          {
            Object.values(_skills).map((skill, index) => 
            (<motion.div 
                animate={animation}
                key={index}
                className='md:w-22 px-3 pt-2 pb-1 uppercase font-semibold text-slate-200 bg-[#d61342] rounded-full hover:opacity-90 cursor-default my-1'
              >
                {skill}
              </motion.div>))
          }
        </div>
      </div>
    </div>
  )

}

export default Skills