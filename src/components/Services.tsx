import React from 'react';
import { Lightbulb, Palette, Wrench, Shield, Zap, Home, Settings, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Interior Design Consultation',
    description: 'Expert guidance for your interior design projects',
    icon: Palette
  },
  {
    title: 'Professional Installation',
    description: 'Skilled installation of all our premium products',
    icon: Wrench
  },
  {
    title: 'Smart Home Integration',
    description: 'Future-ready automation solutions for modern living',
    icon: Zap
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored solutions to match your specific needs',
    icon: Settings
  },
  {
    title: 'Home Automation',
    description: 'Coming soon: Automated lighting and climate control',
    icon: Home,
    comingSoon: true
  },
  {
    title: 'Smart Security',
    description: 'Coming soon: Integrated security solutions',
    icon: Shield,
    comingSoon: true
  },
  {
    title: 'Mobile Control',
    description: 'Coming soon: Control your home from your phone',
    icon: Smartphone,
    comingSoon: true
  },
  {
    title: 'Energy Management',
    description: 'Coming soon: Smart energy monitoring and control',
    icon: Lightbulb,
    comingSoon: true
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive interior and smart home solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className={`bg-gray-50 rounded-lg p-8 text-center hover:bg-gray-100 transition duration-300 transform hover:scale-105 relative ${
                  service.comingSoon ? 'opacity-75' : ''
                }`}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                {service.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;