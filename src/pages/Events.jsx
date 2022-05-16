import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth0 } from '@auth0/auth0-react'

import rustBanner from '../images/home-gallery/rust-banner.jpg'
import pythonBanner from '../images/home-gallery/python-banner.jpg'
import unityBanner from '../images/home-gallery/unity-banner.jpg'

const Events = () => {
  const eventInfo = 'bg-dark-gray p-10 mb-20 lg:mb-0 rounded-3xl'
  const banner = 'mb-10 rounded-3xl'
  const button = 'text-center uppercase text-xl py-4 inline-block my-0 px-10 w-fit border-ice-blue text-ice-blue border-2 rounded-3xl hover:text-med-blue hover:border-med-blue duration-200 tracking-wide'
  const h2 = 'mt-10 uppercase text-2xl text-purple'
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0()
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <div>
          <h1 className='text-purple text-5xl uppercase font-thin text-center'>Available Events</h1>
          {!isLoading && !isAuthenticated ? (
            <div className='w-full text-center my-10'>
              <button
                className='text-center uppercase text-4xl py-5 px-16 w-full sm:w-auto sm:px-20 border-ice-blue text-ice-blue border-2 rounded-3xl active:border-med-blue active:text-med-blue hover:border-med-blue hover:text-med-blue duration-200 tracking-wide'
                onClick={() => loginWithRedirect()}
              >Sign Up Now!</button>
            </div>
          ) : (
              <div className='h-10'></div>
          )}
          <div className='lg:flex gap-6 text-center'>
            <div className={eventInfo}>
              <img className={banner} src={rustBanner} alt='Banner advertising the rust course avalible on fridays'/>
              <Link className={button} to='/courses/rust'>Join Session</Link>
              <h2 className={h2}>Learning Rust for Beginners</h2>
              <p>Rust fundamentally acts as an extended form of programming languages such as C# and C++, but Rust has better memory and safety checks that make it more efficient. For this course, more experience in programming is recommended but not required. Our instructors at Doceode are ready to educate our participants on the basics of Rust, a language that has been taking the world by storm.  </p>
            </div>
            <div className={eventInfo}>
              <img src={unityBanner} className={banner} alt='Banner advertising the unity course avalible on saturdays'/>
              <Link className={button} to='/courses/unity'>Join Session</Link>
              <h2 className={h2}>How to Build your First Game - Unity</h2>
              <p>Ever wanted to build your own game that people can play? Used with creation of 2D and 3D animation and games, Unity is one of the world's most popular development platforms. In this class, our instructors will guide you with creating a game in Unity, and if participants desire, this game can be published onto app stores where they can be accessed and downloaded by the general public.</p>
            </div>
            <div className={eventInfo}>
              <img src={pythonBanner} className={banner} alt='Banner advertising the python course avalible on mondays'/>
              <Link className={button} to='/courses/python'>Join Session</Link>
              <h2 className={h2}>Learn Simple and Readable Python</h2>
              <p>With the rise of Machine Learning(ML) in different sectors of the world, it has become increasingly beneficial to attain knowledge of Machine Learning. ML is a branch of Artificial Inteligence that uses previous data to analyze and make decisions. Our instructors here at Doceode are right around the corner to help you unlock the countless possibilites. Sign up to get started.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


export default Events