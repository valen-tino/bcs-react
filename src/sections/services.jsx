import React, {useState} from 'react'
import visa from '../assets/visa-abroad.svg'
import dots from '../assets/dots.svg'
import bali from '../assets/visa-bali.svg'
import dataVisaAbroad from '../data/dataVisaAbroad'
import dataVisaBali from '../data/dataVisaBali'
import Modal from '../components/modal'

const Services = () => {
    const [modal,setModal] = useState(false)
    const [tempData,setTempData] = useState([])
    
    const getData = (title,desc) => {
        let tempData = [title,desc];
        setTempData(item => [1,...tempData]);
        return setModal(true)
    }
  
    return (
      <div className='relative flex flex-col justify-between w-full h-screen bg-orange-100 font-Sora'>
          <section id='services'>
          <img className='absolute top-[45rem] left-0 md:top-[20rem] md:left-[-15vh] rotate-180 z-10 invisible md:visible' src={dots} alt="dots" />
          
          <div className='grid md:grid-cols-2 max-w-[1240px] m-auto rounded-full pt-5'>
                <div className='flex flex-col justify-center visible w-full md:items-end sm:hidden'>
                    <div className='p-10 bg-orange-200 rounded-l-full rounded-br-full'>
                        <img src={visa} className='z-10 w-full h-full'/>
                    </div>
                </div>
                  
                  <div className='flex flex-col justify-center w-full gap-5 py-0 md:items-start md:px-20 md:py-40'>
                      
                      <h1 className='z-10 py-2 pl-2 text-5xl leading-tight text-bold'>Visa Assistance Abroad</h1>
                      <p className='pl-2 text-sm text-bold'>We offer visa assistance services to a comprehensive range of visa services from Indonesia to countries in the Asia Pacific, Europe and America. Our services range from helping you apply for a visa to providing the necessary documents for your application. We also assist with any enquiries around the process of obtaining a visa.</p>
                      <h1 className='pl-2 text-lg text-bold'>Where do you want to go?</h1>
                      <div className='flex flex-wrap gap-2 py-2 pl-2'>
                          {dataVisaAbroad.VisaAbroad.map((item,key) => {
                              return (
                                  <button className='px-4 py-1 modal-open' key={key} onClick={() => getData(item.title, item.desc)}>{item.title}</button>
                              )
                          })} 
                      </div>                   
                        
                  </div>
                  
                  <div className='flex flex-col justify-center invisible w-full sm:visible md:items-end'>
                      <div className='p-10 bg-orange-200 rounded-l-full rounded-br-full'>
                          <img src={visa} className='z-10 w-full h-full'/>
                      </div>
                  </div>
          </div>
                        
          <div className='grid md:grid-cols-2 max-w-[1240px] m-auto rounded-full pt-10'>
                  <div className='flex flex-col justify-center w-full md:items-end'>
                      <div className='p-10 bg-orange-200 rounded-r-full rounded-bl-full'>
                          <img src={bali} className='z-10 w-full h-full'/>
                      </div>
                  </div>
                        
                  <div className='flex flex-col justify-center w-full gap-5 py-0 md:items-start md:px-20 md:py-40'>
                        
                      <h1 className='z-10 py-2 pl-2 text-5xl leading-tight text-bold'>Visa Assistance in Bali</h1>
                      <p className='pl-2 pr-2 text-sm text-bold'>We also offer visa assistance services in Bali, Indonesia. Our services range from helping you apply for a visa to providing the necessary documents for your application. We also assist with any enquiries around the process of obtaining a visa.</p>
                      <h1 className='pl-2 pr-2 text-lg text-bold'>Where do you want to go?</h1>
                      <div className='flex flex-wrap gap-2 py-2 pr-2'>
                      {dataVisaBali.VisaBali.map((item,key) => {
                              return (
                                  <button className='px-4 py-1 modal-open' key={key} onClick={() => getData(item.title, item.desc)}>{item.title}</button>
                              )
                          })}
                          
                      </div>
                        
                  </div>
                        
          </div>
                        
          <div className='grid md:grid-cols-2 max-w-[1240px] m-auto rounded-full pt-10'>
            
                <div className='flex flex-col justify-center visible w-full md:items-end sm:hidden'>
                      <div className='p-10 bg-orange-200 rounded-l-full rounded-br-full'>
                          <img src={visa} className='z-10 w-full h-full'/>
                      </div>
                  </div>
                  
                  <div className='flex flex-col justify-center w-full gap-5 py-0 md:items-start md:px-20 md:py-40'>
                        
                      <h1 className='z-10 py-2 pl-2 text-5xl leading-tight text-bold'>Wedding Ceremony Organizer</h1>
                      <p className='pl-2 text-sm text-bold'>
                        <h3 className='text-md'>For Bali Only.</h3><br/>
                        A wedding is a very important event in Indonesia, and especially in Bali. Indonesians and expats marry in Bali.  Please don't hesitate to get in touch with us if you're interested in getting legally married in Bali. From A to Z, we'll help you succeed. In Indonesia, a religious ceremony is necessary in order to fulfill the legal requirements for marriage. 
                        Our company organizes the following religious ceremonies: ,Moslem, Christian, Hindu, and Buddhism.
                      </p>
                      <h1 className='pl-2 text-lg text-bold'>Feel free to contact us!</h1>
                      <div className='flex flex-wrap gap-2 py-2 pr-2'>
                      <button className='px-8 py-3 mr-2 whatsapp'><i class="fa-brands fa-whatsapp"></i> Lets Talk!</button>
                      </div>
                      
                        
                  </div>
                  
                  <div className='flex flex-col justify-center invisible w-full md:items-end sm:visible'>
                      <div className='p-10 bg-orange-200 rounded-l-full rounded-br-full'>
                          <img src={visa} className='z-10 w-full h-full'/>
                      </div>
                  </div>
          </div>
          
          </section>
          {modal === true ? <Modal title={tempData[1]} desc={tempData[2]} hide={() => setModal(false)}/>: ''}
      </div>
  )
}

export default Services