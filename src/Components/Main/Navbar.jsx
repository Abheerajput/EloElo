import React, { useState } from "react";
import logo from "../../assets/Svg/logo.svg";
import lock from "../../assets/Svg/Lock.svg";

const Navbar = () => {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  return (
    <div className="border w-full mt-6 h-auto border-b border-l-0 border-r-0 border-t-0">
      <div className="flex flex-wrap items-center justify-between  py-4 ">
        <img src={logo} alt="Logo" className="w-24 md:w-32" />

        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex  flex-wrap items-center justify-between w-full lg:w-auto gap-4 lg:gap-6`}
        >
          {/* Links */}
          <div className="flex flex-row xs:py-4  sm:py-6 md:py-6  xs:flex-row flex-wrap items-center gap-4 xl:gap-6">
            {["Home", "About", "Course", "Teachers", "Progress"].map((link) => (
              <p
                key={link}
                className="text-[#6D737A] hover:text-blue-700 cursor-pointer font-publicSans font-medium"
              >
                {link}
              </p>
            ))}
          </div>

          <select
            value={language}
            onChange={handleLanguageChange}
            className="border-0 px-4 py-2 text-gray-700 rounded-md bg-gray-100"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>

          <div className="flex  xs:items-start xs:pt-4 xs:flex-row lg:flex-row items-end gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-[#6D737A] rounded-lg font-medium bg-gray-100">
              <img src={lock} alt="Lock Icon" className="w-4 h-4" />
              Login
            </button>
            <button className="px-4 py-2 text-white rounded-lg bg-[#00A3E0]">
              Get Started for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


































// import React, { useState } from "react";
// import Choose from "../Chooseus/Choose";
// import Instructor from "../Instructor/Instructor";
// import Achievement from "../Achievments/Achievments";
// import Hero from "../HeroSection/Hero";
// import logo from "../../assets/Svg/logo.svg";
// import lock from "../../assets/Svg/Lock.svg"

// const Navbar = () => {
//   const [language, setLanguage] = useState("en"); 

//   const handleLanguageChange = (event) => {
//     setLanguage(event.target.value);
//   };

//   return (
//         <div className="border w-full  mt-6 h-20 border-b border-l-0 border-r-0 border-t-0 ">
//           <div className="flex py-6 min-w-[25%]  justify-between">
//             <img src={logo} alt="Logo" />
//             <div className="flex min-w-[85%] items-center justify-end gap-2">
//               <span className="flex lg:gap-4 gap-4 xl:gap-12">
//                 <p className="text-[#6D737A] hover:text-blue-700 pointer font-publicSans font-medium">Home</p>
//                 <p className="text-[#6D737A] hover:text-blue-700 pointer font-publicSans font-medium">About</p>
//                 <p className="text-[#6D737A] hover:text-blue-700 pointer font-publicSans font-medium">Course</p>
//                 <p className="text-[#6D737A] hover:text-blue-700 pointer font-publicSans font-medium">Teachers</p>
//                 <p className="text-[#6D737A] hover:text-blue-700 pointer font-publicSans font-medium">Progress</p>
//               </span> 
//               <select
//                 value={language}
//                 onChange={handleLanguageChange}
//                 className="border-0 hover:border-0 px-10 text-gray-700 py-2  rounded-md"
//               >
//                 <option value="en" className="text-[#6D737A] ">English</option>
//                 <option value="es" className="text-[#6D737A] ">Español</option>
//                 <option value="fr" className="text-[#6D737A] ">Français</option>
//                 <option value="de" className="text-[#6D737A] ">Deutsch</option>
//               </select>
//               <div className="flex justify-end ">
//               <button className='px-6 py-2  rounded-lg items-center flex gap-2 text-[#6D737A]  font-medium font-publicSans'><img src={lock} alt="" />  Login</button>
//               <button className='px-6 py-2 text-white rounded-lg bg-[#00A3E0]'>Get Started for Free</button>
//               </div>
             

          
//             </div>
           
        
//           </div>
//         </div>

//   );
// };

// export default Navbar;
