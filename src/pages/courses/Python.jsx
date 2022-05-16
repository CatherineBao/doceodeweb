import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Course from '../../components/Course'

import pythonBanner from '../../images/home-gallery/python-banner.jpg'

const Python = () => {
  return (
		<Course
      lang='Python'
      title='Machine Learning Using Python'
      description='In this course, participants will learn the basics of Python, the primary language of ML, and then eventually progress to machine learning itself. Going further, they will learn about how those algorithims apply to real-life scenarios and sectors of the workforce.'
      banner={pythonBanner}
      alt='A banner representing the python class offered'
      nextSessionDate='July 3rd 1:00PM PST'
      sessions={[
        {
          date: 'June 27th 1:00PM PST',
          id: 'UDf_tO4hnQw'
        }
      ]}
    />
	)
}

export default Python