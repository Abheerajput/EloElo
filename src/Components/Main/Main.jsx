
import React from 'react'
import Hero from '../HeroSection/Hero'
import Choose from '../Chooseus/Choose'
import Instructor from '../Instructor/Instructor'
import Achievement from '../Achievments/Achievments'
import Navbar from './Navbar'
import Teacher from '../JoinTeacher/Teacher'
import Feedback from '../Feedback/Feedback'

const Main = () => {
  return (
    <div className='md:px-[8%] xl:px-[10%] my-6 sm:px-[6%] xs:px-[4%] lg:px-[7%] '>
<Navbar/>
<Hero/>
      <Choose />
      <Instructor />
      <Feedback/>
      <Achievement />
      <Teacher/>
    </div>
  )
}

export default Main