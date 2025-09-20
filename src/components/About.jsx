import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const About = () => {
  const { t } = useTranslation();
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ['start end', 'end start'] });
  const yImage1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yImage3 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="about" className="py-24 bg-beige text-center" ref={inViewRef}>
      <div className="container mx-auto px-6 md:px-0" ref={scrollRef}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-5xl font-serif text-maroon mb-8"
        >
          {t('about.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto text-xl leading-loose whitespace-pre-line"
        >
          {t('about.text')}
        </motion.p>
        
        {/*
          Corrected: Changed to a square aspect ratio (1:1) for a cleaner,
          more uniform look.
        */}
        <div className="mt-16 flex justify-center items-end gap-8 flex-wrap lg:flex-nowrap">
          <motion.div
            style={{ y: yImage1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-lg shadow-xl overflow-hidden max-w-[300px] w-full bg-white p-4"
          >
            <div className="aspect-square">
              <img src="/images/12.jpg" alt="Interior" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div
            style={{ y: yImage2 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="rounded-lg shadow-xl overflow-hidden max-w-[300px] w-full bg-white p-4"
          >
            <div className="aspect-square">
              <img src="/images/7.jpg" alt="Exterior" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div
            style={{ y: yImage3 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="rounded-lg shadow-xl overflow-hidden max-w-[300px] w-full bg-white p-4"
          >
            <div className="aspect-square">
              <img src="/images/15.jpg" alt="Statue" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
