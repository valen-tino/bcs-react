import React from 'react'

export default function Modal (props) {
  const title = props.title
  const desc = props.desc
  const hide = props.hide
  
    return (
    <>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6 y">
              <div className="relative flex flex-col w-full bg-orange-100 border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/* <div className="flex items-start justify-between p-5 border-b border-orange-200 border-solid rounded-t">
                  
                  <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none" onClick={hide}>
                    <span className="block w-6 h-6 ">
                    <i className="text-teal-900 fa-solid fa-times"></i>
                    </span>
                  </button>
                </div> */}
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
