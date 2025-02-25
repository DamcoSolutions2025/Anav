import React from 'react';
import { ChevronDown, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 mr-2" />
            <span className="text-xl">Anav Traders</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-float">Modern Living Redefined</h1>
          <p className="text-xl md:text-2xl mb-4">Premium Interior Solutions & Smart Home Integration</p>
          <p className="text-lg text-gray-300 mb-8">Transforming Spaces in Shahdara, New Delhi</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#products"
              className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Products
              <ChevronDown className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;