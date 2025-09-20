import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-maroon text-white py-10">
      <div className="container mx-auto text-center">
        <div className="text-2xl font-serif mb-4">Annapurna</div>
        <div className="flex justify-center space-x-6">
          {/* Social media icons here */}
          <a href="#" className="hover:text-gold transition-colors duration-300">Facebook</a>
          <a href="#" className="hover:text-gold transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-gold transition-colors duration-300">Twitter</a>
        </div>
        <p className="mt-4 text-sm">&copy; 2025 Annapurna Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;