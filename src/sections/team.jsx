import AOS from 'aos';
import 'aos/dist/aos.css';

import React from 'react'
import TeamCard from '../components/teamcard'
import OurTeam from '../data/dataTeam'
import pattern from '../assets/pattern.svg'
import dots from '../assets/dots.svg'

const Team = () => {
AOS.init();
  return (
    <div>
      <section id='about'>
        <div className='relative flex flex-col justify-between w-full font-Sora rounded-3xl' id='hero'>
        <img className='absolute z-0 invisible md:bottom-0 md:right-0 md:visible' src={pattern} alt="dots" data-aos="fade-left"/>
            <div className='grid bg-orange-200 md:grid-cols-2'>
                <div className='flex flex-col justify-center w-full px-5 pt-16 pb-6 md:pt-20 md:pl-10 md:items-start'>
                    <h1 className='z-10 py-2 text-5xl leading-tight text-bold' data-aos="fade-right"><i className="fa-solid fa-people-group"></i> Our Team</h1><br/>
                    <div className="z-10 flex flex-col gap-10 md:flex-row">
                        {OurTeam.OurTeam.map((item,key) => {
                             return (
                                <TeamCard key={key} name={item.name} title={item.title} desc={item.desc} path={item.path}/>
                             )
                         })}
                    </div>
                </div>

            </div>
        </div>
        </section>
    </div>
  )
}

export default Team
