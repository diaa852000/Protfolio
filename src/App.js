import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div className='relative flex flex-col'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
