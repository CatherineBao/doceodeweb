import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const link = 'text-ice-blue text-lg mt-5 hover:text-med-blue duration-200 mt-5 font-thin'
  const h1 = 'uppercase text-white-gray text-xl mb-4 mt-5 lg:mt-0'
  return (
    <div className='bg-dark-gray py-10 mt-10 sm:mt-20 px-4 sm:px-14 lg:px-36'>
  	<div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-x-20 leading-8  '>
  		<div className='lg:w-1/2'>
  			<h3 className='uppercase text-white-gray text-xl mb-4'>Contact us</h3>
  			<p className='text-ice-blue text-lg font-thin'>In need of assistance? Our diligent staff is ready to help you during our business hours, no matter where you are.</p>
  			<Link className='text-ice-blue text-lg mt-5 hover:text-med-blue duration-200 mt-8 pt-5 font-thin' to="/contact"> Learn More &#8594;</Link>
  		</div>
      <div className='flex pt-10 lg:pt-0'>
      		<div className='w-1/2'>
      			<h3 className={h1}>social</h3>
      			<a className={link} href="https://www.instagram.com/?hl=en" target="_blank">Instagram</a> <br/>
      			<a className={link} href="https://www.facebook.com/" target="_blank">Facebook</a> <br/>
      			<a className={link} href="https://www.linkedin.com/" target="_blank">LinkedIn</a> <br/>
      			<a className={link} href="https://www.tiktok.com/en/" target="_blank">TikTok</a>
      		</div>
      </div>
    	<div className='flex items-center justify-center mt-10 lg:w-1/3 lg:mt-0 gap-20 lg-gap-0'>
        <div className='w-1/2'>
    			<h3 className={h1}>Webinars</h3>
    			<a className={link} href="https://doc.rust-lang.org/rustdoc/what-is-rustdoc.html" target="_blank">Rust</a> <br/>
    			<a className={link} href="https://docs.unity3d.com/Manual/index.html" target="_blank">Unity</a> <br/>
    			<a className={link} href="https://docs.python.org/3/" target="_blank">Python</a>
    		</div>
    		<div className='w-1/2 lg:mt-0'>
    			<h3 className={h1}>Legal</h3>
  				<Link className={link} to="/legal/terms-of-service">Terms of Service</Link> <br/>
          <Link className={link} to="/legal/privacy-policy">Privacy Policy</Link>
    		</div>
      </div>
  	</div>
      <div className='text-[0.6em] text-white-gray text-center mt-10 font-bold'>
        © 2020 CATHERINE BAO & ROSE NUFFER. TIMPANOGOS HIGHSCHOOL. NO COPYRIGHT MATERIALS USED.
      </div>
      </div>
  )
}

export default Footer
