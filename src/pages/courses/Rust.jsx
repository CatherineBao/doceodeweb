import React from 'react'

import Course from '../../components/Course'

import rustBanner from '../../images/home-gallery/rust-banner.jpg'

const Rust = () => {
  return (
    <Course
      lang='Rust'
      title='Learning Rust for Beginners'
      description='In this course, participants will learn different memory storage methods and the fundamentals of the Rust programming language. Instructors will show common compiler errors, and give detailed guides on how to troubleshoot them.'
      banner={rustBanner}
      alt='A banner representing the rust class offered'
      nextSessionDate='July 4th 1:00PM PST'
      sessions={[
        {
          date: 'June 28th 1:00PM PST',
          id: 'PMobvjDPUvY'
        }
      ]}
    />
	)
}

export default Rust