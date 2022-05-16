import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

import aboutImg from './images/home-gallery/home-page-about.png'
import doceodeBanner from './images/home-gallery/doceode-banner.jpg'
import pythonBanner from './images/home-gallery/python-banner.jpg'
import unityBanner from './images/home-gallery/unity-banner.jpg'
import rustBanner from './images/home-gallery/rust-banner.jpg'

const Slideshow = () => {
  const images = [doceodeBanner, pythonBanner, unityBanner, rustBanner]
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (imgIndex < images.length - 1) {
        setImgIndex(imgIndex + 1)
      } else {
        setImgIndex(0)
      }
    }, 7000)

    return () => clearInterval(timer)
  }, [imgIndex, setImgIndex])

  const incrementIndex = (forward) => {
    if (forward) {
      if (imgIndex < images.length - 1) {
        setImgIndex(imgIndex + 1)
      } else {
        setImgIndex(0)
      }
    } else {
      if (imgIndex > 0) {
        setImgIndex(imgIndex - 1)
      } else {
        setImgIndex(images.length - 1)
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
      <div className='mb-14'>
        <div className='flex items-center'>
          <div className='text-3xl sm:text-4xl w-10 sm:h-14 z-10 -mr-10 sm:w-8'>
            <button className='bg-transparent sm:bg-dark-blue rounded-3xl flex items-center justify-center w-full h-full' onClick={() => {incrementIndex(false)}}>
              <FontAwesomeIcon className='invisible sm:visible' icon='fa-solid fa-angle-left' />
            </button>
          </div>
          <img className='rounded-3xl w-full border-4 border-white-gray' src={images[imgIndex]} alt='banners of the classes avalible at doceode'></img>
          <div className='text-3xl sm:text-4xl w-10 sm:h-14 sm:w-8 -ml-10'>
            <button className='bg-transparent sm:bg-dark-blue rounded-3xl flex items-center justify-center w-full h-full' onClick={() => {incrementIndex(true)}}>
              <FontAwesomeIcon className='invisible sm:visible' icon='fa-solid fa-angle-right' />
            </button>
          </div>
        </div>
        <div className='flex justify-center mt-3'>
          {images.map((image, i) => {
            if (imgIndex == i) {
              return (
                <div
                  key={'slideshow_btn' + i}
                  className='mx-2 w-4 h-4 bg-white-gray rounded-full cursor-pointer'
                  onClick={() => setImgIndex(i)}
                ></div>
              )
            }
            return (
              <div
                key={'slideshow_btn' + i}
                className='mx-2 w-4 h-4 bg-white-gray rounded-full flex items-center justify-center cursor-pointer'
                onClick={() => setImgIndex(i)}
              >
                <div className='w-2 h-2 bg-dark-blue rounded-full'></div>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

const App = () => {
	return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
      >
		<div>
			<Slideshow />
			<div className='lg:grid lg:grid-cols-[50%_50%]'>
				<div className='flex items-center justify-center'>
					<img
						className='mb-5 lg:mb-0'
						src={aboutImg}
						alt='An abstract graphic with 2 people representing participating in the sessions.'
					/>
				</div>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-center text-purple text-5xl uppercase font-thin mb-5'>
						Learn To Code
					</h1>
					<p className='text-xl text-center leading-normal mb-10'>Ever wanted to learn a programming language? Say no more! Doceode has you covered with courses to enhance your coding capabilities. Worried about not having time? Our programs are flexible and allow you to get the most of your experience. Additionally, our courses are all free, therefore everyone has an opportunity to participate and receive the benefits of coding.
					</p>
					<Link
						className='text-center uppercase text-4xl py-5 w-full sm:w-auto sm:px-20 border-ice-blue text-ice-blue border-4 rounded-3xl active:border-med-blue active:text-med-blue hover:border-med-blue hover:text-med-blue duration-200'
						to='/events'
					>
						Sign Up
					</Link>
				</div>
			</div>
		</div>
    </motion.div>
	)
}

export default App