import React, {useState} from 'react'
import logoIcon from '../assets/logo.png'
import useScrollPosition from '../hooks/useScrollPosition'

const Navbar = () => {
  const [Nav, setNav] = useState(false)
  const scrollPosition = useScrollPosition()
  const toggleNav = () => setNav(!Nav)
  
  function classFunc(...classes) {
    return classes.filter(Boolean).join(' ')
  }


    return (
      <>
        <nav className={classFunc(scrollPosition > 0 ? 'drop-shadow-xl' : 'drop-shadow-none','w-screen h-[80px] z-20 bg-orange-100 fixed font-Sora')}>
          <div className='flex items-center justify-between h-full px-2'>

            <div className='flex items-center'>
              <h1 className='mr-4 font-bold md:ml-8'><img src={logoIcon} width='100px'/></h1>
              <ul className='hidden md:flex'>
                <li><a className='navlinks' href='#hero'>Home</a></li>
                <li><a className='navlinks' href='#services'>Our Services</a></li>
                <li><a className='navlinks' href='#about'>About Us</a></li>
                <li><a className='navlinks'>Gallery</a></li>
                <li><a className='navlinks'>Contact Us</a></li>
              </ul>
            </div>

            <div className='hidden pr-4 md:flex'>
              <button className='px-8 py-3 whatsapp'><i class="fa-brands fa-whatsapp"></i> Lets Talk!</button>
              <button className='mr-4 text-black bg-transparent border-none'>EN</button>
            </div>

            <div className='px-8 md:hidden' onClick={toggleNav}>
              {Nav ? <i class="fa-solid fa-times text-black"></i> : <i class="fa-solid fa-bars"></i>}
            </div>
          </div>

          <ul className={!Nav ? 'hidden' : 'absolute bg-orange-100 w-full px-8'} >
            <li><a className='navlinks' href='#hero'>Home</a></li>
            <li><a className='navlinks' href='#services'>Our Services</a></li>
            <li ><a className='navlinks' href='#about'>About Us</a></li>
            <li ><a className='navlinks'>Gallery</a></li>
            <li ><a className='navlinks'>Contact Us</a></li>
            <div className='flex flex-col pb-2 my-4 text-center border-b-2'>
              <button className='px-8 py-3 my-3 whatsapp'><i class="fa-brands fa-whatsapp"></i> Lets Talk!</button>
              <button className='px-8 py-3 text-black'>EN</button>
            </div>
          </ul>
        </nav>
      </>
      
    )
}

export default Navbar