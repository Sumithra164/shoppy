import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: '1', name: 'Meeting with CEO' },
  { id: '2', name: 'Team Discussion' },
  { id: '3', name: 'Contract Signature' },
  { id: '4', name: 'Project Deadline' },
  { id: '5', name: 'Product Launch' },
  { id: '6', name: 'Annual Review' },
];

export default function Products() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter(id => id !== productId)
        : [...prevSelected, productId]
    );
  };

  const Button = ({ children, to }) => (
    <Link to={to}>
      <button className="hover:bg-blue-500 text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 border border-gray-500">
        {children}
      </button>
    </Link>
  );
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">To-Do List</h2>
     <div  className="p-4 top-10 right-4">
        <Button >Add Event</Button>
        </div>
      <div className="max-h-screen overflow-y-auto">
        <div className="flex flex-col gap-4">
          {products.map(product => (
            <div key={product.id} className="relative border p-4 rounded-lg shadow-md flex items-center">
              <input
                type="checkbox"
                checked={selectedProducts.includes(product.id)}
                onChange={() => handleCheckboxChange(product.id)}
                className="mr-2"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
