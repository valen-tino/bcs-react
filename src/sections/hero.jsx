import AOS from 'aos';
import 'aos/dist/aos.css';

import React from 'react'
import heroImage from '../assets/hero.webp'

const Hero = () => {
AOS.init();
  return (
    <div className='relative flex flex-col justify-between w-full h-screen -100 font-Sora rounded-3xl' id='hero'>
        <div className='grid bg-orange-200 md:grid-cols-2'>
            <div className='flex flex-col justify-center w-full pb-6 pl-4 pt-28 md:pt-0 md:pl-10 md:items-start'>

                <p className='text-2xl text-bold' data-aos="fade-down">Want to make Abroad Visa?</p>
                <h1 className='z-10 py-2 text-5xl leading-tight text-bold' data-aos="fade-down">Get free consultation<br/> with us now!</h1>
                <div className='flex flex-row py-2' data-aos="fade-up">
                    <button className='px-8 py-3 mr-2 whatsapp' ><i className="fa-brands fa-whatsapp"></i> Lets Talk!</button>
                    <button className='px-8 py-3'><a href='#services'>Learn More</a></button>
                </div>
                
            </div>
            
            <div className='flex flex-col justify-center w-full md:items-end'>
                <img src={heroImage} className='w-full h-full rounded-3xl' alt='deco-only'/>
            </div>

            <div class="animate-bounce absolute z-0 invisible md:right-[48%] md:left-[48%] md:bottom-[20px] md:visible px-5 py-4 rounded-full bg-white text-center shadow-lg">
                <i class="fa-solid fa-angles-down scale-150"></i>
            </div>
        </div>
    </div>
  )
}

export default Hero
