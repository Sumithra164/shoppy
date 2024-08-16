

import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const products = [
  { id: 1, name: 'Laptop', price: '$10', image: '/images/laptop.jpg' },
  { id: 2, name: 'Mobile', price: '$20', image: '/images/mobile.jpg' },
  { id: 3, name: 'Headphones', price: '$30', image: '/images/shopping.jpg' },
  { id: 4, name: 'Laptop', price: '$10', image: '/images/laptop.jpg' },
  { id: 5, name: 'Mobile', price: '$20', image: '/images/mobile.jpg' },
  { id: 6, name: 'Headphones', price: '$30', image: '/images/shopping.jpg' },
  { id: 7, name: 'Laptop', price: '$10', image: '/images/laptop.jpg' },
  { id: 8, name: 'Mobile', price: '$20', image: '/images/mobile.jpg' },
  { id: 9, name: 'Headphones', price: '$30', image: '/images/shopping.jpg' },
];


export default function Products() {
  const [favorites, setFavorites] = useState([]);

  const handleViewClick = (productId) => {
    console.log(`View product ${productId}`);
  };

  const handleFavoriteClick = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter(id => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <div className="overflow-x-auto max-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {products.map(product => (
            <div key={product.id} className="relative border p-4 rounded-lg shadow-md flex flex-col items-center">
              {/* Heart Icon */}
              <button
                onClick={() => handleFavoriteClick(product.id)}
                className={`absolute top-2 right-2 p-2 rounded-full ${favorites.includes(product.id) ? 'text-red-500' : 'text-gray-400'}`}
              >
                <FaHeart size={24} />
              </button>
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4 rounded-md" />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <button
                onClick={() => handleViewClick(product.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
