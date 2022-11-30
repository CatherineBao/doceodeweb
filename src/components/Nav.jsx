import React, { useState, useEffect } from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth0 } from '@auth0/auth0-react'

import LoginBtn from './LoginBtn'
import LogoutBtn from './LogoutBtn'

import aboutIcon from '../images/nav-icons/lightbulb-icon.png'
import contactIcon from '../images/nav-icons/contact-icon.png'
import resourcesIcon from '../images/nav-icons/gear-icon.png'
import companyLogo from '../images/nav-icons/logo.png'

const Nav = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const navClass = 'w-24 sm:w-60 h-20 flex justify-center items-center sm:hover:tracking-widest hover:text-ice-blue ease-in-out duration-200'
  const { isAuthenticated } = useAuth0()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
      >
    <div className='fixed font-lato font-light text-lg text-white-gray w-full z-20'>
      <Link to='/' className='fixed top-0 left-0 right-0 w-20 h-20 hidden sm:flex justify-center items-center'>
        <img src={companyLogo} alt='Doceode logo' className='w-8/12'/>
      </Link>
      <div className='uppercase flex justify-evenly sm:justify-center w-full items-center bg-dark-blue'>
        <NavLink className={navClass} onClick={() => setDropDownOpen(false)} to='/'>Home</NavLink>
        <NavLink className={navClass} onClick={() => setDropDownOpen(false)} to='/events'>Events</NavLink>
        <div className={navClass + ' cursor-pointer'} onClick={() => setDropDownOpen(!dropDownOpen)}>
          <div className='mr-2'>About</div>
          <FontAwesomeIcon icon='fa-solid fa-angle-down' />
        </div>
        <div className='p-2 sm:m-7 flex justify-center items-center sm:fixed sm:top-0 sm:right-0 sm:w-auto sm:h-6 sm:flex justify-center items-center'>
        {isAuthenticated ? <LogoutBtn /> : <LoginBtn />}
        </div>
      </div>
      
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: dropDownOpen ? 'auto' : '0' }}
        transition={{ duration: 0.2 }}
        className='overflow-hidden'
      >
        <div className='flex flex-col lg:flex-row justify-center text-purple bg-dark-blue transition ease-in-out duration-200'>
          <Link className='flex items-center lg:block w-auto lg:w-80 p-4 sm:p-6 my-1 mx-2 lg:my-4 lg:mx-4 hover:bg-dark-gray bg-dark-gray lg:bg-dark-blue rounded-3xl ease-in-out duration-200' to='/about' onClick={() => setDropDownOpen(false)}>
              <img className='w-0 sm:w-auto sm:mr-5 w-20 h-20 sm:block lg:mr-0' src={aboutIcon} alt='A light bulb icon that represents the information drop down section'/>
              <div>
                <div className='text-xl uppercase font-normal'>Call to Action</div>
                <div className='leading-none sm:leading-normal'>Find out more about Doceode, our values, and mission:</div>
                <div className='h-0 sm:h-auto invisible sm:visible lg:pt-2 font-normal'>
                  Learn More
                  <FontAwesomeIcon className='ml-2' icon='fa-solid fa-arrow-right' />
                </div>
              </div>
          </Link>
          <Link className='flex items-center lg:block w-auto lg:w-80 p-4 sm:p-6 my-1 mx-2 lg:my-4 lg:mx-4 hover:bg-dark-gray rounded-3xl ease-in-out duration-200 bg-dark-gray lg:bg-dark-blue hover:dark-blue' to='/contact' onClick={() => setDropDownOpen(false)}>
              <img className='w-0 sm:w-auto sm:mr-5 w-20 h-20 sm:block lg:mr-0' src={contactIcon} alt='Mail and phone symbol'/>
              <div>
                <div className='text-xl uppercase font-normal'>Contact</div>
                <div className='leading-none sm:leading-normal'>Have questions for us? Contact us. We're sure to get back to you!</div>
                <div className='h-0 sm:h-auto invisible sm:visible lg:pt-2 font-normal'>
                  Learn More
                  <FontAwesomeIcon className='ml-2' icon='fa-solid fa-arrow-right' />
                </div>
              </div>
          </Link>
          <Link className='flex items-center lg:block w-auto lg:w-80 p-4 sm:p-6 my-1 mx-2 lg:my-4 lg:mx-4 hover:bg-dark-gray rounded-3xl ease-in-out duration-200 bg-dark-gray lg:bg-dark-blue hover:dark-blue' to='/resources' onClick={() => setDropDownOpen(false)}>
              <img className='w-0 sm:w-auto sm:mr-5 w-20 h-20 sm:block lg:mr-0' src={resourcesIcon} alt='Gears symbol representing the drop down to resources used'/>
              <div>  
                <div className='text-xl uppercase font-normal'>Resources Used</div>
                <div className='leading-none sm:leading-normal'>View resources used in the development of this website: </div>
                <div className='h-0 sm:h-auto invisible sm:visible lg:pt-2 font-normal'>
                  Learn More
                  <FontAwesomeIcon className='ml-2' icon='fa-solid fa-arrow-right' />
                </div>
              </div>
          </Link>
        </div>
      </motion.div>
      
      {dropDownOpen ? (
        <div className='w-full h-screen' onClick={() => setDropDownOpen(false)}></div>
      ) : null}
      
      <Outlet />
    </div>
    </motion.div>
  )
}

export default Nav
