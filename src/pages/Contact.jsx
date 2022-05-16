import React from 'react'
import { motion } from 'framer-motion'

import contactGraphic from '../images/ab-graphic-two.png'

const Contact = () => {
  const faqBox = 'flex flex-col lg:flex-row lg:space-x-6 h-40'
  const summary = 'uppercase font-bold hover:cursor-pointer'
  const summaryBox = 'w-full lg:w-2/4 mb-6'
  const link = 'text-ice-blue hover:text-med-blue hover:cursor-pointer duration-200'
  const details = 'bg-dark-gray p-4 rounded-3xl'
  
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
      <div className='bg-dark-blue'>
        <div className=''>
          <div className=''>
            <div className='flex py-10 flex-col lg:flex-row mb-8'>
              <div className=' w-full lg:w-2/4 2xl:w-1/3 mr-5 mb-5'>
                <h1 className='text-purple text-5xl uppercase font-thin pb-6'>Contact Us:</h1>
                <p className='indent-10 text-white-gray text-xl leading-loose font-thin mb-6'>
                  Although Decode’s seminars are typically centered locally, due to this year’s situation we are opening our lessons to a digital platform. If you have any inquiries please refer to the contact information for the general offices provided below. All questions will be answered within 2-3 business days. If you are searching for specific information you can request for a specialist.
                  <div classname='indent-10'> Before you call in, please take a look at the <a className={link} href='#FAQ'> FAQ </a> to see if your question has already been answered.</div>
                </p>
              </div>
              <img className='w-0 h-5/6 pr-6 invisible 2xl:w-1/3 2xl:visible' src={contactGraphic} alt='A graphic to fill up the empty space'/>
              <div className='w-full text-center border-solid border-2 rounded-xl p-6 border-ice-blue lg:w-2/4 2xl:w-1/3'>
                <h1 className='text-purple text-3xl uppercase font-thin pb-6'>
                  GENERAL CONTACT INFORMATION:
                </h1>
                <h3 className='text-white-gray text-2xl font-medium'>
                  Mailing Address:
                </h3>
                <p classname=''>
                  Doceode Office Building <br/>
                  2022 N Westward Street <br/>
                  110 <br/>
                  Orem, Utah 84057
                </p>
                <h3 className='text-white-gray text-2xl font-medium mt-6'>
                  Phone Number:
                </h3>
                <a className={link} href='tel:8009687666'> 
                  (800) 968-7666
                </a>
                <h3 className='text-white-gray text-2xl font-medium mt-6'>
                  Email:
                </h3>
                <a className={link} href='mailto:doceode@codingforeveryone.com'> 
                  doceode@codingforeveryone.com
                </a>
                <h3 className='text-white-gray text-2xl font-medium mt-6'>
                  Hours:
                </h3>
                <h4 className='text-white-gray text-xl font-medium mt-2'>
                  MONDAY - FRIDAY:
                </h4>
                <p>
                  8:00 - 16:00
                </p>
                <h4 className='text-white-gray text-xl font-medium mt-2 uppercase'>
                  Saturday: 
                </h4>
                <p>
                  10:00 - 13:00
                </p>
                <h4 className='text-white-gray text-xl font-medium mt-2 uppercase'>
                  Sunday: 
                </h4>
                <p className='uppercase' id='FAQ'>
                  closed
                </p>
              </div>
            </div>
            <h1 className='text-purple text-5xl uppercase font-thin mt-20 mb-8 text-center'>Frequently Asked Questions:</h1>
            <div className={faqBox}>
              <div className={summaryBox}>
                <details className={details}>
                  <summary className={summary}>
                    What courses are recommended for beginners?
                  </summary>
                  <p className='mt-3'>
  Our python course would be the most welcoming to beginners because it has better readability. Additionally, the python course offers more in depth instruction for early concepts that can be applied to other languages.                </p>
                </details>
              </div>
              <div className={summaryBox}>
                <details className='bg-dark-gray  p-4 rounded-3xl'>
                  <summary className={summary}>
                    How do I sign up for a course?
                  </summary>
                  <p className='mt-3'>
                    In order to maintain user accessibility, all of our seminars are available as soon as an account is made. You do not need to sign up for courses individually.
                  </p>
                </details>
              </div>
            </div>
            <div className={faqBox}>
              <div className={summaryBox}>
                <details className={details}>
                  <summary className={summary}>
                    If I can't make it to a webinar, what do I do?
                  </summary>
                  <p className='mt-3'>
                    Not to worry; all our lessons are recorded. If you happen to miss one, you can come back and watch it at any time.
                  </p>
                </details>
              </div>
              <div className={summaryBox}>
                <details className='bg-dark-gray  p-4 rounded-3xl'>
                  <summary className={summary}>
                    Which course should I take?
                  </summary>
                  <p className='mt-3'>
                    All courses are available to access post account sign up. Afterwards, if you are more inclined towards game design you may continue with our Unity course, memory storage with rust, machine learning with python etc.
                  </p>
                </details>
              </div>
            </div>
            <div className={faqBox}>
              <div className={summaryBox}>
                <details className={details}>
                  <summary className={summary}>
                    How many courses can I sign up for at a time?
                  </summary>
                  <p className='mt-3'>
                    You don’t need to register for individual courses to sign up. Once you create an account on our website you can have access to all of the courses.  
                  </p>
                </details>
              </div>
              <div className='w-full lg:w-2/4'>
                <details className={details}>
                  <summary className={summary}>
                   How often are courses updated?
                  </summary>
                  <p className='mt-3'>
                    Courses will have updates weekly for six weeks on the designated day. Specific lessons will air at different times in order to ensure flexibility for attendees.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact