import React from 'react'

export default function NotFound() {
  return (
    <div>import React from 'react'

    import myPic from '../../assest/images/pic.webp';
    import splash from '../../assest/images/splash.png'
    
    import facebook from '../../assest/images/facebook.png';
    import github from '../../assest/images/github.png';
    import linkedin from '../../assest/images/linkedin.png';
    
    import { Link } from 'react-router-dom';
    import { PrimaryBtn } from '../../Styled/Buttons/Buttons.styles';
    
    const facebookUri = 'https://www.facebook.com/profile.php?id=100003836633797';
    const githubUri = 'https://github.com/diaa852000';
    const linkedinUri = 'https://www.linkedin.com/in/diaa-el-taiby-64861416a/';
    
    // Todo: upload cv to drive an link it to primbtn
    
    
    export default function Hero() {
      return (
        <div>
        <div ref={ref} className=' w-full h-full py-3 px-2 border'>
          <motion.div animate={animation} className=' w-full h-full flex flex-col items-start justify-evenly p-2'>
            <div className='h-20  w-full grid grid-rows-2 items-center px-2 rounded-md'>
              <h4 className='uppercase font-bold text-sm md:text-lg text-[#d61342]'>web design :</h4>
              <p className=' text-white text-sm md:text-lg md:pl-10  '>Implementing the required designs perfectly </p>
            </div>
            <div className='h-20  w-full grid grid-rows-2 items-center px-2 rounded-md '>
              <h4 className='uppercase font-bold text-sm md:text-lg text-[#d61342]'>responsive :</h4>
              <p className='text-white text-sm md:text-lg md:pl-10 '>make the design is super responsive for all devices</p>
            </div>
            <div className='h-20  w-full grid grid-rows-2 items-center px-2 rounded-md '>
              <h4 className='uppercase font-bold text-sm md:text-lg text-[#d61342]'>state management :</h4>
              <p className='text-white text-sm md:text-lg md:pl-10 '>handle the data and management it in the best manner</p>
            </div>
          </motion.div>
        </div>
      </div>
      )
    }
    
    
    
    
    </div>
  )
}
