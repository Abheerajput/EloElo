import React, { useEffect, useState } from 'react';
import img from "../../assets/Svg/choose.svg";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const Feedback = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perView, setPerView] = useState(1);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "scroll",
    slides: {
      perView,
      spacing: 10,
    },
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setPerView(2);
      } else if (width >= 1024) {
        setPerView(2);
      } else if (width >= 768) {
        setPerView(2);
      } else {
        setPerView(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  useEffect(() => {
    if (instanceRef.current) {
      const slider = instanceRef.current;
      slider.on('slideChanged', () => {
        const current = slider.track.details.relativeSlide; // Access the current slide index directly
        setCurrentSlide(current);
      });
    }
  }, [instanceRef]);

  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  // Sample feedback data
  const feedbackData = [
    {
      name: "Emma K.",
      title: "Beginner Language Learner",
      feedback:
        "This platform has completely transformed the way I learn Luxembourgish. The lessons are engaging, and the AI-powered assistant made it so much easier to grasp difficult concepts. I feel more confident in my conversations!",
      image:
        "https://images.unsplash.com/photo-1464961968964-a80a9b51f3d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Jacob J.",
      title: "Intermediate Language Learner",
      feedback:
        "I’ve tried many language courses, but this one stands out. The progress tracking and interactive exercises kept me motivated. The instructors are knowledgeable, and the curriculum is well-organized. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzJTIwbWVufGVufDB8fDB8fHww",
    },
    {
      name: "Sophia T.",
      title: "Advanced Learner",
      feedback:
        "This platform has completely transformed the way I learn Luxembourgish. The lessons are engaging, and the AI-powered assistant made it so much easier to grasp difficult concepts. I feel more confident in my conversations!",
      image:
        "https://images.unsplash.com/photo-1508243771214-6e95d137426b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Lucas M.",
      title: "Business Language Learner",
      feedback:
        "I’ve tried many language courses, but this one stands out. The progress tracking and interactive exercises kept me motivated. The instructors are knowledgeable, and the curriculum is well-organized. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Olivia P.",
      title: "Travel Language Learner",
      feedback:
        "This platform has completely transformed the way I learn Luxembourgish. The lessons are engaging, and the AI-powered assistant made it so much easier to grasp difficult concepts. I feel more confident in my conversations!",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className='bg-[#F9F9F9]'>
      <div className="relative">
        <h1 className="text-[35px] font-semibold font-publicSans">
          Student<span className="text-[#00A3E0]"> Feedback</span>
          <img src={img} alt="Choose" className="absolute left-0" />
        </h1>
        <p className="text-[#737373] text-[16px] pt-5 font-publicSans">
          Hear How We’ve Made a Difference.
        </p>
      </div>

      <div className="relative  py-6">
        <div ref={sliderRef} className="keen-slider">
          {feedbackData.map((feedback, index) => (
            <div className="keen-slider__slide keen-slider__slide1   " key={index}>
              <div className="p-4 justify-between">
                <div className="p-6   rounded-xl shadow-md">
                  <span className="flex gap-6">
                    <img
                      src={feedback.image}
                      alt="User profile"
                      className="w-12 h-12 object-cover rounded-full border-2 shadow-lg"
                    />
                    <span className="flex flex-col">
                      <h1 className="text-[#363A3D] font-publicSans font-medium text-[16px]">{feedback.name}</h1>
                      <p className="text-[#363A3D] font-publicSans font-medium text-[16px]">{feedback.title}</p>
                    </span>
                  </span>
                  <p className="pt-4 text-[#363A3D] font-publicSans font-medium text-[16px]">{feedback.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-6">
          {[...Array(instanceRef.current?.track.details.slides.length || 0)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentSlide === idx
                  ? "bg-[#00A3E0]" // Active slide color
                  : idx % 2 === 0
                  ? "bg-[#D3D3D3]" // Even index color
                  : "bg-[#B0B0B0]" // Odd index color (change to your desired color)
              }`}
            ></button>
          ))}
        </div>

        <div className="flex justify-end gap-4 mr-6 pt-6">
          <button onClick={handlePrev} className="bg-[#00A3E0] text-white px-4 py-2 rounded-md">
            ←
          </button>
          <button onClick={handleNext} className="bg-[#00A3E0] text-white px-4 py-2 rounded-md">
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
//       loop:false,
//       mode: "scroll",
//       slides: {
//         perView,
//         spacing: 10,
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
//     const totalSlides = instanceRef.current?.track.details.slides.length || 0;

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


// import React, { useEffect, useState } from 'react'; 
// import img from "../../assets/Svg/choose.svg";
// import 'keen-slider/keen-slider.min.css';
// import { useKeenSlider } from 'keen-slider/react';

// const feedbackData = [
//   {
//     name: "Emma K.",
//     role: "Beginner Language Learner",
//     feedback: "This platform has completely transformed the way I learn Luxembourgish. The lessons are engaging, and the AI-powered assistant made it so much easier to grasp difficult concepts. I feel more confident in my conversations!",
//     imgUrl: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     name: "Sophie Muller",
//     role: "Language Coach",
//     feedback: "I’ve tried many language courses, but this one stands out. The progress tracking and interactive exercises kept me motivated. The instructors are knowledgeable, and the curriculum is well-organized. Highly recommended!",
//     imgUrl: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     name: "Sophie Muller",
//     role: "Language Coach",
//     feedback: "I’ve tried many language courses, but this one stands out. The progress tracking and interactive exercises kept me motivated. The instructors are knowledgeable, and the curriculum is well-organized. Highly recommended!",
//     imgUrl: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     name: "Sophie Muller",
//     role: "Language Coach",
//     feedback: "I’ve tried many language courses, but this one stands out. The progress tracking and interactive exercises kept me motivated. The instructors are knowledgeable, and the curriculum is well-organized. Highly recommended!",
//     imgUrl: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     name: "Sophie Muller",
//     role: "Language Coach",
//     feedback: "I’ve tried many language courses, but this one stands out. The progress tracking and interactive exercises kept me motivated. The instructors are knowledgeable, and the curriculum is well-organized. Highly recommended!",
//     imgUrl: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     name: "Sophie Muller",
//     role: "Language Coach",
//     feedback: "I’ve tried many language courses, but this one stands out. The progress tracking and interactive exercises kept me motivated. The instructors are knowledgeable, and the curriculum is well-organized. Highly recommended!",
//     imgUrl: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   // Add more feedback data if needed
// ];

// const Feedback = () => {
//         const [currentSlide, setCurrentSlide] = useState(0);
//         const [sliderRef, instanceRef] = useKeenSlider({

//             loop: false,
        
//             mode: "snap", // Change to "snap" to scroll one item at a time
        
//             slides: {
        
//               perView: 2,
        
//               spacing: 5,
        
//             },
        
//             created: (instance) => {
        
//               instanceRef.current = instance;
        
//             },
        
//           });
       
    
        
    
//         const handleSlideChange = (idx) => {
//             instanceRef.current?.moveToIdx(idx);
//             setCurrentSlide(idx);
//         };
    
    
//   return (
//     <div className="p-6">
//       <div className="relative">
//         <h1 className="text-[35px] font-semibold font-publicSans">
//           Student <span className="text-[#00A3E0]">Feedback</span>
//           <img src={img} alt="Choose" className="absolute left-0" />
//         </h1>
//         <p className="text-[#737373] text-[16px] pt-5 font-publicSans">
//           Hear How We’ve Made a Difference.
//         </p>
//       </div>

//       <div className="relative py-6">
//         <div ref={sliderRef} className="keen-slider mx-5">
//           {feedbackData.map((item, index) => (
//             <div key={index} className="keen-slider__slide keen-slider__slide1 flex py-4">
//               <div className="max-w-[50%] xs:px-6">
//                 <div className="bg-white shadow-lg rounded-lg mx-2">
//                   <div className="p-6">
//                     <div className="flex gap-6">
//                       <img
//                         src={item.imgUrl}
//                         alt={`${item.name} profile`}
//                         className="w-12 h-12 object-cover rounded-full border-2 border-gray-300 shadow-lg"
//                       />
//                       <div>
//                         <h1 className="text-[#363A3D] font-publicSans font-medium text-[16px]">
//                           {item.name}
//                         </h1>
//                         <p className="text-[#363A3D] font-publicSans text-[16px]">
//                           {item.role}
//                         </p>
//                       </div>
//                     </div>
//                     <p className="pt-4 text-[#363A3D] font-publicSans">
//                       {item.feedback}
//                     </p>
//                   </div>
//                 </div>
//               </div>
           
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center pt-6">
//           {/* Dots */}
//           {Array.from({  }).map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleSlideChange(idx)}
//               className={`w-3 h-3 mx-1 rounded-full ${currentSlide === idx ? "bg-[#00A3E0]" : "bg-[#D3D3D3]"}`}
//               aria-label={`Go to slide ${idx + 1}`}
//             ></button>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-end gap-4 pt-6">
//           <button
//             onClick={() => instanceRef.current?.prev()}
//             className="bg-[#00A3E0] text-white px-4 py-2 rounded-md"
//           >
//             ←
//           </button>
//           <button
//             onClick={() => instanceRef.current?.next()}
//             className="bg-[#00A3E0] text-white px-4 py-2 rounded-md"
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feedback;

















// import { Carousel } from "flowbite-react";

// const Feedback = () => {
//   return (
//     <div className="relative h-80 sm:h-96 xl:h-[400px]">
//       <Carousel
//         indicators={true}
//         leftControl={
//           <button
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-700"
//           >
//             &#x2039; {/* Left Arrow */}
//           </button>
//         }
//         rightControl={
//           <button
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-700"
//           >
//             &#x203A; {/* Right Arrow */}
//           </button>
//         }
//         slideInterval={3000}
//         id="custom-carousel"
//       >
//         {/* Carousel Slide 1 */}
//         <div
//           className="flex gap-4  animate-fade-in duration-500"
//           data-carousel-item
//         >
//               <div className="bg-white w-1/2 h-full p-4 shadow-lg rounded-lg">
//             <div className="p-6">
//               <div className="flex gap-4">
//                 <img
//                   src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="User profile"
//                   className="w-12 h-12 object-cover rounded-full border-2 border-gray-300 shadow-lg"
//                 />
//                 <div>
//                   <h1 className="text-[#363A3D] font-medium text-[16px]">
//                     Emma K.
//                   </h1>
//                   <p className="text-[#363A3D] font-medium text-[16px]">
//                     Beginner Language Learner
//                   </p>
//                 </div>
//               </div>
//               <p className="pt-4 text-[#363A3D] font-medium text-[16px]">
//                 This platform has completely transformed the way I learn
//                 Luxembourgish. The lessons are engaging, and the AI-powered
//                 assistant made it so much easier to grasp difficult concepts. I
//                 feel more confident in my conversations!
//               </p>
//             </div>
//           </div>
//           <div className="bg-white w-1/2 h-full p-4 shadow-lg rounded-lg">
//             <div className="p-6">
//               <div className="flex gap-4">
//                 <img
//                   src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="User profile"
//                   className="w-12 h-12 object-cover rounded-full border-2 border-gray-300 shadow-lg"
//                 />
//                 <div>
//                   <h1 className="text-[#363A3D] font-medium text-[16px]">
//                     Emma K.
//                   </h1>
//                   <p className="text-[#363A3D] font-medium text-[16px]">
//                     Beginner Language Learner
//                   </p>
//                 </div>
//               </div>
//               <p className="pt-4 text-[#363A3D] font-medium text-[16px]">
//                 This platform has completely transformed the way I learn
//                 Luxembourgish. The lessons are engaging, and the AI-powered
//                 assistant made it so much easier to grasp difficult concepts. I
//                 feel more confident in my conversations!
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Carousel Slide 2 */}
//         <div
//           className="flex gap-4  animate-fade-in duration-500"
//           data-carousel-item
//         >
//           <div className="bg-white w-1/2 h-full p-4 shadow-lg rounded-lg">
//             <div className="p-6">
//               <div className="flex gap-4">
//                 <img
//                   src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="User profile"
//                   className="w-12 h-12 object-cover rounded-full border-2 border-gray-300 shadow-lg"
//                 />
//                 <div>
//                   <h1 className="text-[#363A3D] font-medium text-[16px]">
//                     Emma K.2
//                   </h1>
//                   <p className="text-[#363A3D] font-medium text-[16px]">
//                     Intermediate Learner
//                   </p>
//                 </div>
//               </div>
//               <p className="pt-4 text-[#363A3D] font-medium text-[16px]">
//                 I have advanced so much thanks to this amazing platform!
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Carousel Slide 3 */}
//         <div
//           className="flex gap-4  animate-fade-in duration-500"
//           data-carousel-item
//         >
//           <div className="bg-white w-1/2 h-full p-4 shadow-lg rounded-lg">
//             <div className="p-6">
//               <div className="flex gap-4">
//                 <img
//                   src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="User profile"
//                   className="w-12 h-12 object-cover rounded-full border-2 border-gray-300 shadow-lg"
//                 />
//                 <div>
//                   <h1 className="text-[#363A3D] font-medium text-[16px]">
//                     Emma K.3
//                   </h1>
//                   <p className="text-[#363A3D] font-medium text-[16px]">
//                     Fluent Speaker
//                   </p>
//                 </div>
//               </div>
//               <p className="pt-4 text-[#363A3D] font-medium text-[16px]">
//                 Now, I can confidently communicate with native speakers.
//               </p>
//             </div>
//           </div>
//         </div>
//       </Carousel>
//     </div>
//   );
// };

// export default Feedback;


