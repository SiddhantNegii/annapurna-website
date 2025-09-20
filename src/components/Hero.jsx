import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const Hero = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const words = t('hero.tagline').split(" ");

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
        className="relative z-10 p-12 rounded-lg"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }} // ✅ FASTER DURATION
          // ✅ LARGER FONT SIZE & WIDER SPACING
          className="text-8xl font-playfair text-cream font-extrabold drop-shadow-lg tracking-wide"
        >
          Annapurna
        </motion.h1>

        <p className="my-6 text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold italic drop-shadow-lg leading-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              // ✅ FASTER ANIMATION DELAY
              transition={{ delay: i * 0.05 + 0.4, duration: 0.5, ease: "easeOut" }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </p>

        <MotionLink
          to="/menu"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          // ✅ FASTER ANIMATION DELAY
          transition={{ duration: 0.5, delay: words.length * 0.05 + 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.05, // Reduced scale a bit for a subtler effect
            boxShadow: '0 0 30px rgba(255,215,0,0.8)',
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
          // ✅ LARGER PADDING & FONT SIZE
          className="inline-block mt-10 bg-gold text-white px-12 py-4 rounded-full text-xl font-bold transition-all duration-300"
        >
          {t('hero.button')}
        </MotionLink>
      </motion.div>
    </section>
  );
};

export default Hero;