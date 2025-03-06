import { useState } from 'react';

import './App.css';
import Navbar from './Landing/Navbar'
import About from './Landing/About';
import Services from './Landing/Services';
import Cars from './Landing/Cars';
import Carsgallery from './Landing/Carsgallery';
import Testimonials from './Landing/Testimonial';
import Footer from './Landing/Footer'
function App() {

  return (
   <>
   <Navbar />
   <About />
   <Services />
   <Cars />
   <Carsgallery />
   <Testimonials />
   <Footer />
   </>
      
      
    
      
  
    
  );
}

export default App;
