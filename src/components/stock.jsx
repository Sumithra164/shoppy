import React from 'react';


const productData = [
  { id: 1, name: 'Laptop', category: 'Electronics', colors: 'Black, Silver', image: '/images/laptop.jpg' },
  { id: 2, name: 'Mobile', category: 'Electronics', colors: 'Black, Blue', image: '/images/mobile.jpg' },
  { id: 3, name: 'Headphones', category: 'Accessories', colors: 'Black, White', image: '/images/shopping.jpg' },
  { id: 4, name: 'Laptop', category: 'Electronics', colors: 'Gray, Blue', image: '/images/laptop.jpg' },
  { id: 5, name: 'Mobile', category: 'Electronics', colors: 'Red, Green', image: '/images/mobile.jpg' },
  { id: 6, name: 'Headphones', category: 'Accessories', colors: 'Red, Blue', image: '/images/shopping.jpg' },
  { id: 7, name: 'Laptop', category: 'Electronics', colors: 'Black', image: '/images/laptop.jpg' },
  { id: 8, name: 'Mobile', category: 'Electronics', colors: 'Yellow, Pink', image: '/images/mobile.jpg' },
  { id: 9, name: 'Headphones', category: 'Accessories', colors: 'Green, Black', image: '/images/shopping.jpg' },
];

export default function stock() {
  return (
    <div className='bg-white px-4 pt-4 pb-4 rounded-sm border border-gray-200 flex-1'>
      <strong>Product Stock</strong>
      <br />
      <div className='w-full overflow-auto max-h-screen'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Product Image</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Product Name</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Product Category</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Available Colors</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Action</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {productData.map((product) => (
              <tr key={product.id}>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <img src={product.image} alt={product.name} className='w-16 h-16 object-cover' />
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>{product.name}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{product.category}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{product.colors}</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <button className='text-blue-600 hover:text-blue-900'>Add</button>
                  <button className='text-red-600 hover:text-red-900 ml-2'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
