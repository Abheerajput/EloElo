import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img1 from "../../assets/Svg/bgimg1.svg";
import logo from "../../assets/Svg/logo.svg";
import { Link, useNavigate, } from "react-router-dom";
import apiService from "../Commonapi/AppServer";
import { ClipLoader } from "react-spinners"; // You can choose a different loader

const Login = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all the fields!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setLoading(true); // Start the loader

    try {
      const data = { email, password };

      const response = await apiService(
      `${BASE_URL}/auth/login`, 
        "POST",
        data
      );
    
      if (response.status === true) {
        toast.success(response.message);
      
        const token = response.token
        localStorage.setItem("token", response.token);
       window.location.reload()
      
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      toast.error("Login failed, please try again!");
    } finally {
      setLoading(false); // Stop the loader after the request
    }
  };

  return (
    <div
      className="bg-white relative flex items-center justify-center bg-cover bg-center p-4 sm:p-8"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPositionX: "100%",
      }}
    >
      <ToastContainer />

      <div className="bg-white text-start shadow-xl my-6 max-w-2xl w-full p-8 rounded-lg">
        <img src={logo} alt="Logo" className="py-4 flex text-start" />
        <h1 className="text-2xl xs:text-[22px] sm:text-3xl text-[#242424] font-medium font-publicSans text-start">
          Welcome Back!
        </h1>
        <p className="text-sm sm:text-base text-[#737373] font-normal font-publicSans xs:text-[14px] text-start mb-6">
          Log in to your account now and begin your exciting journey with us,
          exploring all the incredible opportunities we have to offer!
        </p>
        <form
          className="xl:space-y-6 space-y-3 md:space-y-4 xs:space-y-3"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-[#A3A3A3] xs:text-[15px] font-publicSans"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-2 ps-4 text-[#595C5F] font-medium rounded-lg py-2 border-2"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-[#A3A3A3] xs:text-[15px] font-publicSans"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Must be at least 8 characters"
              className="w-full mt-2 ps-4 text-[#595C5F] font-medium rounded-lg py-2 border-2"
            />
          </div>
          <div className="pt-2 flex justify-end">
            <Link
              to="/forgot-password"
              className="font-medium font-publicSans text-[#00A3E0]"
            >
              Forgot Password
            </Link>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-5 h-5"
              id="rememberMe"
              name="rememberMe"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 text-[#A3A3A3] text-sm font-publicSans"
            >
              Remember me
            </label>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="py-3 w-full px-6 bg-[#00A3E0] font-semibold text-white rounded-xl"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <ClipLoader color="#fff" size={20} /> // Loader spinner
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <div className="flex gap-2 justify-center pt-4">
            <p className="text-[#737373] font-medium font-publicSans text-sm">
              New on our platform?
            </p>
            <Link to="/signup">
              <p className="text-[#00A3E0] font-medium font-publicSans text-sm">
                Create an account
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import img1 from "../../assets/Svg/bgimg1.svg";

// import logo from "../../assets/Svg/logo.svg";
// import { Link } from "react-router-dom";

// const Login= () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error("Please fill all the fields!", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     } else {
//       // Add form submission logic here
//       toast.success("Signed in successfully!", {
//         position: toast.POSITION.TOP_RIGHT, // Example position
//         autoClose: 3000,
//       });
//     }
//   };

//   return (
//     <div
//       className="bg-white relative flex items-center justify-center bg-cover bg-center p-4 sm:p-8"
    
//       style={{
//         backgroundImage: `url(${img1})`,
//         backgroundPosition: 'right',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundAttachment: 'fixed',
//         backgroundPositionX: '100%',
//     }}
// >
//             <ToastContainer />

//       <div className="bg-white text-start shadow-xl my-6 max-w-2xl w-full p-8 rounded-lg">
//         <img src={logo} alt="Logo" className="py-4 flex  text-start" />
//         <h1 className="text-2xl xs:text-[22px] sm:text-3xl text-[#242424] font-medium font-publicSans text-start">
//           Welcome Back!
//         </h1>
//         <p className="text-sm sm:text-base text-[#737373] font-normal font-publicSans xs:text-[14px] text-start mb-6">
//           Log in to your account now and begin your exciting journey with us,
//           exploring all the incredible opportunities we have to offer!
//         </p>
//         <form className="xl:space-y-6 space-y-3  md:space-y-4 xs:space-y-3" onSubmit={handleSubmit}>
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-[#A3A3A3]  xs:text-[15px] font-publicSans"
//             >
//               Email
//             </label>
//             <input
//               type="text"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full mt-2 ps-4 text-[#595C5F] font-medium rounded-lg py-2 border-2"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-[#A3A3A3] xs:text-[15px]  font-publicSans"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Must be at least 8 characters"
//               className="w-full mt-2 ps-4 text-[#595C5F] font-medium rounded-lg py-2 border-2"
//             />
//           </div>
//           <div className="pt-2 flex justify-end">
//             <Link
//               to="/forgot-password"
//               className="font-medium font-publicSans text-[#00A3E0]"
//             >
//               Forgot Password
//             </Link>
//           </div>
//           <div className="flex  items-center ">
//             <input
//               type="checkbox"
//               className="w-5 h-5"
//               id="rememberMe"
//               name="rememberMe"
//             />
//             <label
//               htmlFor="rememberMe"
//               className="ml-2 text-[#A3A3A3] text-sm font-publicSans"
//             >
//               Remember me
//             </label>
//           </div>
//           <div className="pt-4">
//             <button
//               type="submit"
//               className="py-3 w-full px-6 bg-[#00A3E0] font-semibold text-white rounded-xl"
//             >
//               Sign In
//             </button>
//           </div>
//           <div className="flex gap-2 justify-center pt-4">
//             <p className="text-[#737373] font-medium font-publicSans text-sm">
//               New on our platform?
//             </p>
//             <Link to="/signup">
//             <p className="text-[#00A3E0] font-medium font-publicSans text-sm">Create an account</p>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
