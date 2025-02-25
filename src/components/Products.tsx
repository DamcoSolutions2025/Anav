import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';

const productCategories = [
  {
    title: 'Premium Louvres',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80',
    description: 'Elegant and functional louvres perfect for modern homes',
    items: [
      {
        name: '3D Designer Louvre Panel',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80',
        price: '₹2,999/panel',
        description: 'Modern 3D geometric design, perfect for contemporary spaces'
      },
      {
        name: 'Premium Wood Finish Louvre',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
        price: '₹3,499/panel',
        description: 'Elegant wood-finish louvres for a classic look'
      },
      {
        name: 'Metallic 3D Louvre',
        image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80',
        price: '₹4,999/panel',
        description: 'Premium metallic finish with modern 3D patterns'
      }
    ]
  },
  {
    title: 'PVC Solutions',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80',
    description: 'High-quality PVC products for lasting durability',
    items: [
      {
        name: 'Modern PVC Wall Panel',
        image: 'https://images.unsplash.com/photo-1615875221248-d4b826351fa1?auto=format&fit=crop&q=80',
        price: '₹899/sqft',
        description: 'Contemporary PVC panels for modern interiors'
      },
      {
        name: 'Textured PVC Ceiling',
        image: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80',
        price: '₹1,299/sqft',
        description: 'Elegant textured PVC ceiling solutions'
      },
      {
        name: 'Designer PVC Partition',
        image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80',
        price: '₹1,999/panel',
        description: 'Stylish PVC partitions for space division'
      }
    ]
  },
  {
    title: 'Designer Wallpapers',
    image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80',
    description: 'Stunning wallpapers to enhance your interior',
    items: [
      {
        name: '3D Geometric Wallpaper',
        image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80',
        price: '₹1,499/roll',
        description: 'Modern geometric patterns for contemporary spaces'
      },
      {
        name: 'Floral Luxury Wallpaper',
        image: 'https://images.unsplash.com/photo-1615529179035-e760f6a2dcee?auto=format&fit=crop&q=80',
        price: '₹1,999/roll',
        description: 'Elegant floral designs for classic interiors'
      },
      {
        name: 'Metallic Texture Wallpaper',
        image: 'https://images.unsplash.com/photo-1615529179035-e760f6a2dcee?auto=format&fit=crop&q=80',
        price: '₹2,499/roll',
        description: 'Premium metallic finish wallpapers'
      }
    ]
  },
  {
    title: 'Hanging Arts',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80',
    description: 'Beautiful artwork to complete your space',
    items: [
      {
        name: 'Modern Abstract Canvas',
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80',
        price: '₹4,999',
        description: 'Contemporary abstract art on premium canvas'
      },
      {
        name: '3D Wall Sculpture',
        image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80',
        price: '₹7,999',
        description: 'Unique 3D wall sculptures for statement walls'
      },
      {
        name: 'Metal Wall Art',
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80',
        price: '₹5,999',
        description: 'Premium metal wall art pieces'
      }
    ]
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
          <p className="text-xl text-gray-600">Discover our collection of high-quality interior solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer group"
              onClick={() => openModal(category)}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full flex items-center">
                    View Products <ChevronRight className="ml-2" size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {isModalOpen && selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
              <h3 className="text-2xl font-bold">{selectedCategory.title}</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCategory.items.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <p className="text-gray-900 font-bold">{item.price}</p>
                      <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition duration-300">
                        Enquire Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;