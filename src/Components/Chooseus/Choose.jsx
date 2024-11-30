import React from 'react'
import img from "../../assets/Svg/choose.svg"
import img1 from "../../assets/Svg/lessonimg1.svg"
import img2 from "../../assets/Svg/robot.svg"
import img3 from "../../assets/Svg/track.svg"
import { MdArrowOutward } from "react-icons/md";
const Choose = () => {
  return (
    <div className='xs:pt-6  lg:py-12 xl:py-10 md:py-6'>
        <div className='relative'>
            <h1 className='text-[35px] font-semibold font-publicSans'>Why <span className='text-[#00A3E0] '> Choose Us?</span></h1>
            <img src={img} alt=""  className='absolute ps-16 '/>
            <p className='text-[#737373] text-[16px] pt-5 font-publicSans'>Your Gateway to Learning Luxembourgish – Easy, Engaging, Effective!</p>
        </div>
        <div className='w-full py-10 xs:flex-col xs:items-center xs:gap-6 lg:gap-10 xl:gap-10 md:gap-8 sm:gap-6 flex justify-between'>
            <div className='w-[33%]  xs:w-[70%]   p-6 border flex flex-col justify-between  shadow-lg rounded-sm'>
                <div>
                <h1 className='font-publicSans sm:flex-col xs:flex-col font-semibold text-[20px] items-center flex gap-4'><img src={img1} alt="" className='w-8 h-8' /> Curriculum-Aligned Lessons</h1>
                <p className='py-6 text-[#6D737A] font-publicSans '>Learn step-by-step with structured lessons matching classroom instruction.</p>
                </div>
           
             <button
              className="text-white bg-[#00A3E0]   max-w-[42px]  text-[18px] px-3 py-3 rounded-lg"
            >
            <MdArrowOutward />
            </button>
            </div>
            <div className='w-[33%] xs:w-[70%]  p-6 border flex flex-col justify-between  shadow-lg rounded-sm'>
                <div>
                <h1 className='font-publicSans sm:flex-col xs:flex-col font-semibold text-[20px] items-center flex gap-4'><img src={img2} alt="" className='w-8 h-8' /> AI-Powered Chat Assistant</h1>
             <p className='py-6 text-[#6D737A] font-publicSans '>Get instant help, explanations, and translations in your native language.
             </p>
                </div>
             
             <button
              className="text-white bg-[#00A3E0]  max-w-[42px]   text-[18px] px-3 py-3 rounded-lg"
            >
            <MdArrowOutward />
            </button>
            </div>
            <div className='w-[33%] xs:w-[70%]  p-6 border  flex flex-col justify-between shadow-lg rounded-sm'>
                <div>
                    <h1 className='font-publicSans xs:flex-col sm:flex-col font-semibold text-[20px] items-center flex gap-4'><img src={img3} alt="" className='w-8 h-8' /> Curriculum-Aligned Lessons</h1>
                <p className='py-6 text-[#6D737A] font-publicSans '>See your improvement with quizzes and lesson trackers. </p>
                </div>
             <button
              className="text-white bg-[#00A3E0] max-w-[42px]  text-[18px] px-3 py-3 rounded-lg"
            >
            <MdArrowOutward />
            </button>
            </div>
        </div>
    </div>
  )
}

export default Choose