import React from 'react'
import pattern from '../assets/pattern-small.svg'

const Banner1 = () =>{
  return (
    <div className='h-2/4 w-full pt-[20rem] pb-[15vh] md:pt-0 md:pb-[15vh]'>
        <div className='grid md:grid-cols-1 max-w-[1240px] m-auto bg-orange-200 rounded-[50px]'>
        
          <img src={pattern} alt="pattern"className='absolute top-[130vh] md:top-[100%] md:left-[17%] invisible md:visible md:w-max w-[15rem]' /> {/* Left */}
          <img src={pattern} alt="pattern"className='absolute top-[130vh] md:top-[100%] md:left-[69%] invisible md:visible md:w-max w-[15rem] rotate-180' /> {/* Right */}
        
          <div className='flex flex-col justify-center w-full py-10 md:items-start md:px-20 md:py-20'>
              <h1 className='z-10 px-20 text-xl text-center md:text-2xl text-bold'>Bali Connection Services will take care of everything and get you on your way to your new life abroad in no time!</h1>  
          </div>
          
        </div>
    </div>
  )
}

export default Banner1
