import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Us Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#007ABF]">Elo <span className="text-red-500">Elo</span></h2>
          <p className="text-sm text-gray-600 mt-4">
            <strong>Contact Us</strong><br />
            Call: +352 123 456 789<br />
            Address: 45 Language Street, Luxembourg City, Luxembourg<br />
            Email: <a href="mailto:support@eloeloplatform.com" className="text-blue-500">support@eloeloplatform.com</a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-500">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-blue-500">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="#" className="text-blue-500">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Course</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">FAQ</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Language Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Language</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-500">English</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Luxembourgish</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">French</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">German</a></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-sm ">
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Email here"
              className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full mt-3 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;