import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const Hero = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const words = t('hero.tagline').split(" ");

  // Framer Motion variants for the Diwali text animation
  const diwaliVariants = {
    initial: { scale: 0.5, opacity: 0, rotate: -5 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2, // Make it appear quickly
      }
    },
    // Add a subtle flash/pulse effect
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <motion.div
        style={{ backgroundImage: "url('/images/hero.jpg')", y }}
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        // ✅ Reduced padding on mobile
        className="relative z-10 p-6 md:p-12 rounded-lg"
      >
        {/*
          // --- NEW DIWALI GREETING ---
        */}
        <motion.p
          variants={diwaliVariants}
          initial="initial"
          animate={["animate", "pulse"]} // Run both the entry animation and the pulse effect
          // ✅ Style the text to be festive (Gold/Yellow, bold, slightly smaller on mobile)
          className="text-3xl md:text-5xl font-playfair font-extrabold text-gold drop-shadow-xl mb-4 md:mb-6 tracking-wider"
        >
          🪔 Happy Diwali! 🪔
        </motion.p>
        {/*
          // --- END NEW DIWALI GREETING ---
        */}

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          // ✅ Made font smaller on mobile (text-6xl) and larger on desktop (md:text-8xl)
          className="text-6xl md:text-8xl font-playfair text-cream drop-shadow-lg tracking-wide"
        >
          Annapurna
        </motion.h1>

        {/* ✅ Adjusted responsive font sizes for the tagline */}
        <p className="my-6 text-2xl sm:text-3xl lg:text-5xl font-montserrat font-bold italic drop-shadow-lg leading-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 + 0.4, duration: 0.5, ease: "easeOut" }}
              className="inline-block mr-2 md:mr-3" // Slightly less margin on mobile
            >
              {word}
            </motion.span>
          ))}
        </p>

        <MotionLink
          to="/menu"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: words.length * 0.05 + 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 30px rgba(255,215,0,0.8)',
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
          // ✅ Made button smaller on mobile, then larger on medium screens and up
          className="inline-block mt-8 md:mt-10 bg-gold text-white px-8 py-3 text-lg md:px-12 md:py-4 md:text-xl rounded-full font-bold transition-all duration-300"
        >
          {t('hero.button')}
        </MotionLink>
      </motion.div>
    </section>
  );
};

export default Hero;