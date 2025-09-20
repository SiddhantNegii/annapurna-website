import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import menuData from '../assets/menu.json';

const MenuPreview = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const previewDishes = menuData.categories.flatMap(cat => cat.dishes).slice(0, 6);

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
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="menu-preview" className="py-24 bg-cream" ref={ref}>
      <div className="container mx-auto px-6 md:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-5xl font-serif text-maroon text-center mb-12"
        >
          {t('navbar.menu')} Highlights
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {previewDishes.map((dish, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              {/* Conditionally render the image */}
              {dish.image && (
                <img src={dish.image} alt={dish[`name_${currentLang}`]} className="w-full h-56 object-cover rounded-md mb-6 transform hover:scale-105 transition-transform duration-300" />
              )}
              <h4 className="text-2xl font-bold text-maroon mb-2">{dish[`name_${currentLang}`]}</h4>
              <p className="text-gray-600 mb-4 text-lg">{dish[`description_${currentLang}`]}</p>
              <p className="font-bold text-emerald text-xl">{dish.price}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <Link to="/menu" className="inline-block bg-saffron text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-emerald transition-colors duration-300 transform hover:scale-105">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;