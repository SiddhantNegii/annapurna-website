import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import MenuPreview from '../components/MenuPreview';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <MenuPreview />
      <Gallery />
      <Contact />
    </>
  );
};

export default HomePage;