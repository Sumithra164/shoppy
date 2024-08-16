import React from 'react'
import Dashboardstasgrid from './Dashboardstasgrid';
import TransactionChart from './TransactionChart';
import RecentOrders from './RecentOrders';


export default function Dashboard() {
  return (
    <div className='overflow-auto max-h-screen' >
    <div className='flex  flex-col gap-4' >
      <Dashboardstasgrid />
      <div className='flex  flex-col gap-4'>
        <TransactionChart />
      </div>
      <div className='flex  flex-col gap-4'>
        <RecentOrders />
      </div>
    </div>
</div>

  )
}
