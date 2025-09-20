import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import menuData from '../assets/menu.json';

const FullMenuPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // The main container variants for the initial page load
  const mainContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Variants for each individual menu item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (!menuData || !menuData.categories || menuData.categories.length === 0) {
    return (
      <section id="full-menu" className="py-24 bg-cream text-center">
        <div className="container mx-auto px-6 md:px-0">
          <h2 className="text-5xl font-serif text-maroon">Menu not available.</h2>
          <p className="mt-4 text-xl">Please check back later.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="full-menu" className="py-24 bg-cream">
      <div className="container mx-auto px-6 md:px-0">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={mainContainerVariants}
          className="text-5xl font-serif text-maroon text-center mb-12"
        >
          {t('navbar.menu')}
        </motion.h2>

        {menuData.categories.map((category, index) => {
          const [categoryRef, categoryInView] = useInView({ triggerOnce: true, threshold: 0.1 });
          
          return (
            <motion.div
              key={index}
              ref={categoryRef}
              initial="hidden"
              animate={categoryInView ? "visible" : "hidden"}
              className="mb-16"
              variants={mainContainerVariants}
            >
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={categoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-serif text-saffron mb-2"
              >
                {category[`name_${currentLang}`]}
              </motion.h3>
              {category.subtitle_en && (
                <p className="text-gray-600 mb-6 italic text-lg">{category[`subtitle_${currentLang}`]}</p>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {category.dishes.map((dish, dishIndex) => (
                  <motion.div
                    key={dishIndex}
                    variants={itemVariants}
                    initial="hidden"
                    animate={categoryInView ? "visible" : "hidden"}
                    transition={{ delay: dishIndex * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.03, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', transition: { duration: 0.15 } }}
                    className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between transition-transform duration-300"
                  >
                    <div>
                      <h4 className="text-2xl font-bold text-maroon mb-2 flex items-center justify-between">
                        <span>{dish[`name_${currentLang}`]}</span>
                        <span className="flex items-center space-x-2 text-2xl">
                          {dish.spicy && <span role="img" aria-label="Spicy" className="text-red-500">🔥</span>}
                          {dish.vegetarian && <span role="img" aria-label="Vegetarian" className="text-green-500">🌿</span>}
                        </span>
                      </h4>
                      {dish.description_en && (
                        <p className="text-gray-600 mb-4 text-lg">{dish[`description_${currentLang}`]}</p>
                      )}
                    </div>
                    <p className="font-bold text-emerald text-xl mt-auto">{dish.price}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FullMenuPage;