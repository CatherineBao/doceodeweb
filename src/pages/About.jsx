import React from 'react'

import { motion } from 'framer-motion'

import aboutImage1 from '../images/about-images/about-graphic-one.png'
import aboutImage2 from '../images/about-images/about-graphic-two.png'

const About = () => {
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
		<div>
      <h1 className='text-center text-purple text-5xl uppercase font-thin'>ABOUT DOCEODE</h1>
      <h2 className='text-center italic text-white-gray text-2xl font-thin mb-10'>(Doh·che·ode)</h2>
			<div className='lg:grid grid-cols-[4fr_5fr] pb-10 lg:pb-20'>
        <div className='lg:flex items-center'>
				  <img src={aboutImage1} alt='An abstract graphic with 2 people representing participating in the sessions.'/>
        </div>
				<div className='lg:flex items-center'>
          <div>
					  <h3 className='text-ice-blue uppercase font-medium text-2xl text-center w-full mt-5'>Our Mission</h3>
        	  <p className='indent-10 text-white-gray text-lg leading-loose mb-5'>From the start, our mission is to empower today’s society through equipping them with skills necessary to attain the benefits and opportunities of computer programming, while offering free courses to everyone, no matter what circumstances they may find themselves in. <i>Why computer programming?</i> &nbsp; Computer programming has been shown to significantly enhance critical thinking in young as well as middle aged individuals. It has been proven to assist elderly who have limited brain agility as it keeps their minds active. Our mission is not limited to educating about the programming language, but also educating individuals about the opportunities they receive by obtaining skills in computer programming.</p>
          </div>
        </div>
			</div>
			<div className='lg:grid grid-cols-[5fr_4fr]'>
        <div className='lg:flex items-center order-1'>
				  <img src={aboutImage2} alt='An abstract graphic with 2 people representing participating in the sessions.'/>
        </div>
        <div className='lg:flex items-center'>
          <div>
            <h3 className='text-ice-blue uppercase font-medium text-2xl text-center w-full mt-5'>Values</h3>
            <p className='indent-10 text-white-gray text-lg leading-loose'>Our values aim for providing all individuals with opportunities to excel in the workplace and in life through computer skills. Our free courses provide an opportunity for introductory programming to all people, without regard to affordability. Even if the programming is not directly applicable to the lifestyle of the person, the critical thinking and problem solving skills learned from programming lead more successful lives.</p> 
            <p className='indent-10 text-white-gray text-lg leading-loose'>Typically, our courses are located in an in-building location where we host our yearly 3 day conference. This year, due to the pandemic, we are incorporating an online learning experience that will allow a larger spectrum of participation. Our usual 3 courses this year will be spread over a time period of 3 weeks rather than 3 days to allow for a more flexible schedule for our participants. Don’t worry if the live streams are missed because all lessons will be recorded for all to learn on their own schedule.</p>
          </div>
        </div>
			</div>
		</div>
    </motion.div>
  )
}

export default About