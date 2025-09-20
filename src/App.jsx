import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FullMenuPage from './pages/FullMenuPage';
import FullGalleryPage from './pages/FullGalleryPage';
import './i18n';
import './index.css';

function App() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className="font-sans text-neutral-800">
        <Navbar onLanguageChange={handleLanguageChange} />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<FullMenuPage />} />
            <Route path="/gallery" element={<FullGalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;