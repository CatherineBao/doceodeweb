import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { motion } from 'framer-motion'

const Course = (props) => {
  const [currentVideo, setCurrentVideo] = useState(-1)
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0()

  const pastVideos = () => {
    if (props.sessions.length === 0) {
      return <p>No videos yet. You're here in time for the <b>very first</b> stream of this course, on {props.nextSessionDate}!</p>
    } else {
      return props.sessions.map((session, s) => {
        return (
          <p
            key={'sesson_' + s}
            className='cursor-pointer text-ice-blue hover:text-med-blue ease-in-out duration-200'
            onClick={() => {setCurrentVideo(s)}}
          >Session {s + 1}: {session.date}</p>
        )
      })
    }
  }
  
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
    <div>
      {!isLoading && !isAuthenticated ? (
        <div className='fixed top-[5rem] left-0 w-screen h-[calc(100vh-5rem)] bg-white-gray/50 flex justify-center items-center'>
          <div className='rounded-3xl bg-dark-gray p-8 text-center w-[calc(100%-2rem)] sm:w-1/2 lg:w-96'>
            <h1 className='text-purple text-5xl uppercase font-thin mb-5'>Log In</h1>
            <p className='text-2xl mb-16'>Thank you for your interest in our content! Please log in to access this course, or create an account.</p>
            <button className='uppercase flex justify-center w-full bg-dark-blue p-5 text-xl rounded-3xl text-ice-blue hover:text-med-blue active:text-med-blue border-ice-blue hover:border-med-blue active:border-med-blue border-2 font-light duration-200' onClick={() => loginWithRedirect()}>Go To Log In Page</button>
          </div>
        </div>
      ) : null}
			<div className='lg:flex gap-8 text-center lg:text-left'>
				<div className='mb-16 lg:w-3/12'>
				<h1 className='text-purple text-5xl uppercase font-thin pb-6 mb-6'>{props.lang}</h1>
				<h3 className='text-ice-blue pb-5 text-xl'>Course Overview</h3>
					<p className='pb-10'>{props.description}</p>
          <h3 className='text-ice-blue pb-5 text-xl'>Previous Lessons</h3>
          <p
            className='cursor-pointer text-ice-blue hover:text-med-blue ease-in-out duration-200 mb-2 font-bold'
            onClick={() => {setCurrentVideo(-1)}}
          >Current stream</p>
          {pastVideos()}
				</div>
				<div className={'rounded-3xl text-center lg:w-9/12 h-full ' + (currentVideo === -1 ? 'p-12 bg-dark-gray' : '')}>
          {currentVideo === -1 ? (
            <div>
              <img className='mb-8 rounded-3xl' src={props.banner} alt='python banner'/>
    					<h1 className='text-purple text-5xl uppercase font-thin mb-6'>{props.title}</h1>
              <h3 className='text-ice-blue pb-5 text-xl'>{props.nextSessionDate}</h3>
     			    <h2 className='text-3xl mb-1'>Come back during the live seminar!</h2>
              <p>
                Until then,
                <Link className='text-ice-blue hover:text-med-blue hover:cursor-pointer duration-200 ml-1' to='/events'>explore </Link>
                past recorded webinars to enhance your coding knowlege:
              </p>
              
              {props.extraContent ? <div className='mt-3'>{props.extraContent}</div> : null}
            </div>
          ) : (
            <iframe className='outline-none rounded-3xl overflow-hidden h-[calc((100vw-2rem)*9/16)] sm:h-[calc((100vw-7rem)*9/16)] lg:h-[calc((100vw-20rem)*81/192)]' width='100%' height='100%' src={'https://www.youtube.com/embed/' + props.sessions[currentVideo].id} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          )}
				</div>
			</div>
		</div>
    </motion.div>
  )
}

export default Course