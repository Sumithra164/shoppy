
import React, { useState } from 'react';

export default function Invoice() {
  const [products] = useState([
    { serialNo: 1, name: 'Laptop', quantity: 1, baseCost: 1000, totalCost: 1000 },
    { serialNo: 2, name: 'Mobile', quantity: 2, baseCost: 500, totalCost: 1000 },
    { serialNo: 3, name: 'Headphones', quantity: 3, baseCost: 50, totalCost: 150 }
  ]);

  const totalCost = products.reduce((sum, product) => sum + product.totalCost, 0);

  return (
    <div className='p-6'>
      <div className='mb-6'>
        <h1 className='text-2xl font-bold mb-4'>Invoice</h1>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div>
            <label className='block text-sm font-medium mb-1'>Invoice From</label>
            <input type='text' className='border border-gray-300 rounded p-2 w-full' placeholder='Company Name' />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>Invoice To</label>
            <input type='text' className='border border-gray-300 rounded p-2 w-full' placeholder='Customer Name' />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>Invoice Date</label>
            <input type='date' className='border border-gray-300 rounded p-2 w-full' />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>Due Date</label>
            <input type='date' className='border border-gray-300 rounded p-2 w-full' />
          </div>
        </div>
      </div>

      <div className='mb-6'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead>
            <tr className='bg-gray-50'>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Serial No</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Product Name</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Quantity</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Base Cost</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Total Cost</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {products.map((product) => (
              <tr key={product.serialNo}>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{product.serialNo}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{product.name}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{product.quantity}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>${product.baseCost}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>${product.totalCost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex justify-between items-center mb-6'>
        <span className='text-xl font-bold'>Total Cost: ${totalCost}</span>
        <div>
          <button className='bg-blue-500 text-white rounded px-4 py-2 mr-2'>Print</button>
          <button className='bg-green-500 text-white rounded px-4 py-2'>Send</button>
        </div>
      </div>
    </div>
  );
}
