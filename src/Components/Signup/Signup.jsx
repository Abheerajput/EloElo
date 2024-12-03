import React, { useState } from 'react';
import Select from 'react-select';
import Flag from 'react-world-flags';
import axios from 'axios';
import img1 from "../../assets/Svg/bgimg1.svg";
import logo from "../../assets/Svg/logo.svg";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import apiService from '../Commonapi/AppServer';
import { ClipLoader } from 'react-spinners';  // Import the loader

const Signup = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState('');

    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [selectedLanguage, setSelectedLanguage] = useState({
        value: 'luxembourg',
        label: 'Luxembourgish',
        flagCode: 'LU',
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        learningGoals: '',
    });

    const [isLoading, setIsLoading] = useState(false); // State to track loader visibility
    const languageOptions = [
        { value: 'luxembourg', label: 'Luxembourgish', flagCode: 'LU' },
        { value: 'english', label: 'English', flagCode: 'GB' },
        { value: 'french', label: 'French', flagCode: 'FR' },
        { value: 'spanish', label: 'Spanish', flagCode: 'ES' },
        { value: 'german', label: 'German', flagCode: 'DE' },
        { value: 'italian', label: 'Italian', flagCode: 'IT' },
        { value: 'portuguese', label: 'Portuguese', flagCode: 'PT' },
        { value: 'dutch', label: 'Dutch', flagCode: 'NL' },
        { value: 'russian', label: 'Russian', flagCode: 'RU' },
        { value: 'chinese', label: 'Chinese', flagCode: 'CN' },
        { value: 'japanese', label: 'Japanese', flagCode: 'JP' },
        { value: 'korean', label: 'Korean', flagCode: 'KR' },
        { value: 'arabic', label: 'Arabic', flagCode: 'AE' },
        { value: 'hindi', label: 'Hindi', flagCode: 'IN' },
        { value: 'turkish', label: 'Turkish', flagCode: 'TR' },
        { value: 'swedish', label: 'Swedish', flagCode: 'SE' },
        { value: 'danish', label: 'Danish', flagCode: 'DK' },
        { value: 'norwegian', label: 'Norwegian', flagCode: 'NO' },
        { value: 'polish', label: 'Polish', flagCode: 'PL' },
        { value: 'greek', label: 'Greek', flagCode: 'GR' },
        { value: 'hungarian', label: 'Hungarian', flagCode: 'HU' },
        { value: 'romanian', label: 'Romanian', flagCode: 'RO' },
        { value: 'ukrainian', label: 'Ukrainian', flagCode: 'UA' },
        { value: 'czech', label: 'Czech', flagCode: 'CZ' },
        { value: 'bulgarian', label: 'Bulgarian', flagCode: 'BG' },
        { value: 'swahili', label: 'Swahili', flagCode: 'KE' },
        { value: 'malay', label: 'Malay', flagCode: 'MY' },
        { value: 'vietnamese', label: 'Vietnamese', flagCode: 'VN' },
        { value: 'thai', label: 'Thai', flagCode: 'TH' },
        { value: 'filipino', label: 'Filipino', flagCode: 'PH' },
        { value: 'persian', label: 'Persian', flagCode: 'IR' },
        { value: 'indonesian', label: 'Indonesian', flagCode: 'ID' },
        { value: 'hebrew', label: 'Hebrew', flagCode: 'IL' },
        { value: 'bengali', label: 'Bengali', flagCode: 'BD' },
        { value: 'tamil', label: 'Tamil', flagCode: 'IN' },
        { value: 'punjabi', label: 'Punjabi', flagCode: 'IN' },
        { value: 'nepali', label: 'Nepali', flagCode: 'NP' },
        { value: 'slovak', label: 'Slovak', flagCode: 'SK' },
        { value: 'serbian', label: 'Serbian', flagCode: 'RS' },
        { value: 'croatian', label: 'Croatian', flagCode: 'HR' },
        { value: 'slovenian', label: 'Slovenian', flagCode: 'SI' },
        { value: 'estonian', label: 'Estonian', flagCode: 'EE' },
        { value: 'latvian', label: 'Latvian', flagCode: 'LV' },
        { value: 'lithuanian', label: 'Lithuanian', flagCode: 'LT' },
        { value: 'armenian', label: 'Armenian', flagCode: 'AM' },
        { value: 'georgian', label: 'Georgian', flagCode: 'GE' },
        { value: 'macedonian', label: 'Macedonian', flagCode: 'MK' },
        { value: 'kazakh', label: 'Kazakh', flagCode: 'KZ' },
        { value: 'belarusian', label: 'Belarusian', flagCode: 'BY' },
    ];
    
    

    const handleLanguageChange = (selectedOption) => {
        setSelectedLanguage(selectedOption);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isChecked) {
            setError('You must agree to the Terms and Conditions');
            return;
          }
        const { name, email, password, learningGoals } = formData;

        if (!name || !email || !password || !learningGoals) {
            toast.error("All fields must be filled!");
            return;
        }

        setIsLoading(true); // Show loader when submitting

        try {
            const data = {
                name,
                email,
                password,
                learningGoals,
                language: selectedLanguage.value,
            };
            const response = await apiService(`${BASE_URL}/auth/register`, 'POST', data);
        

            if (response.status === true) {
                toast.success(response.message);
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    learningGoals: '',
                });
            } else {
                toast.error(response.message);
            } 
        } catch (error) {
            toast.error(error.response.message); 
        } finally {
            setIsLoading(false); 
        }
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setError(''); 
      };
    return (
        <div
            className="bg-white relative flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${img1})`,
                backgroundPosition: 'right',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPositionX: '100%',
            }}
        >
            <div className="absolute bottom-0 right-0 w-[30%] h-[30%]"></div>

            <div className="bg-white shadow-xl my-6 max-w-2xl py-[2%] px-[5%] w-full sm:w-3/4 sx:w-[90%]">
                <img src={logo} alt="Logo" className="py-4 flex  text-start" />
                <h1 className="text-[30px] xs:text-[24px] text-[#242424] font-medium font-publicSans text-start">
                    Let’s get started
                </h1>
                <p className="text-[16px] xs:text-[14px] text-[#737373] font-normal font-publicSans text-start mb-6">
                    Begin by creating an account
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-[#A3A3A3] xs:text-[14px] font-publicSans">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mt-2 text-[#595C5F] font-medium ps-4  rounded-lg py-2 border-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-[#A3A3A3] xs:text-[14px] font-publicSans">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mt-2 ps-4 text-[#595C5F] font-medium rounded-lg py-2 border-2"
                        />
                    </div>
                    <div>
    <label htmlFor="password" className="block text-[#A3A3A3] xs:text-[14px] font-publicSans">
        Password
    </label>
    <input
        type="password"
        id="password"
        placeholder="Must be at least 8 characters"
        value={formData.password}
        onChange={handleChange}
        className="w-full mt-2 ps-4 text-[#595C5F] font-medium rounded-lg py-2 border-2"
    />
    {formData.password && formData.password.length < 8 && (
        <p className="text-red-500 text-sm">Password must be at least 8 characters long.</p>
    )}
</div>

                    <div>
                        <label htmlFor="native-language" className="block text-[#A3A3A3] xs:text-[14px] font-publicSans">
                            Select native language
                        </label>
                        <Select
                            id="native-language"
                            value={selectedLanguage}
                            onChange={handleLanguageChange}
                            options={languageOptions}
                            getOptionLabel={(e) => (
                                <div className="flex items-center font-publicSans text-[#212529BF]">
                                    <Flag code={e.flagCode} style={{ width: '20px', marginRight: '10px' }} />
                                    {e.label}
                                </div>
                            )}
                            className="mt-2"
                        />
                    </div>
                    <div>
    <label htmlFor="learningGoals" className="block text-[#A3A3A3] xs:text-[14px] font-publicSans">
        Set Learning Goals and Preferences
    </label>
    <select
        id="learningGoals"
        value={formData.learningGoals}
        onChange={handleChange}
        className="w-full mt-2 text-[#595C5F] ps-4 font-medium rounded-lg py-2 border-2"
    >
        <option value="" disabled>Select a Learning Goal</option>
        <option value="Professional Communication">Professional Communication</option>
        <option value="Leadership Skills">Leadership Skills</option>
        <option value="Time Management">Time Management</option>
        <option value="Public Speaking">Public Speaking</option>
        <option value="Teamwork">Teamwork</option>
    </select>
</div>

<div className="flex gap-1 pt-6">
        <input
          type="checkbox"
          id="terms"
          className="w-6 h-6"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="terms" className="ml-2 text-[#A3A3A3] text-[15px] font-publicSans">
          I agree to the <span className="text-[#00A3E0]">Terms and Conditions</span>
        </label>
      </div>
      
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                    <div className="pt-4 flex justify-center">
                        <button
                            type="submit"
                            className="py-3 w-full px-6 font-publicSans font-medium bg-[#00A3E0] text-white text-[15px] rounded-lg relative"
                            disabled={isLoading} 
                        >
                            {isLoading ? (
                                <ClipLoader color="#ffffff" size={24} className=" left-1/2  transform -translate-x-1/2" />
                            ) : (
                                "Sign up"
                            )}
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[#737373] font-publicSans text-[15px]">
                            Have an account on our platform?
                        </p>
                        <Link to="/login">
                            <p className="text-[#00A3E0] font-publicSans text-[15px]">
                                Sign
                            </p>
                        </Link>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signup;


// import React, { useState } from 'react';
// import Select from 'react-select';
// import Flag from 'react-world-flags';
// import img1 from "../../assets/Svg/bgimg1.svg";
// import logo from "../../assets/Svg/logo.svg";
// import righticon from "../../assets/Svg/loginsideicon.svg";
// import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';

// const Signup = () => {
//     const [selectedLanguage, setSelectedLanguage] = useState({
//         value: 'luxembourg',
//         label: 'Luxembourgish',
//         flagCode: 'LU',
//     });

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         learningGoals: '',
//     });

//     const languageOptions = [
//         { value: 'luxembourg', label: 'Luxembourgish', flagCode: 'LU' },
//         { value: 'english', label: 'English', flagCode: 'GB' },
//         { value: 'french', label: 'French', flagCode: 'FR' },
//     ];

//     const handleLanguageChange = (selectedOption) => {
//         setSelectedLanguage(selectedOption);
//     };

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData((prevData) => ({ ...prevData, [id]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const { name, email, password, learningGoals } = formData;

//         if (!name || !email || !password || !learningGoals) {
//             toast.error("All fields must be filled!");
//             return;
//         }

//         // Process form submission logic
//         console.log("Form submitted:", formData, selectedLanguage);
//     };

//     return (
//         <div
//             className="bg-white relative flex items-center justify-center bg-cover bg-center"
//             style={{
//                 backgroundImage: `url(${img1})`,
//                 backgroundPosition: 'right',
//                 backgroundSize: 'cover',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundAttachment: 'fixed',
//                 backgroundPositionX: '100%',
//             }}
//         >
          
//             <div className="absolute bottom-0 right-0 w-[30%] h-[30%]"></div>

//             <div className="bg-white shadow-xl my-6 max-w-2xl py-[2%] px-[5%] w-full sm:w-3/4 sx:w-[90%]">
//             <img src={logo} alt="Logo" className="py-4 flex  text-start" />                <h1 className="text-[30px] xs:text-[24px] text-[#242424] font-medium font-publicSans text-start">
//                     Let’s get started
//                 </h1>
//                 <p className="text-[16px] xs:text-[14px] text-[#737373] font-normal font-publicSans text-start mb-6">
//                     Begin by creating an account
//                 </p>
//                 <form className="space-y-6" onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="name" className="block text-[#A3A3A3] xs:text-[14px] font-publicSans">
//                             Name
//                         </label>
//                         <input
//                             type="text"
//                             id="name"
//                             placeholder="Enter your name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="w-full mt-2 text-[#595C5F] font-medium ps-4  rounded-lg py-2 border-2"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="email" className="block text-[#A3A3A3] xs:text-[14px] font-publicSans">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             placeholder="Enter your email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="w-full mt-2 ps-4 text-[#595C5F] font-medium rounded-lg py-2 border-2"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="block text-[#A3A3A3] xs:text-[14px] font-publicSans">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             placeholder="Must be at least 8 characters"
//                             value={formData.password}
//                             onChange={handleChange}
//                             className="w-full mt-2 ps-4 text-[#595C5F] font-medium rounded-lg py-2 border-2"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="native-language" className="block text-[#A3A3A3] xs:text-[14px] font-publicSans">
//                             Select native language
//                         </label>
//                         <Select
//                             id="native-language"
//                             value={selectedLanguage}
//                             onChange={handleLanguageChange}
//                             options={languageOptions}
//                             getOptionLabel={(e) => (
//                                 <div className="flex items-center font-publicSans text-[#212529BF]">
//                                     <Flag code={e.flagCode} style={{ width: '20px', marginRight: '10px' }} />
//                                     {e.label}
//                                 </div>
//                             )}
//                             className="mt-2"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="learningGoals" className="block text-[#A3A3A3] xs:text-[14px] font-publicSans">
//                             Set Learning Goals and Preferences
//                         </label>
//                         <input
//                             type="text"
//                             id="learningGoals"
//                             placeholder="Professional Communication"
//                             value={formData.learningGoals}
//                             onChange={handleChange}
//                             className="w-full mt-2 text-[#595C5F] ps-4 font-medium rounded-lg py-2 border-2"
//                         />
//                     </div>
//                     <div className="flex gap-1 pt-6">
//                         <input type="checkbox" id="terms" className="w-6 h-6" />
//                         <label htmlFor="terms" className="ml-2 text-[#A3A3A3] text-[15px] font-publicSans">
//                             I agree to the <span className="text-[#00A3E0]">Terms and Conditions</span>
//                         </label>
//                     </div>
//                     <div className="pt-4 flex justify-center">
//                         <button
//                             type="submit"
//                             className="py-3 w-full px-6 font-publicSans font-medium bg-[#00A3E0] text-white text-[15px] rounded-lg"
//                         >
//                             Sign up
//                         </button>
//                     </div>
//                     <div className="flex justify-center">
//                         <p className="text-[#737373] font-publicSans text-[15px]">
//                             Have an account on our platform?
//                         </p>
//                         <Link to="/login">
//                         <p className="text-[#00A3E0] font-publicSans text-[15px]">

//                             Sign 
//                         </p>
//                         </Link>


//                     </div>
//                 </form>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };

// export default Signup;
