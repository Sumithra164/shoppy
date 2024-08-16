
import React from 'react'
import { Link } from 'react-router-dom';
const users = [
    { id: 1, name: 'Alice Johnson',desg:'CEO', email: 'alice.johnson@example.com', image:'/images/ali.jpg' },
    { id: 2, name: 'Bob Smith',desg:'CTO', email: 'bob.smith@example.com', image:'/images/arun.jpg' },
    { id: 3, name: 'Carol Davis',desg:'Social Media', email: 'carol.davis@example.com', image:'/images/carol.jpeg' },
    { id: 4, name: 'David Brown',desg:'HR', email: 'david.brown@example.com', image:'/images/bobs.jpg' },
    { id: 5, name: 'Eva Green',desg:'CEO',email: 'eva.green@example.com',image:'/images/eva.jpeg' },
    { id: 6, name: 'Frank Miller',desg:'CTo', email: 'frank.miller@example.com',image:'/images/ali.jpg' },
    { id: 7, name: 'Grace Wilson',desg:'CEO', email: 'grace.wilson@example.com',image:'/images/frank.jpeg' },
    { id: 8, name: 'Hank Taylor', desg:'CTO',email: 'hank.taylor@example.com',image:'/images/bob.jpeg' },
    { id: 9, name: 'Ivy Clark',desg:'Social Media', email: 'ivy.clark@example.com',image:'/images/arun.jpg' }
];

export default function team() {
  const Button = ({ children, to}) => (
    <Link to={to}>
    <button className=" hover:bg-blue-500 text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 border border-gray-500">
      {children}
    </button>
    </Link>
  );
 
  return (
    <div className="p-4">
        <div className='flex justify-between p-4'>
        <h2 className="text-xl font-bold mb-4">Team Members</h2>
         <Button to="/AddMember"> Add Member</Button>
        </div>
     

        <div className="overflow-x-auto max-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {users.map(user => (
              <div key={user.id} className="relative border p-4 rounded-lg shadow-md flex flex-col items-center">
                
                <img src={user.image} alt={user.name} className="w-full h-48 object-contain mb-4 rounded-md" />
                <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
                <p className="text-gray-600 mb-4">{user.desg}</p>
                <p className="text-gray-600 mb-4">{user.email}</p> 
              </div>
            ))}
          </div>
        </div>
        </div>

  )
}
