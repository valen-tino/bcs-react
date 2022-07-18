import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import visa from '../assets/visa-abroad.svg'
import dots from '../assets/dots.svg'
import bali from '../assets/visa-bali.svg'
import wedding from '../assets/married.webp'
import translate from '../assets/translate.svg'
import travel from '../assets/travel.svg'
import info from '../assets/info.svg'

import dataVisaAbroad from '../data/dataVisaAbroad'
import dataVisaBali from '../data/dataVisaBali'
import Modal from '../components/modal'

const Services = () => {
    AOS.init();
    const [modal, setModal] = useState(false)
    const [tempData, setTempData] = useState([])

    const getData = (title, desc) => {
        let tempData = [title, desc];
        setTempData(item => [1, ...tempData]);
        return setModal(true)
    }

    return (
        <>
            <section id='services'>
                <div className='relative flex flex-col justify-between w-full px-5 bg-orange-100 font-Sora md:p-0'>
                    <img className='absolute top-[45rem] left-0 md:top-[20rem] md:left-[-15vh] rotate-180 z-10 invisible md:visible' src={dots} alt="dots" />

                    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto rounded-full pt-5'>
                        <div className='flex flex-col justify-center visible w-full md:items-end sm:hidden' data-aos="fade-down">
                            <div className='p-10 bg-orange-200 rounded-l-full rounded-br-full'>
                                <img src={visa} className='z-10 w-full h-full' alt='Visa Assistance Abroad'/>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center w-full gap-5 py-0 md:items-start md:px-20 md:py-40'>

                            <h1 className='z-10 py-2 pl-2 text-5xl leading-tight text-bold' data-aos="fade-down">Visa Assistance Abroad</h1>
                            <p className='pl-2 text-sm text-bold' data-aos="fade-down">We offer visa assistance services to a comprehensive range of visa services from Indonesia to countries in the Asia Pacific, Europe and America. Our services range from helping you apply for a visa to providing the necessary documents for your application. We also assist with any enquiries around the process of obtaining a visa.</p>
                            <h1 className='pl-2 text-lg text-bold' data-aos="fade-down">Where do you want to go?</h1>
                            <div className='flex flex-wrap gap-2 pr-4'>
                                {dataVisaAbroad.VisaAbroad.map((item, key) => {
                                    return (
                                        <button className='px-4 py-1 modal-open' data-aos="fade-up" key={key} onClick={() => getData(item.title, item.desc)}>{item.title}</button>
                                    )
                                })}
                            </div>

                        </div>

                        <div className='flex flex-col justify-center invisible w-full sm:visible md:items-end' data-aos="fade-down">
                            <div className='p-10 bg-orange-200 rounded-l-full rounded-br-full '>
                                <img src={visa} className='z-10 w-full h-full' alt='Visa Assistance Abroad'/>
                            </div>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto rounded-full pt-10'>
                        <div className='flex flex-col justify-center w-full md:items-end' data-aos="fade-down">
                            <div className='p-10 bg-orange-200 rounded-r-full rounded-bl-full'>
                                <img src={bali} className='z-10 w-full h-full' alt='Visa Assistance in Bali'/>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center w-full gap-5 py-0 md:items-start md:px-20 md:py-40'>

                            <h1 className='z-10 py-2 pl-2 text-5xl leading-tight text-bold' data-aos="fade-down">Visa Assistance in Bali</h1>
                            <p className='pl-2 pr-2 text-sm text-bold' data-aos="fade-down">We also offer visa assistance services in Bali, Indonesia. Our services range from helping you apply for a visa to providing the necessary documents for your application. We also assist with any enquiries around the process of obtaining a visa.</p>
                            <h1 className='pl-2 pr-2 text-lg text-bold' data-aos="fade-down">Where do you want to go?</h1>
                            <div className='flex flex-wrap gap-2 py-2 pr-4'>
                                {dataVisaBali.VisaBali.map((item, key) => {
                                    return (
                                        <button className='px-4 py-1 modal-open' data-aos="fade-up" key={key} onClick={() => getData(item.title, item.desc)}>{item.title}</button>
                                    )
                                })}

                            </div>

                        </div>

                    </div>

                    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto rounded-full pt-10'>

                        <div className='flex flex-col justify-center visible w-full md:items-end sm:hidden' data-aos="fade-down">
                            <div className='p-10 bg-orange-200 rounded-l-full rounded-br-full'>
                                <img src={wedding} className='z-10 w-full h-full' alt='Wedding Ceremony Organizer'/>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center w-full gap-5 py-0 md:items-start md:px-20 md:py-40'>

                            <h1 className='z-10 py-2 pl-2 text-5xl leading-tight text-bold' data-aos="fade-down">Wedding Ceremony Organizer</h1>
                            <p className='pl-2 text-sm' data-aos="fade-down">
                                For Bali Only.<br /><br />
                                A wedding is a very important event in Indonesia, and especially in Bali. Indonesians and expats marry in Bali.  Please don't hesitate to get in touch with us if you're interested in getting legally married in Bali. From A to Z, we'll help you succeed. In Indonesia, a religious ceremony is necessary in order to fulfill the legal requirements for marriage.
                                Our company organizes the following religious ceremonies: ,Moslem, Christian, Hindu, and Buddhism.
                            </p>
                            <h1 className='pl-2 text-lg text-bold' data-aos="fade-down">See Our Gallery!</h1>
                            <div className='flex flex-wrap gap-2 py-2 pr-2'>
                                <button className='px-8 py-3' data-aos="fade-up"><i className="fa-solid fa-images"></i> Our Gallery</button>
                            </div>


                        </div>

                        <div className='flex flex-col content-center justify-center invisible w-full md:items-end sm:visible' data-aos="fade-down">
                            <div className='p-10 bg-orange-200 rounded-l-full rounded-br-full'>
                                <img src={wedding} className='z-10 w-full h-full' alt='Wedding Ceremony Organizer'/>
                            </div>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto rounded-full pt-10'>
                        <div className='flex flex-col justify-center w-full md:items-end' data-aos="fade-down">
                            <div className='p-10 bg-orange-200 rounded-r-full rounded-bl-full'>
                                <img src={translate} className='z-10 w-full h-full' alt='Translate Document'/>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center w-full gap-5 py-0 md:items-start md:px-20 md:py-40'>

                            <h1 className='z-10 py-2 pl-2 text-5xl leading-tight text-bold' data-aos="fade-down">Translate Document</h1>
                            <div className='pl-2 pr-2 text-sm text-bold'>
                                <div data-aos="fade-down">
                                    BCS will also provide the services of Translation any documents into any
                                    languages with a certified translator Sworn in Indonesia.<br /><br />
                                </div>


                                <div className="flex flex-col">
                                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
                                            <div className="overflow-hidden">
                                                <table className="min-w-full text-center">
                                                    <thead>
                                                        <tr data-aos="fade-down">
                                                            <th colSpan="3" scope="col" className="py-1 text-sm font-medium text-left text-gray-900 ">
                                                                Such As:
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className='text-left'>
                                                        <tr data-aos="fade-down">
                                                            <td className="py-1 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                                - KTP / ID CARD
                                                            </td>
                                                            <td className="py-1 text-sm font-light text-gray-900 whitespace-nowrap">
                                                                -Akte Nikah / <br />Marriage Certifcate
                                                            </td>
                                                        </tr>
                                                        <tr data-aos="fade-down">
                                                            <td className="py-1 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                                - Kartu Keluarga / <br />Family Card
                                                            </td>
                                                            <td className="py-1 text-sm font-light text-gray-900 whitespace-nowrap">
                                                                - Surat Penetapan Pengadilan <br />Hak Asuh Anak
                                                            </td>
                                                        </tr>
                                                        <tr data-aos="fade-down">
                                                            <td className="py-1 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                                - Akte lahir / <br />Birth Certificate
                                                            </td>
                                                            <td className="py-1 text-sm font-light text-gray-900 whitespace-nowrap">
                                                                - Surat Penetapan Pengadilan <br />Hak Asuh Anak
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div data-aos="fade-down">
                                    Provided by Sworn Translation Services in Indonesia for Bahasa Indonesia,
                                    English, Chinese, Japanese, Korean, German, Arabic, Thai, Vietnamese,
                                    Russian, Spanish, French, Dutch, Italian, etc.
                                </div>
                            </div>

                            <h1 className='pl-2 pr-2 text-lg text-bold' data-aos="fade-down">Please feel free to contact us anytime.</h1>
                            <div className='flex flex-wrap gap-2 py-2 pr-2'>
                                <button className='px-8 py-3 whatsapp' data-aos="fade-up"><i className="fa-brands fa-whatsapp"></i> Lets Talk!</button>
                            </div>
                        </div>

                    </div>

                    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto rounded-full pt-10'>

                        <div className='flex flex-col justify-center visible w-full md:items-end sm:hidden' data-aos="fade-down">
                            <div className='p-10 bg-orange-200 rounded-l-full rounded-br-full'>
                                <img src={travel} className='z-10 w-full h-full' alt='Travel Insurance'/>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center w-full gap-5 py-0 md:items-start md:px-20 md:py-40'>

                            <h1 className='z-10 py-2 pl-2 text-5xl leading-tight text-bold' data-aos="fade-down">Travel Insurance</h1>
                            <p className='pl-2 text-sm text-bold' data-aos="fade-down">
                                <h3 className='text-md'>Issuing CHUBB Travel insurance only.</h3><br />
                                <h1 className='text-lg'>All you need to know to travel smarter.</h1>
                                Learn more about our product and get some travel tips while you are preparing for your next vacation.<br /><br />
                                Click for further information :  <button className='px-2 py-1'>Click Here!</button><br /><br />
                                To reserve and book your travel insurance online, kindly please contact us
                            </p>

                            <div className='flex flex-wrap gap-2 py-2 pr-2' data-aos="fade-up">
                                <button className='px-8 py-3 whatsapp'><i className="fa-brands fa-whatsapp"></i> Lets Talk!</button>
                                <button className='px-8 py-3'><i className="fa-solid fa-envelope"></i> Email Us!</button>
                            </div>


                        </div>

                        <div className='flex flex-col content-center justify-center invisible w-full md:items-end sm:visible' data-aos="fade-down">
                            <div className='p-10 bg-orange-200 rounded-l-full rounded-br-full'>
                                <img src={travel} className='z-10 w-full h-full' alt='Travel Insurance'/>
                            </div>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto rounded-full pt-10'>
                        <div className='flex flex-col justify-center w-full md:items-end' data-aos="fade-down">
                            <div className='p-10 bg-orange-200 rounded-r-full rounded-bl-full'>
                                <img src={info} className='z-10 w-full h-full' alt='Other Services'/>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center w-full gap-5 py-0 md:items-start md:px-20 md:py-40'>

                            <h1 className='z-10 py-2 pl-2 text-5xl leading-tight text-bold' data-aos="fade-down">Other Services</h1>
                            <div className='pl-2 pr-2 text-sm text-bold'>
                                <div data-aos="fade-down">Kami melayani pengurusan dokumen</div>

                                <div className="flex flex-col">
                                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
                                            <div className="overflow-hidden">
                                                <table className="min-w-full text-center">
                                                    <thead>
                                                        <tr data-aos="fade-down">
                                                            <th colSpan="3" scope="col" className="py-1 text-sm font-medium text-left text-gray-900 ">
                                                                Seperti:
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className='text-left'>
                                                        <tr data-aos="fade-down">
                                                            <td className="py-1 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                            - Cetak KTP 
                                                            </td>
                                                            <td className="py-1 text-sm font-light text-gray-900 whitespace-nowrap">
                                                            - Akte Lahir Elektronik
                                                            </td>
                                                        </tr>
                                                        <tr data-aos="fade-down">
                                                            <td className="py-1 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                            - KK Elektronik
                                                            </td>
                                                            <td className="py-1 text-sm font-light text-gray-900 whitespace-nowrap">
                                                            - Akte Cerai
                                                            </td>
                                                        </tr>
                                                        <tr data-aos="fade-down">
                                                            <td className="py-1 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                            - Surat Pengakuan <br/>Anak
                                                            </td>
                                                            <td className="py-1 text-sm font-light text-gray-900 whitespace-nowrap">
                                                            - SKTT untuk WNA
                                                            </td>
                                                        </tr>
                                                        <tr data-aos="fade-down">
                                                            <td className="py-1 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                            - Pelaporan <br/>perkawinan<br/>campur
                                                            </td>
                                                            <td className="py-1 text-sm font-light text-gray-900 whitespace-nowrap">
                                                            -  Samsat motor dan <br/> mobil khusus wilayah <br/> Denpasar, Badung <br/>dan Gianyar
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                
                            </div>

                            <h1 className='pl-2 pr-2 text-lg text-bold' data-aos="fade-down">Please feel free to contact us anytime.</h1>
                            <div className='flex flex-wrap gap-2 py-2 pr-2'>
                                <button className='px-8 py-3 whatsapp' data-aos="fade-up"><i className="fa-brands fa-whatsapp"></i> Lets Talk!</button>
                            </div>
                        </div>

                    </div>

                    {modal === true ? <Modal title={tempData[1]} desc={tempData[2]} hide={() => setModal(false)} /> : ''}
                </div>
            </section>
            <br />
        </>

    )
}

export default Services