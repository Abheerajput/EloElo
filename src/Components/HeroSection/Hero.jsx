import React from 'react'
import img from "../../assets/Svg/herosection.svg"
import  img1 from "../../assets/Svg/stars.svg"
import img2 from "../../assets/Svg/vector.svg"
import img3 from "../../assets/Svg/lessonicon.svg"
const Hero = () => {
  return (
    <div className=' bg-white xs:pt-6 sm:pt-8 md:pt-8 lg:pt-8 lg:pb-12 xl:py-10 md:py-6 '>
        <div className='w-full flex xs:flex-col items-center'>
            <div className='w-1/2 xs:w-full relative  justify-between'>
<img src={img1} alt=""  className=''/>
            <h1 className=' text-[#00A3E0] pl-4 text-[18px] font-publicSans font-medium '>AI-powered</h1>
            <h1 className='lg:text-[50px] font-publicSans font-semibold xl:text-[55px] xs:text-[25px] md:text-[40px]'>Learn <span className='text-[#00A3E0] relative '><img src={img2} alt=""  className='absolute left-0'/> Luxembourgish </span> 
            with Ease!</h1>
            <p className='font-publicSans  font-normal text-[#6D737A] '>Aligned with the official curriculum, supported by AI-powered tools, 
            and personalized for you</p>
            <div className='my-4 xs:flex-col xs:items-start flex gap-4 items-center'>
                <button className='px-6 xs:px-4 py-2 text-white rounded-lg bg-[#EF3340]'>Get Started for Free</button>
                <button className='px-6 py-2  rounded-lg items-center flex gap-2 text-[#6D737A] font-medium font-publicSans'><img src={img3} alt="" />  Explore Lessons</button>

            </div>
            </div>
            <div className='w-1/2 xs:w-full'>
            <div className='w-full xs:px-[5%] h-full'>
                <img src={img} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero