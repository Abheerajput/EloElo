import React from 'react'
import img from "../../assets/Svg/teacher.svg"
const Teacher = () => {
  return (
    <div>
<div className='w-full xs:flex-col flex items-center'>
    <div className='w-1/2 xs:w-full'>
    <img src={img} alt="" />
    </div>
    <div className='flex w-1/2 xs:w-full flex-col px-10 gap-4'>
<h1 className='text-[34px] font-semibold font-publicSans'>Are You a <span className='text-[#00A3E0]'>Teacher?</span> </h1>
<p className='text-[18px] font-medium font-publicSans'>Learn Luxembourgish the Smart Way –  Join Our <br />  Community!</p>
<div>
<button className='px-6 py-2 bg-[#00A3E0]  text-white rounded-lg'>Join as a Teacher</button>

</div>
    </div>
</div>
    </div>
  )
}

export default Teacher