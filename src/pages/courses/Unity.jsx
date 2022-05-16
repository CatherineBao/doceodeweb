import React from 'react'

import Course from '../../components/Course'

import unityBanner from '../../images/home-gallery/unity-banner.jpg'

const Unity = () => {
  return (
    <Course
      lang='Unity'
      title=''
      description='This course will walk participants through the process of developing games using the industry-leading engine Unity, combined with its official programming language C#. After taking this course, participants will be fully prepared to enter the game development workforce as qualified programmers.'
      banner={unityBanner}
      alt='A banner representing the unity class offered'
      nextSessionDate='June 30th 1:00PM PST'
      sessions={[]}
      extraContent={(
        <div>
          <a className='text-ice-blue hover:text-med-blue hover:cursor-pointer duration-200' href='https://jcb5150.itch.io/beat'>Here's the game you'll learn how to make!</a>
        </div>
      )}
    />
	)
}

export default Unity

/*
  <div>
			<div className='lg:flex gap-8'>
				<div className='mb-16 lg:w-3/12'>
					<h1 className={h1}>Unity</h1>
          <h3 className={h3}>Course Overview</h3>
          <p className='pb-10'>This course will walk participants through the development of games using Unity. You can expect to learn to use official Unity Code Editor to implement the skills learned from the course.</p>
          <h3 className={h3}>Previous Lessons</h3>
          <p className='pb-16'>Session One: March 20th 4:00PM PST</p>
          <h3 className={h3}> Student Examples </h3>
          <p>Pidgeon Attac by Anoymnous User</p>
          <Link to='/courses/unity/beat' className='text-ice-blue hover:text-med-blue hover:cursor-pointer duration-200'> Beat by jcb5150 </Link>
          <p>Unavrs by SecretSeagalSymbols</p>
				</div>
				<div className='bg-dark-gray rounded-3xl text-center p-5 lg:w-9/12'>
					
				</div>
			</div>
		</div>
*/