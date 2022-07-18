import AOS from 'aos';
import 'aos/dist/aos.css';

import React from 'react'

export default function teamCard (props) {
    AOS.init();
    const name = props.name
    const title = props.title
    const desc = props.desc
    const path = props.path;
  
    return (
    <>
        <div className="basis-1/3" data-aos="fade-up">
            <div className="flex flex-col justify-center w-auto mx-auto bg-orange-100 md:w-96 rounded-2xl">
                <img className="object-cover object-center w-auto aspect-square md:w-96 rounded-t-2xl" src={path} alt={name}/>
                <div className="p-6">
                    <small className="text-gray-900 text-md">{title}</small>
                    <h1 className="pb-2 text-2xl font-medium text-gray-700">{name}</h1>
                    <p className="leading-6 text-gray-500 text">{desc}</p>
                </div>
            </div>
         </div>
    </>

  )}