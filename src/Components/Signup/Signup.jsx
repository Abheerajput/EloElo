import React, { useState } from 'react';
import Select from 'react-select';
import Flag from 'react-world-flags';
import img1 from "../../assets/Svg/bgimg1.svg";
import logo from "../../assets/Svg/logo.svg";
import righticon from "../../assets/Svg/loginsideicon.svg";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
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

    const languageOptions = [
        { value: 'luxembourg', label: 'Luxembourgish', flagCode: 'LU' },
        { value: 'english', label: 'English', flagCode: 'GB' },
        { value: 'french', label: 'French', flagCode: 'FR' },
    ];

    const handleLanguageChange = (selectedOption) => {
        setSelectedLanguage(selectedOption);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, learningGoals } = formData;

        if (!name || !email || !password || !learningGoals) {
            toast.error("All fields must be filled!");
            return;
        }

        // Process form submission logic
        console.log("Form submitted:", formData, selectedLanguage);
    };

    return (
        <div
            className="bg-white relative flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${img1})`,
                backgroundPosition: 'right',
            }}
        >
          
            <div className="absolute bottom-0 right-0 w-[30%] h-[30%]"></div>

            <div className="bg-white shadow-xl my-6 max-w-2xl py-[2%] px-[5%] w-full sm:w-3/4 sx:w-[90%]">
            <img src={logo} alt="Logo" className="py-4 flex  text-start" />                <h1 className="text-[30px] xs:text-[24px] text-[#242424] font-medium font-publicSans text-start">
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
                        <input
                            type="text"
                            id="learningGoals"
                            placeholder="Professional Communication"
                            value={formData.learningGoals}
                            onChange={handleChange}
                            className="w-full mt-2 text-[#595C5F] ps-4 font-medium rounded-lg py-2 border-2"
                        />
                    </div>
                    <div className="flex gap-1 pt-6">
                        <input type="checkbox" id="terms" className="w-6 h-6" />
                        <label htmlFor="terms" className="ml-2 text-[#A3A3A3] text-[15px] font-publicSans">
                            I agree to the <span className="text-[#00A3E0]">Terms and Conditions</span>
                        </label>
                    </div>
                    <div className="pt-4 flex justify-center">
                        <button
                            type="submit"
                            className="py-3 w-full px-6 font-publicSans font-medium bg-[#00A3E0] text-white text-[15px] rounded-lg"
                        >
                            Sign up
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
