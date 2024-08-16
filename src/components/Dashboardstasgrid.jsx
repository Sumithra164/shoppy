import React from 'react';
import { PiUsersLight } from 'react-icons/pi';
import { IoIosCube } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";

export default function Dashboardstasgrid() {
  return (
    <div className='flex gap-4 p-3 w-full'>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
          <PiUsersLight className='text-2xl text-white' />
        </div>
        <div className='pl-4 text-sm font-light'>
          <span>Total Users</span>
          <div flex flex-col items-center>
            <strong className='text-xl font-semi-bold'>50,858</strong>
            <span className='text-sm text-green-500 p-2'>+8.5%</span>
          </div>
          
        </div>
        
      </BoxWrapper>
      
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-300'>
        <IoIosCube text-2xl text-white />
        </div>
        <div className='pl-4 text-sm font-light'>
          <span>Total Orders</span>
          <div flex flex-col items-center>
            <strong className='text-xl font-semi-bold'>50,858</strong>
            <span className='text-sm text-green-500 p-2'>+8.5%</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
      <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-200'>
      < BsGraphUp text-2xl text-white />
      </div>
      <div className='pl-4 text-sm font-light'>
          <span>Total Sales</span>
          <div flex flex-col items-center>
            <strong className='text-xl font-semi-bold'>50,858</strong>
            <span className='text-sm text-red-500 p-2'>-8.5%</span>
          </div>
          
        </div>
      </BoxWrapper>
      <BoxWrapper>
      <div className='rounded-full h-12 w-12 flex items-center justify-center bg-red-500'>
      < BsGraphUp text-2xl text-white />
      </div>
      <div className='pl-4 text-sm font-light'>
          <span>Pending</span>
          <div flex flex-col items-center>
            <strong className='text-xl font-semi-bold'>50,858</strong>
            <span className='text-sm text-green-500 p-2'>+8.5%</span>
          </div>
         
        </div>
      </BoxWrapper>
    </div>
  );
}


function BoxWrapper({ children }) {
  return (
    <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center w-full'>
      {children}
    </div>
  );
}
