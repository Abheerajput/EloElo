import React, { useEffect, useState } from 'react';
import img from "../../assets/Svg/choose.svg";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const feedbackData = [
  {
    name: "Emma K.",
    role: "Beginner Language Learner",
    feedback: "This platform has completely transformed the way I learn Luxembourgish. The lessons are engaging, and the AI-powered assistant made it so much easier to grasp difficult concepts. I feel more confident in my conversations!",
    imgUrl: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Sophie Muller",
    role: "Language Coach",
    feedback: "I’ve tried many language courses, but this one stands out. The progress tracking and interactive exercises kept me motivated. The instructors are knowledgeable, and the curriculum is well-organized. Highly recommended!",
    imgUrl: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Sophie Muller",
    role: "Language Coach",
    feedback: "I’ve tried many language courses, but this one stands out. The progress tracking and interactive exercises kept me motivated. The instructors are knowledgeable, and the curriculum is well-organized. Highly recommended!",
    imgUrl: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
 
  {
    name: "Sophie Muller",
    role: "Language Coach",
    feedback: "I’ve tried many language courses, but this one stands out. The progress tracking and interactive exercises kept me motivated. The instructors are knowledgeable, and the curriculum is well-organized. Highly recommended!",
    imgUrl: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
 
  // Add more feedback data if needed
];

const Feedback = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perView, setPerView] = useState(1);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView,
      spacing: 15,
    },
  
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) setPerView(2);
      else if (width >= 768) setPerView(2);
      else setPerView(3);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="p-6">
      <div className="relative text-center">
        <h1 className="text-[35px] font-semibold font-publicSans">
          Student <span className="text-[#00A3E0]">Feedback</span>
          <img src={img} alt="Choose" className="absolute left-0" />
        </h1>
        <p className="text-[#737373] text-[16px] pt-5 font-publicSans">
          Hear How We’ve Made a Difference.
        </p>
      </div>

      <div className="relative py-6">
        <div ref={sliderRef} className="keen-slider">
          {feedbackData.map((item, index) => (
            <div key={index} className="keen-slider__slide   py-4">
                <div className='max-w-[350px]'>
                <div className="bg-white  shadow-lg rounded-lg mx-2">
                <div className="p-6">
                  <div className="flex gap-6">
                    <img
                      src={item.imgUrl}
                      alt={`${item.name} profile`}
                      className="w-12 h-12 object-cover rounded-full border-2 border-gray-300 shadow-lg"
                    />
                    <div>
                      <h1 className="text-[#363A3D] font-publicSans font-medium text-[16px]">
                        {item.name}
                      </h1>
                      <p className="text-[#363A3D] font-publicSans text-[16px]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <p className="pt-4 text-[#363A3D] font-publicSans">
                    {item.feedback}
                  </p>
                </div>
              </div>
                </div>
            
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-6">
          {feedbackData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentSlide === idx ? "bg-[#00A3E0]" : "bg-[#D3D3D3]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        <div className="flex justify-end gap-4 pt-6">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-[#00A3E0] text-white px-4 py-2 rounded-md"
          >
            ←
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-[#00A3E0] text-white px-4 py-2 rounded-md"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;















// import React, { useEffect, useState } from 'react'
// import img from "../../assets/Svg/choose.svg";
// import inst3 from "../../assets/Svg/JacobJones.svg";
// import 'keen-slider/keen-slider.min.css';
// import { useKeenSlider } from 'keen-slider/react';
// const Feedback = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [perView, setPerView] = useState(1); 
  
//     const [sliderRef, instanceRef] = useKeenSlider({
//       loop: true,
//       mode: "free-snap",
//       slides: {
//         perView,
//         spacing: 15,
//       },
      
//     });
  
//     useEffect(() => {
//       const handleResize = () => {
//         const width = window.innerWidth;
//         if (width >= 1280) {
//           setPerView(2); 
//         } else if (width >= 1024) {
//           setPerView(2); 
//         } else if (width >= 768) {
//           setPerView(2); 
//         } else {
//           setPerView(1); 
//         }
//       };
    
//       window.addEventListener('resize', handleResize);
//       handleResize(); 
    
//       return () => window.removeEventListener('resize', handleResize); // Cleanup
//     }, []);
    
  
//     const handlePrev = () => {
//       instanceRef.current?.prev();
//     };
  
//     const handleNext = () => {
//       instanceRef.current?.next();
//     };
//   return (
//     <div>
//         <div className='relative'>
//         <h1 className='text-[35px] font-semibold font-publicSans'>
//           Student<span className='text-[#00A3E0]'> Feedback</span>
//           <img src={img} alt="Choose" className='absolute left-0' />
//         </h1>
       
//         <p className='text-[#737373] text-[16px] pt-5 font-publicSans'>
//         Hear How We’ve Made a Difference.
//         </p>
//       </div>
//       <div className='relative py-6'>
//       <div ref={sliderRef} className="keen-slider ">  
//       <div className="keen-slider__slide1 py-4" >
//       <div className=' bg-white  p-4   justify-between shadow-lg rounded-lg mx-2'>

//         <div className='p-6'>
//  <span className='flex gap-6'>
//  <img  
//   src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//   alt="User profile" 
//   className="w-12 h-12 object-cover rounded-full border-2 border-gray-300 shadow-lg"
// />
// <span className='flex flex-col'>
// <h1 className=' text-[#363A3D] font-publicSans font-medium text-[16px]'>Emma K.</h1>
// <p className=' text-[#363A3D] font-publicSans font-medium text-[16px]'>Beginner Language Learner</p>
// </span>
//  </span>
//  <p className='pt-4 text-[#363A3D] font-publicSans font-medium text-[16px]'>This platform has completely transformed the way I learn Luxembourgish. The lessons are engaging, and the AI-powered assistant made it so much easier to grasp difficult concepts. I feel more confident in my conversations!</p>

//         </div>
//         </div>
//       </div>

//       <div className="keen-slider__slide1 py-4" >
//       <div className=' bg-white  p-4   justify-between shadow-lg rounded-lg mx-2'>

//         <div className='p-6'>
//  <span className='flex gap-6'>
//  <img  
//   src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//   alt="User profile" 
//   className="w-12 h-12 object-cover rounded-full border-2 border-gray-300 shadow-lg"
// />
// <span className='flex flex-col'>
// <h1 className=' text-[#363A3D] font-publicSans font-medium text-[16px]'>Emma K.</h1>
// <p className=' text-[#363A3D] font-publicSans font-medium text-[16px]'>Beginner Language Learner</p>
// </span>
//  </span>
//  <p className='pt-4 text-[#363A3D] font-publicSans font-medium text-[16px]'>This platform has completely transformed the way I learn Luxembourgish. The lessons are engaging, and the AI-powered assistant made it so much easier to grasp difficult concepts. I feel more confident in my conversations!</p>

//         </div>
//         </div>
//       </div>
      
//       <div className="keen-slider__slide py-4" >
//          <div className=' bg-white p-4 flex flex-col   justify-between shadow-lg rounded-lg mx-2'>
//          <img 
//   src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//   alt="User profile" 
//   className="w-12 h-12  object-cover rounded-full border-2 border-gray-300 shadow-lg"
// />
//          <h1 className='flex justify-center font-publicSans font-medium pt-3'>
//               Sophie Muller
//               </h1>
//               <p className='flex justify-center font-medium text-[15px] text-[#737373] pt-3 font-publicSans'>
//               Language Coach
//               </p>
//             </div>
//             </div>

          
//     </div>

//     <div className='flex justify-center pt-6'>
//   {[...Array(instanceRef.current?.track.details.slides.length || 0)].map((_, idx) => (
//     <button
//       key={idx}
//       onClick={() => instanceRef.current?.moveToIdx(idx)}
//       className={`w-3 h-3 mx-1 rounded-full ${
//         currentSlide === idx 
//           ? "bg-[#00A3E0]" // Active slide color
//           : idx % 2 === 0 
//             ? "bg-[#D3D3D3]" // Even index color
//             : "bg-[#B0B0B0]" // Odd index color (change to your desired color)
//       }`}
//     ></button>
//   ))}
// </div>

//      <div className='flex justify-end gap-4 mr-6 pt-6'>
//           <button onClick={handlePrev} className='bg-[#00A3E0] text-white px-4 py-2 rounded-md'>
//             ←
//           </button>
//           <button onClick={handleNext} className='bg-[#00A3E0] text-white px-4 py-2 rounded-md'>
//             →
//           </button>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Feedback