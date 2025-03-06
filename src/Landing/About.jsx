import React from 'react';
import cartop from '../assets/img/cartop.jpg'; // Import the cartop image
import brick from '../assets/img/brick.jpg'; // Import the brick image

function About() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main Layout Container */}
      <div
        style={{
          position: 'absolute',
          width: '1279.03px', // Specified width
          height: '846.22px', // Specified height
          top: '1088px', // Adjusted to appear below the navbar
          left: '78px', // Specified left position
          border: '2px solid red', // Temporary border for debugging
        }}
      >
        {/* Brick Image (Base Layer) */}
        <img
          src={brick} // Path to the brick image
          alt="Brick"
          style={{
            position: 'absolute',
            width: '453.59px', // Specified width
            height: '616.19px', // Specified height
            top: '1170px', // Relative to the container
            left: '815px', // Relative to the container
            // objectFit: 'cover', // Ensures the image scales properly
          }}
        />

        {/* Cartop Image (On Top of Brick) */}
        <img
          src={cartop} // Path to the cartop image
          alt="Cartop"
          style={{
            // position: 'absolute',
            width: '465.97px', // Specified width
            height: '785.22px', // Specified height
            top: '1149px', // Relative to the container (same as brick)
            left: '815px', // Relative to the container (same as brick)
            objectFit: 'cover', // Ensures the image scales properly
          }}
        />
      </div>
    </div>
  );
}

export default About;
