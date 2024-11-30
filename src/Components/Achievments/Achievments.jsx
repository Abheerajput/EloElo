

import React     from 'react';
import img from "../../assets/Svg/choose.svg";
import img1 from "../../assets/Svg/cap.svg"
import img2 from "../../assets/Svg/Cemera.svg"
import img3 from "../../assets/Svg/redcap.svg"
import img4 from "../../assets/Svg/People.svg"
import img5 from "../../assets/Svg/Acchievment.svg"
const  Achievement = () => {
 

  return (
    <div className=' bg-[white] xs:pt-6  lg:py-12 xl:py-10 md:py-6'>
      <div className='relative '>
        <h1 className='text-[35px] font-semibold font-publicSans'>Our <span className='text-[#00A3E0] '>Achievement</span></h1>
        <img src={img} alt="" className='absolute ps-16 ' />
        <p className='text-[#737373] text-[16px] pt-5 font-publicSans'>Track Record of Excellence and Student Satisfaction</p>
      </div>
      <div className='w-full xs:flex-col flex items-center  '>
<div className='w-[60%] xs:w-full flex flex-col gap-8  lg:gap-12 xl:gap-14'>
  <div className='flex gap-6'>
  <div className='w-[50%] flex items-center '>
        <img src={img1} alt="" className='w-11'/>
        <div className=' ps-4'>
            <h1 className='text-[22px] font-semibold'>30</h1>
            <p className='font-publicSans xs:text-[12px] text-[#6D737A]  font-medium'>Instructor  Language Coach</p>
        </div>
    </div>
    <div className='w-[50%] flex items-center '>
        <img src={img2} alt="" className='w-11'/>
        <div className=' ps-4'>
            <h1 className='text-[22px] font-semibold'>15+</h1>
            <p className='font-publicSans text-[#6D737A] xs:text-[12px]  font-medium'>Interactive Courses and Activities</p>
        </div>
    </div>
  </div>

    <div className='flex gap-6'>
  <div className='w-[50%] flex items-center '>
        <img src={img3} alt="" className='w-11'/>
        <div className=' ps-4'>
            <h1 className='text-[22px] font-semibold'>10,000+</h1>
            <p className='font-publicSans text-[#6D737A] xs:text-[12px] font-medium'>Students Successfully Trained</p>
        </div>
    </div>
    <div className='w-[50%] flex items-center '>
        <img src={img4} alt="" className='w-11'/>
        <div className=' ps-4'>
            <h1 className='text-[22px] font-semibold'>95%</h1>
            <p className='font-publicSans text-[#6D737A] xs:text-[12px] font-medium'>Student Satisfaction Rate</p>
        </div>
    </div>
  </div>

  

</div>
<div className='w-[40%] xs:pt-4 xs:w-full'>
<img src={img5} alt="" />
    </div>
<div>

</div>
      </div>
   
    </div>
  );
};

export default Achievement;
