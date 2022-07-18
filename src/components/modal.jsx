import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Modal (props) {
  AOS.init();
  const title = props.title
  const desc = props.desc
  const hide = props.hide
  
    return (
    <>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6 y">
              <div className="relative flex flex-col w-full bg-orange-100 border-0 rounded-lg shadow-lg outline-none focus:outline-none" data-aos="fade-down">
                <div className="relative flex-auto p-4">
                  <h3 className="text-3xl font-semibold">{title}</h3><br/>
                  <p className="text-xs leading-relaxed text-black">{desc}</p>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-orange-200 border-solid rounded-b">
                  <button className="text-xs font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none hover:text-red-500" type="button" onClick={hide}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>

  )}
