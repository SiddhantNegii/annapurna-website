import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Helper components for icons to keep the code clean
const LocationIcon = () => (
  <svg className="w-6 h-6 mr-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const PhoneIcon = () => (
  <svg className="w-6 h-6 mr-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);
const ClockIcon = () => (
  <svg className="w-6 h-6 mr-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-24 bg-cream" ref={ref}>
      <div className="container mx-auto px-6 md:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-5xl font-serif text-maroon text-center mb-16"
        >
          Contact & Location
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-serif text-maroon mb-4">Visit Us</h3>
              <div className="flex items-start">
                <LocationIcon />
                <p className="text-lg text-text-dark">
                  Kemptener Str. 16<br />
                  87629 Füssen, DE
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-serif text-maroon mb-4">Get in Touch</h3>
              <div className="flex items-center">
                <PhoneIcon />
                <a href="tel:+4983628836943" className="text-lg text-text-dark hover:text-primary-light transition-colors">
                  +49 8362-8836943
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-serif text-maroon mb-4">Hours</h3>
              <div className="flex items-start">
                <ClockIcon />
                <div className="text-lg text-text-dark">
                  <p><b>Mon - Fri:</b> 12:00 - 21:00</p>
                  <p><b>Sat:</b> 12:00 - 22:00</p>
                  <p><b>Sun:</b> 12:00 - 21:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-xl shadow-2xl overflow-hidden h-96 lg:h-full"
          >
            {/* ✅ UPDATED with the correct location and centered view */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.211831853488!2d10.6978823156479!3d47.56828497918208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479cf647f0a7a4c7%3A0x6a2d9c3b8e8f8c8d!2sAnnapurna!5e0!3m2!1sen!2sde!4v1616161616161!5m2!1sen!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;