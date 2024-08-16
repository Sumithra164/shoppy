import React from 'react'
import { ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip } from 'recharts'

const data = [
    {
      name: 'Jan',
      uv: 3000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 4000,
      amt: 2210,
    },
    {
      name: 'March',
      uv: 5000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      uv: 2780,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      amt: 2181,
    },
    {
      name: 'June',
      uv: 2390,
      amt: 2500,
    },
    {
      name: 'July',
      uv: 3490,
      amt: 2100,
    },
    {
      name: 'August',
      uv: 5490,
      amt: 2100,
    },
    {
      name: 'September',
      uv: 1490,
      amt: 2100,
    },
    {
      name: 'November',
      uv: 2490,
      amt: 2100,
    },
    {
      name: 'December',
      uv: 5490,
      amt: 2100,
    },
  ];
  

export default function TransactionChart() {
  return (
    <div className='h-[22rem] bg-white p-4 rounded-sm flex flex-col flex-1'>
        <strong className='text-gray-700 font-bold'>Sales Details</strong>
        <div className='w-full mt-3 text-xs flex-1'> 
     <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}
