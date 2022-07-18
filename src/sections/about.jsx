import AOS from 'aos';
import 'aos/dist/aos.css';

import React from 'react'
import Vinsen from '../assets/bali.jpg'

const About = () => {
  AOS.init();
  return (
    <div>
        <section id='about'>
        <div className='relative flex flex-col justify-between w-full max-h-fit font-Sora rounded-3xl' id='hero'>
            <div className='grid bg-orange-200 md:grid-cols-2'>
                
                <div className='flex flex-col justify-center w-full md:items-end' data-aos="fade-right">
                <img src={Vinsen} className='w-full h-full rounded-3xl md:rounded-tr-3xl md:rounded-b-3xl'/>
                </div>
                
                <div className='flex flex-col justify-center w-full px-5 pt-16 pb-6 md:pt-20 md:pl-10 md:items-start'>
                    <h1 className='z-10 py-2 text-5xl leading-tight text-bold' data-aos="fade-left"><i className="fa-solid fa-circle-info"></i> About Us</h1><br/>
                    <p data-aos="fade-left">
                    Bali Connection Service (BCS) was first built in 2005. <br/><br/>
                    BCS, our Company has many years of experience in helping the local and expatriate community in Indonesia.<br/><br/>

                    BCS (agent) has more than 20 years experience in assisting all types of travel documents including visas abroad and permit in Bali/Indonesia.<br/><br/>

                    Especially Visa assistance abroad, as we have known that many Visa applicants were denied their visa by The Embassies due to their documents being incomplete.<br/><br/>

                    Therefore We, BCS specialize in all aspects of visa requirements and we can guide you step by step in your visa application, until you have a successful outcome.<br/><br/>

                    Our friendly staff will assist you with holiday visas, business visas, retirement visas, spouse /partner visas in Australia, Visa Extension, Social visas, etc.<br/><br/>

                    We can arrange all your visas in Bali or visas abroad with guarantee 99 % the visa will be approved, Because BCS KNOW WHAT THE EMBASSIES /IMMIGRATION OFFICES NEED.<br/><br/>

                    WE SERVE YOU BETTER AS YOUR SATISFACTION IS OUR GOAL
                    </p>
                </div>

                
            </div>
        </div>
        </section>
    </div>
  )
}

export default About
