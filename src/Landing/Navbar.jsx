import React from 'react';
import carl from '../assets/img/carl.jpg';

// Import Font Awesome for the cart icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div
      className="relative w-[1440px] h-[1020px] mx-auto"
      style={{ maxWidth: '1440px', maxHeight: '1020px' }}
    >
      {/* Full-Screen Cover Image */}
      <img
        src={carl}
        alt="Car"
        className="w-full h-full object-cover"
      />

      {/* Navbar Positioned on the Image */}
      <nav className="absolute top-0 left-0 w-full z-50 bg-black bg-opacity-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-[1440px]">
          {/* Logo Section */}
          <div className="text-white text-4xl font-lora font-bold">
            <span className="font-extrabold">Your</span>
            <span className="font-normal">Car</span>
          </div>

          {/* Navigation Links with Cart Icon */}
          <ul className="hidden md:flex space-x-8 items-center">
            {['Home', 'About', 'Services', 'Cars', 'Contact Us'].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="text-white font-noto font-bold text-xl px-4 py-2 hover:bg-[#741906] hover:text-white rounded"
                >
                  {item}
                </a>
              </li>
            ))}
            {/* Cart Icon */}
            <li>
              <a
                href="#cart"
                className="text-white font-noto font-bold text-xl px-4 py-2 hover:bg-[#741906] hover:text-white rounded flex items-center"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
                Cart
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white text-2xl">☰</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;