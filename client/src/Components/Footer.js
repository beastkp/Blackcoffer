import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p>Email: LSTGoods@gmail.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          {/* Add social media icons or links here */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} LST goods. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
