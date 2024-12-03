import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // For extracting query params and navigation
import axios from 'axios'; // Import axios
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiService from '../Commonapi/AppServer';

const VerifyEmail = () => {
  const BASE_URL= process.env.REACT_APP_BASE_URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const location = useLocation(); // Use to get query params
  const hasFetched = useRef(false);

      const getTokenFromUrl = () => {
    const params = new URLSearchParams(location.search);
    return params.get('token');
  };

  useEffect(() => {
    if (hasFetched.current) return;
    const token = getTokenFromUrl(); 

    if (token) {
      hasFetched.current = true;
      setLoading(true);

      const url = `${BASE_URL}/auth/verify`;
      const payload = { token };
      const headers = { 'Content-Type': 'application/json' };

      const verifyEmail = async () => {
        const response = await apiService(url, "POST", payload, headers);

        setLoading(false);
console.log(response)
        if (response.status === true) {
          toast.success('Email verified successfully!', {
            position: "top-right",
            autoClose: 3000, 
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          // Redirect to login page after a short delay
          setTimeout(() => {
            navigate('/login');
          }, 3000); // 3-second delay for user to see the toast
        } else {
          setError('Error verifying email. Please try again later.');
        }
      };

      verifyEmail();
    } else {
      setError('No token found. Invalid link.');
      setLoading(false);
    }
  }, [location.search, navigate]);


  // useEffect(() => {
  //   if (hasFetched.current) return;

  //   const token = getTokenFromUrl();

  //   if (token) {
  //     // Start loading
  //     hasFetched.current = true;

  //     setLoading(true);

  //     // Call the backend to verify the token using axios
  //     axios.post(`${BASE_URL}/auth/verify`, { token })
  //       .then((response) => {
  //         setLoading(false);
  //         if (response.data.status) {
  //           // Show success toast message
  //           toast.success('Email verified successfully!', {
  //             position: "top-right",
  //             autoClose: 3000, // Automatically close after 3 seconds
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //           });

  //           // Redirect to login page after a short delay
  //           setTimeout(() => {
  //             navigate('/login');
  //           }, 3000); // 3-second delay for user to see the toast
  //         }
  //       })
  //       .catch((err) => {
  //         setLoading(false);
  //         setError('Error verifying email. Please try again later.');
  //         console.error('Verification error:', err); // Log error for debugging
  //       });
  //   } else {
  //     setError('No token found. Invalid link.');
  //     setLoading(false);
  //   }
  // }, [location.search, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Email Verification</h2>
        <p className="text-center text-gray-600 mb-6">
          We are verifying your email. Please wait a moment.
        </p>

        {loading ? (
          <div className="flex justify-center mb-4">
            {/* Loader */}
            <div className="loader border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Error message */}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </>
        )}
      </div>
      {/* Include ToastContainer for the toast messages */}
      <ToastContainer />
    </div>
  );
};

export default VerifyEmail;
