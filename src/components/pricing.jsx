
import React from 'react'
const Button = ({ children }) => (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
      {children}
    </button>
  );

export default function pricing() {
  return (
    <div className='flex gap-4 p-3 w-full'>
 <div className='bg-white p-4 flex flex-col items-center flex-1 rounded-lg border border-gray-300'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-lg font-semibold p-2'>Basic</h1>
          <p className='font-light p-2'>monthly charge</p>
          <strong className='text-blue-500 text-2xl p-2'>$14.99</strong>
        </div>
        <div className='flex flex-col items-center p-3 border-t  border-b border-gray-300'>
          <p className='p-2'>Free Setup</p>
          <p className='p-2'>Bandwidth Limit 10GB</p>
          <p className='p-2'>20 user connection</p>
          <p className='p-2 text-gray-400'>Analytics Report</p>
          <p className='p-2 text-gray-400'>Public API access</p>
          <p className='p-2 text-gray-400'>Plugin Integration</p>
          <p className='p-2 text-gray-400'>Custom Content Management</p>
        </div>
        <div className='flex flex-col items-center p-2 '>
          <Button >Get Started</Button>
          <p className='text-blue-500 underline mt-2'>Start your 30-day Free Trial</p>
        </div>
        </div>
 <div className='bg-white p-4 flex flex-col items-center flex-1 rounded-lg border border-gray-300'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-lg font-semibold p-2'>Standard</h1>
          <p className='font-light p-2'>monthly charge</p>
          <strong className='text-blue-500 text-2xl p-2'>$49.99</strong>
        </div>
        <div className='flex flex-col items-center p-3 border-t border-b border-gray-300'>
          <p className='p-2'>Free Setup</p>
          <p className='p-2'>Bandwidth Limit 10GB</p>
          <p className='p-2'>20 user connection</p>
          <p className='p-2'>Analytics Report</p>
          <p className='p-2'>Public API access</p>
          <p className='p-2 text-gray-400'>Plugin Integration</p>
          <p className='p-2 text-gray-400'>Custom Content Management</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <Button>Get Started</Button>
          <p className='text-blue-500 underline mt-2'>Start your 30-day Free Trial</p>
        </div>
        </div>
 <div className='bg-white p-4 flex flex-col items-center flex-1 rounded-lg border border-gray-300'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-lg font-semibold p-2'>Premium</h1>
          <p className='font-light p-2'>monthly charge</p>
          <strong className='text-blue-500 text-2xl p-2'>$89.99</strong>
        </div>
        <div className='flex flex-col items-center p-3 border-t border-b border-gray-300'>
          <p className='p-2'>Free Setup</p>
          <p className='p-2'>Bandwidth Limit 10GB</p>
          <p className='p-2'>20 user connection</p>
          <p className='p-2'>Analytics Report</p>
          <p className='p-2'>Public API access</p>
          <p className='p-2'>Plugin Integration</p>
          <p className='p-2'>Custom Content Management</p>
        </div>
        <div className='flex flex-col items-center p-2'>
          <Button>Get Started</Button>
          <p className='text-blue-500 underline mt-2'>Start your 30-day Free Trial</p>
        </div>
        </div>
      </div>
  )
}
