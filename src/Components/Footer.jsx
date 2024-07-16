import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 pr-32">
            <h2 className="text-lg font-bold mb-4">ShopEase</h2>
            <p className="text-sm text-left">Your one-stop shop for all your needs. Enjoy seamless shopping experience with ShopEase.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/products" className="hover:text-gray-400">Products</a></li>
              <li><a href="/faq" className="hover:text-gray-400">FAQ</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Support</h2>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-gray-400">Terms of Service</a></li>
              <li><a href="/shipping" className="hover:text-gray-400">Shipping & Returns</a></li>
              <li><a href="/support" className="hover:text-gray-400">Support Center</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Connect with Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
