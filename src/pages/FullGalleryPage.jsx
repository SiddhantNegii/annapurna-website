import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Helper components for SVG icons for a cleaner look
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);


const FullGalleryPage = () => {
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState(null);

  const allImages = [
    '/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg', 
    '/images/5.jpg', '/images/6.jpg', '/images/7.jpg', '/images/8.jpg',
    '/images/9.jpg', '/images/10.jpg', '/images/11.jpg', '/images/12.jpg',
    '/images/13.jpg', '/images/14.jpg', '/images/15.jpg', '/images/16.jpg',
    '/images/17.jpg', '/images/18.jpg', '/images/19.jpg', '/images/20.jpg',
    '/images/21.jpg', '/images/22.jpg', '/images/23.jpg', '/images/24.jpg',
    '/images/25.jpg', '/images/26.jpg', '/images/27.jpg',
  ];

  // --- Handlers for Lightbox Navigation ---
  const handleNext = () => {
    setSelectedImage((prev) => (prev + 1) % allImages.length);
  };
  const handlePrev = () => {
    setSelectedImage((prev) => (prev - 1 + allImages.length) % allImages.length);
  };
  
  // Effect for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section id="full-gallery" className="py-24 bg-beige min-h-screen" ref={inViewRef}>
        <div className="container mx-auto px-6 md:px-0">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-5xl font-serif text-maroon text-center mb-12"
          >
            Full Gallery
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {allImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg shadow-xl cursor-pointer"
                onClick={() => setSelectedImage(index)}
                layoutId={`gallery-image-${index}`} // For smooth animation
              >
                <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-80 object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal using AnimatePresence */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button className="absolute top-5 right-5 z-50 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition">
              <CloseIcon />
            </button>

            {/* Prev Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-5 z-50 text-white bg-black/50 rounded-full p-3 hover:bg-black/75 transition"
            >
              <ChevronLeftIcon />
            </button>

            {/* Next Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-5 z-50 text-white bg-black/50 rounded-full p-3 hover:bg-black/75 transition"
            >
              <ChevronRightIcon />
            </button>

            {/* Expanded Image */}
            <motion.div
              className="relative rounded-lg overflow-hidden"
              layoutId={`gallery-image-${selectedImage}`}
            >
              <img 
                src={allImages[selectedImage]} 
                alt="Expanded view" 
                className="max-h-[90vh] max-w-[90vw] object-contain" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FullGalleryPage;