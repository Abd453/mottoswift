import React, { useState } from 'react';
import carl from '../assets/img/carl.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-[1440px]] h-[1020px] overflow-hidden">
      {/* Fixed Background Image */}
      <img
        src={carl}
        alt="Car"
        className="w-full h-full object-cover top-0 left-0"
      />

      {/* Navbar Positioned on the Image */}
      <nav className="absolute top-0 left-0 w-full z-50 bg-black bg-opacity-50 py-4 px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-3xl sm:text-4xl font-lora font-bold">
          <span className="font-extrabold">Your</span>
          <span className="font-normal">Car</span>
        </div>

        {/* Navigation Links and Cart Icon Container */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6 items-center">
            {['Home', 'About', 'Services', 'Cars', 'Contact Us'].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="text-white font-noto font-bold text-lg px-4 py-2 hover:bg-[#741906] rounded"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Cart Icon */}
          <a
            href="#cart"
            className="text-white text-lg px-4 py-2 flex items-center hover:bg-[#741906] rounded"
          >
            <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
          </a>

          {/* Hamburger Menu Button (Visible Only on Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl hover:text-[#741906]"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Text Overlay: Find the perfect car for you at YourCar */}
      <div
        className="absolute text-right"
        style={{
          width: '100%',
          maxWidth: '605px',
          top: '182px',
          right: '50px',
          fontFamily: 'Lora',
          fontWeight: 700,
          fontSize: 'clamp(32px, 6vw, 64px)',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#FFFFFF',
        }}
      >
        Find the perfect car for you at YourCar.
      </div>

      {/* Text Overlay: We offer a wide range of cars... */}
      <div
        className="absolute text-right"
        style={{
          width: '100%',
          maxWidth: '395px',
          top: '378px',
          right: '50px',
          fontFamily: 'Lora',
          fontWeight: 700,
          fontSize: 'clamp(16px, 4vw, 32px)',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#FFFFFF',
        }}
      >
        We offer a wide range of cars that cater to your needs and budget. Visit
        us today and drive away with your dream car!
      </div>

      {/* Discover Button */}
      <a
        href="https://yourcar.com/discover"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inline-flex items-center justify-center"
        style={{
          width: '100%',
          maxWidth: '195px',
          height: '55px',
          top: '631px',
          right: '50px',
          color: '#FFFFFF',
          fontFamily: 'Lora',
          fontWeight: 700,
          fontSize: 'clamp(12px, 2vw, 20px)',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          border: '2px solid #FFFFFF',
          borderRadius: '8px',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        <span>Discover</span>
        <span className="ml-2">↗</span>
      </a>

      {/* Mobile Menu (Right-to-Left Slide Animation) */}
      {menuOpen && (
        <ul
          className="md:hidden bg-black bg-opacity-80 flex flex-col space-y-4 items-center py-4 absolute top-16 right-0 w-[75%] h-full transform transition-transform duration-300"
          style={{ translateX: menuOpen ? '0%' : '100%' }}
        >
          {['Home', 'About', 'Services', 'Cars', 'Contact Us'].map(
            (item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="text-white text-lg px-4 py-2 block hover:bg-[#741906] rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
