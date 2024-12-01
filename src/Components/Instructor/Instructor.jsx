
import React, { useEffect, useState } from 'react';
import img from "../../assets/Svg/choose.svg";
import inst1 from "../../assets/Svg/ClaraDupont.svg";
import inst2 from "../../assets/Svg/SophieMuller.svg";
import inst3 from "../../assets/Svg/JacobJones.svg";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';


const Instructor = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perView, setPerView] = useState(1); // Default to 1 slide visible

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
      if (width >= 1280) {
        setPerView(4); 
      } else if (width >= 1024) {
        setPerView(3); 
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
  

  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  return (
    <div className=' bg-[#F5FCFF] xs:pt-6  lg:py-12 xl:py-10 md:py-6 '>
      <div className='relative'>
        <h1 className='text-[35px] font-semibold font-publicSans'>
          Our Best<span className='text-[#00A3E0]'> Instructor</span>
        </h1>
        <img src={img} alt="Choose" className='absolute ps-16' />
        <p className='text-[#737373] text-[16px] pt-5 font-publicSans'>
          Meet the Experts Who Bring Luxembourgish to Life
        </p>
      </div>

      <div className='relative py-6'>
      <div ref={sliderRef} className="keen-slider ">  
      <div className="keen-slider__slide py-4" >
      <div className=' bg-white  p-4 flex flex-col   justify-between shadow-lg rounded-lg mx-2'>
              <img src={inst1} alt="" />
              <h1 className='flex justify-center font-publicSans font-medium pt-3'>
              Clara Dupont
              </h1>
              <p className='flex justify-center font-medium text-[15px] text-[#737373] pt-3 font-publicSans'>
              Senior Instructor
              </p>
            </div>

      </div>
      <div className="keen-slider__slide py-4" >
         <div className=' bg-white p-4 flex flex-col   justify-between shadow-lg rounded-lg mx-2'>
              <img src={inst2} alt="" />
              <h1 className='flex justify-center font-publicSans font-medium pt-3'>
              Sophie Muller
              </h1>
              <p className='flex justify-center font-medium text-[15px] text-[#737373] pt-3 font-publicSans'>
              Language Coach
              </p>
            </div>
            </div>

            <div className="keen-slider__slide py-4" >
         <div className=' bg-white  p-4 flex flex-col   justify-between shadow-lg rounded-lg mx-2'>
              <img src={inst3} alt="" />
              <h1 className='flex justify-center font-publicSans font-medium pt-3'>
              Jacob Jones    
                        </h1>
              <p className='flex justify-center font-medium text-[15px] text-[#737373] pt-3 font-publicSans'>
            Curriculum Developer


              </p>
            </div>
            </div>

            <div className="keen-slider__slide py-4" >
        <div className=' bg-white  p-4 flex flex-col   justify-between shadow-lg rounded-lg mx-2'>
              <img src={inst1} alt="" />
              <h1 className='flex justify-center font-publicSans font-medium pt-3'>
              Clara Dupont
              </h1>
              <p className='flex justify-center font-medium text-[15px] text-[#737373] pt-3 font-publicSans'>
              Senior Instructor
              </p>
            </div>
            </div>

            <div className="keen-slider__slide py-4" >
         <div className=' bg-white  p-4 flex flex-col   justify-between shadow-lg rounded-lg mx-2'>
              <img src={inst2} alt="" />
              <h1 className='flex justify-center font-publicSans font-medium pt-3'>
              Clara Dupont
              </h1>
              <p className='flex justify-center font-medium text-[15px] text-[#737373] pt-3 font-publicSans'>
              Senior Instructor
              </p>
            </div>
            
            </div>
            <div className="keen-slider__slide py-4" >
         <div className=' bg-white  p-4 flex flex-col   justify-between shadow-lg rounded-lg mx-2'>
              <img src={inst3} alt="" />
              <h1 className='flex justify-center font-publicSans font-medium pt-3'>
              Clara Dupont
              </h1>
              <p className='flex justify-center font-medium text-[15px] text-[#737373] pt-3 font-publicSans'>
              Senior Instructor
              </p>
            </div>
            
            </div>
            <div className="keen-slider__slide py-4" >
         <div className=' bg-white  p-4 flex flex-col   justify-between shadow-lg rounded-lg mx-2'>
              <img src={inst3} alt="" />
              <h1 className='flex justify-center font-publicSans font-medium pt-3'>
              Clara Dupont
              </h1>
              <p className='flex justify-center font-medium text-[15px] text-[#737373] pt-3 font-publicSans'>
              Senior Instructor
              </p>
            </div>
            
            </div>
            <div className="keen-slider__slide py-4" >
         <div className=' bg-white  p-4 flex flex-col   justify-between shadow-lg rounded-lg mx-2'>
              <img src={inst3} alt="" />
              <h1 className='flex justify-center font-publicSans font-medium pt-3'>
              Clara Dupont
              </h1>
              <p className='flex justify-center font-medium text-[15px] text-[#737373] pt-3 font-publicSans'>
              Senior Instructor
              </p>
            </div>
            
            </div>
    </div>

    <div className='flex justify-center pt-6'>
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

     <div className='flex justify-end gap-4 mr-6 pt-6'>
          <button onClick={handlePrev} className='bg-[#00A3E0] text-white px-4 py-2 rounded-md'>
            ←
          </button>
          <button onClick={handleNext} className='bg-[#00A3E0] text-white px-4 py-2 rounded-md'>
            →
          </button>
        </div>
        </div>

    </div>
  );
};

export default Instructor;
























// import React, { useState } from "react";

// const Instructor = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Array of objects containing image, title, and description
//   const slides = [
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1731951688289-1de7eb23bdd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
//       title: "Nature View 1",
//       description: "A beautiful scenic view of a sunset.",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1731354233513-60e9edaddc5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
//       title: "Nature View 2",
//       description: "A calm lake surrounded by mountains.",
//     },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1731951688289-1de7eb23bdd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
//       title: "Nature View 3",
//       description: "A lush green forest in the morning light.",
//     },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1731951688289-1de7eb23bdd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
//       title: "Nature View 4",
//       description: "Snowy mountains under a clear blue sky.",
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? slides.length - 1 : prev - 1
//     ); 
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index); 
//   };

//   return (
//     <div className="relative w-full px-[10%] overflow-hidden">
      
//       <div
//         className="flex transition-transform gap-6 duration-300"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className=" h-64 w-1/4 p-4 flex flex-col justify-between items-center bg-gray-100 rounded-lg"
//           >
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="h-40 w-full rounded-md object-cover mb-2"
//             />
//             <div className="text-center">
//               <h3 className="text-xl font-bold">{slide.title}</h3>
//               <p className="text-sm text-gray-700">{slide.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         className="absolute top-1/4 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
//         onClick={prevSlide}
//       >
//         ←
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
//         onClick={nextSlide}
//       >
//         →
//       </button>

//       {/* Dots Navigation */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full ${
//               index === currentSlide
//                 ? "bg-gray-700"
//                 : "bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Instructor;

