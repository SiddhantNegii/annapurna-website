import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import menuData from '../assets/menu.json';

const Menu = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-serif text-maroon text-center mb-10"
        >
          {t('navbar.menu')}
        </motion.h2>

        {menuData.categories.map((category, index) => (
          <div key={index} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-serif text-saffron text-center mb-6"
            >
              {category[`name_${currentLang}`]}
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.dishes.map((dish, dishIndex) => (
                <motion.div
                  key={dishIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: dishIndex * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  {/* Conditionally render the image */}
                  {dish.image && (
                    <img src={dish.image} alt={dish[`name_${currentLang}`]} className="w-full h-48 object-cover rounded mb-4" />
                  )}
                  <h4 className="text-xl font-bold text-maroon mb-2">{dish[`name_${currentLang}`]}</h4>
                  <p className="text-gray-600 mb-2">{dish[`description_${currentLang}`]}</p>
                  <p className="font-bold text-emerald">{dish.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;