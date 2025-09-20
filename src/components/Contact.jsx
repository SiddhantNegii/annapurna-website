import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="contact" className="py-24 bg-cream" ref={ref}>
      <div className="container mx-auto text-center px-6 md:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-5xl font-serif text-maroon mb-6"
        >
          {t('contact.title')}
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-xl w-full md:w-1/3"
          >
            <h3 className="text-2xl font-bold text-saffron mb-4">{t('contact.visit_us')}</h3>
            <p className="text-lg">Kemptener Str. 16</p>
            <p className="text-lg">87629 Füssen, DE</p>
            <p className="text-lg mt-4">Phone: +49 8362-8836943</p>
            <p className="text-lg mt-4 font-bold">Hours:</p>
            <p className="text-lg">Mon - Fri: 12:00 - 21:00</p>
            <p className="text-lg">Sat: 12:00 - 22:00</p>
            <p className="text-lg">Sun: 12:00 - 21:00</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/3 h-96 rounded-lg shadow-xl overflow-hidden"
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.204595267107!2d10.706175077196016!3d47.57500307119045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b0572e816a737%3A0xc34857497d02293b!2sAnnapurna%20Indisches%20Restaurant!5e0!3m2!1sen!2sde!4v1695221051234!5m2!1sen!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;