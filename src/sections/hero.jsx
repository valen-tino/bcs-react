import React from 'react'
import heroImage from '../assets/hero.png'
import dots from '../assets/dots.svg'

const Hero = () => {
  return (
    <div className='relative flex flex-col justify-between w-full h-screen -100 font-Sora' id='hero'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto bg-orange-200 rounded-3xl'>
            <div className='flex flex-col justify-center w-full py-40 md:items-start md:px-20 md:py-40'>
      
                <img className='absolute top-[30rem] left-0 md:top-[20rem] md:left-[51rem] md:rotate-0 rotate-90' src={dots} alt="dots" />

                <p className='pl-2 text-2xl text-bold'>Want to make Abroad Visa?</p>
                <h1 className='z-10 py-2 pl-2 text-5xl leading-tight text-bold'>Get free consultation<br/> with us now!</h1>
                <div className='flex flex-row py-2 pl-2'>
                    <button className='px-8 py-3 mr-2 whatsapp'><i class="fa-brands fa-whatsapp"></i> Lets Talk!</button>
                    <button className='px-8 py-3'><a href='#services'>Learn More</a></button>
                </div>
                
            </div>

            <div className='flex flex-col justify-center w-full md:items-end'>
                <img src={heroImage} className='w-full h-full rounded-3xl'/>
            </div>
        </div>
    </div>
  )
}

export default Hero
