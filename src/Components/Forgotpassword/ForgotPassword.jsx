import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { Link } from "react-router-dom";
import logo from "../../assets/Svg/logo.svg";
import { RxCross1 } from "react-icons/rx";
import { FiLock } from "react-icons/fi"; // Lock icon for password fields
import { FiEye, FiEyeOff } from 'react-icons/fi';
import apiService from '../Commonapi/AppServer';

const ForgotPassword = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const location = useLocation();
  const navigate = useNavigate();
  // const [newPassword, setNewPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  // const [success, setSuccess] = useState('');
  const [tokenError, setTokenError] = useState('');
  const { token } = queryString.parse(location.search);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setTokenError('Invalid or missing token.');
        return;
      }

      const url = `${BASE_URL}/auth/verifyForgotLink`;
      const payload = { token };
      const headers = { 'Content-Type': 'application/json' };

      const result = await apiService(url, "POST", payload, headers);

      if (result.success) {
        setEmail(result.data.data.email);
      } else {
        setTokenError('Invalid or expired reset link.');
      }
    };

    verifyToken();
  }, [token, navigate]);



  // useEffect(() => {
  //   const verifyToken = async () => {
  //     if (!token) {
  //       setTokenError('Invalid or missing token.');
  //       return;
  //     }

  //     try {
  //       const response = await axios.post(
  //         `${BASE_URL}/auth/verifyForgotLink`,
  //         { token },
  //         {
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         }
  //       );

  //       if (response.status === 200) {
  //         setEmail(response.data.data.email);
  //       } else {
  //         setTokenError('Invalid or expired reset link.');
  //       }
  //     } catch (err) {
  //       setTokenError('Invalid or expired reset link.');
  //     }
  //   };

  //   verifyToken();
  // }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      setTimeout(() => setError(''), 2000);
      return;
    }
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      setTimeout(() => setError(''), 2000);
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/forgotPassword`,
        { email, password: newPassword },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        setSuccess('Password has been reset successfully.');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError(response.data.message || 'Failed to reset password. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      <div className="fixed flex items-center w-full px-6 py-4 justify-between border-b-2  ">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 xs:w-28 sm:w-32" />
        </Link>
        <Link to="/">
          <RxCross1 size={24} />
        </Link>
      </div>
      
      <div className="flex flex-grow flex-col xs:px-4 w-full xs:justify-start items-center justify-center pt-20">
        <div className="mt-4 max-w-[600px]  p-6 rounded-lg">
          <h2 className="text-[28px] font-bold lexend-bold">Create a New Password</h2>
          <p className="text-[15px] mt-2 lexend-normal text-gray-600">
            Your new password must be different from previously used passwords. 
          </p>
          <p className="text-[14px] lexend-normal text-gray-500 mb-4">
            Please ensure your new password has at least 8 characters, includes letters and numbers, and matches in both fields.
          </p>

          {(error || tokenError) && (
            <div className="text-red-500 mt-2">
              {error || tokenError}
              {tokenError && <p>Redirecting to the homepage in 3 seconds...</p>}
            </div>
          )}

<form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">New Password</label>
        <div className="relative">
          <FiLock className="absolute left-3 top-3 text-gray-500" />
          <input
            type={showNewPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full pl-10 pr-10 py-2 text-gray-700 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Enter new password"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-2"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? <FiEyeOff className="text-gray-500" /> : <FiEye className="text-gray-500" />}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-1">Password must be at least 8 characters long.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <div className="relative">
          <FiLock className="absolute left-3 top-3 text-gray-500" />
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full pl-10 pr-10 py-2 text-gray-700 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Confirm new password"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-2"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FiEyeOff className="text-gray-500" /> : <FiEye className="text-gray-500" />}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-1">Both passwords must match.</p>
      </div>

      <button
        type="submit"
        className="bg-[#00A3E0] w-full text-white rounded-lg px-4 py-2 font-medium hover:bg-[#00A3E0] transition-colors duration-300"
      >
        Reset Password
      </button>
      
      {success && <div className="text-green-500 mt-2">{success}</div>}
    </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
