import React, { useState } from 'react';
import { Menu, X, Home, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-2">
            <Home className="w-8 h-8 text-gray-900" />
            <div>
              <span className="text-2xl font-bold text-gray-900">Anav Traders</span>
              <div className="flex items-center text-sm text-gray-600">
                <Zap className="w-4 h-4 mr-1" />
                <span>Smart Interior Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#products" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</a>
            <a href="#products" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Products</a>
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Services</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;