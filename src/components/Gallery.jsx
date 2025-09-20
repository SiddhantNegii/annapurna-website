import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Gallery = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const previewImages = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/1.jpg',
  ].slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="gallery" className="py-24 bg-beige" ref={ref}>
      <div className="container mx-auto px-6 md:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-5xl font-serif text-maroon text-center mb-12"
        >
          Gallery Highlights
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {previewImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="overflow-hidden rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-80 object-cover" />
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <Link to="/gallery" className="inline-block bg-saffron text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-emerald transition-colors duration-300 transform hover:scale-105">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;