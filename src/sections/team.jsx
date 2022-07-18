import React from 'react'
import TeamCard from '../components/teamcard'
import OurTeam from '../data/dataTeam'

const Team = () => {
    
  return (
    <div>
      <section id='about'>
        <div className='relative flex flex-col justify-between w-full font-Sora rounded-3xl' id='hero'>
            <div className='grid bg-orange-200 md:grid-cols-2'>
                <div className='flex flex-col justify-center w-full px-5 pt-16 pb-6 md:pt-20 md:pl-10 md:items-start'>
                    <h1 className='z-10 py-2 text-5xl leading-tight text-bold'><i class="fa-solid fa-people-group"></i> Our Team</h1><br/>
                    <div class="flex flex-col md:flex-row gap-10">
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
