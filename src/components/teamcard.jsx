import React from 'react'

export default function teamCard (props) {
    const name = props.name
    const title = props.title
    const desc = props.desc
    const path = "src/"+props.path; 
  
    return (
    <>
        <div class="basis-1/3">
            <div class="mx-auto flex w-auto md:w-96 flex-col justify-center bg-orange-100 rounded-2xl ">
                <img class="aspect-square w-auto md:w-96 rounded-t-2xl object-cover object-center" src={path}/>
                <div class="p-6">
                    <small class="text-gray-900 text-md">{title}</small>
                    <h1 class="text-2xl font-medium text-gray-700 pb-2">{name}</h1>
                    <p class="text text-gray-500 leading-6">{desc}</p>
                </div>
            </div>
         </div>
    </>

  )}