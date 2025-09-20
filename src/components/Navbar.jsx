import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = ({ onLanguageChange }) => {
  const { t } = useTranslation();

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-lg py-4 transition-shadow duration-300 border-b border-gray-200">
      {/* Corrected: Removed the centering container. The content will now span the full width. */}
      <div className="flex justify-between items-center px-8">
        {/* Logo on the extreme left */}
        <Link to="/" className="w-40 h-auto">
          <img src="/images/annapurna-logo.png" alt="Annapurna Restaurant Logo" className="h-full w-auto" />
        </Link>
        
        <div className="flex items-center">
          {/* Navigation links */}
          <div className="flex items-center mr-16 space-x-8 text-lg font-semibold">
            <Link to="/menu" className="hover:text-saffron transition-colors duration-300">{t('navbar.menu')}</Link>
            <Link to="/gallery" className="hover:text-saffron transition-colors duration-300">{t('navbar.gallery')}</Link>
            <a href="/#about" className="hover:text-saffron transition-colors duration-300">{t('navbar.about')}</a>
            <a href="/#contact" className="hover:text-saffron transition-colors duration-300">{t('navbar.contact')}</a>
          </div>

          {/* Language selector on the extreme right */}
          <div className="space-x-2 text-lg">
            <button onClick={() => onLanguageChange('en')} className="font-bold hover:text-emerald transition-colors duration-300">EN</button>
            <span className="font-bold">|</span>
            <button onClick={() => onLanguageChange('de')} className="font-bold hover:text-emerald transition-colors duration-300">DE</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;