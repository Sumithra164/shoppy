import React from 'react'
const recentOrderData = [
	{
		id: '01',
		customer_name: 'Shirley A. Lape',
		Address: 'Cottage Grove, OR 97424',
        Date:'12-7-2024',
		order_total: '$435.50',
        Type:'laptop',
		current_order_status: 'PLACED',
		
	},
	{
		id: '02',
		customer_name: 'Shirley A. Lape',
		Address: 'Los Angeles, CA 90017',
        Date:'12-7-2024',
		order_total: '$435.50',
        Type:'mobile',
		current_order_status: 'CONFIRMED',
		
	},
	{
		id: '03',
		customer_name: 'Shirley A. Lape',
		Address: 'Cottage Grove, OR 97424',
        Date:'12-7-2024',
		order_total: '$435.50',
        Type:'headphones',
		current_order_status: 'PLACED',
		
	},
	{
		id: '04',
		customer_name: 'bob',
		Address: 'Cottage Grove, OR 97424',
        Date:'12-7-2024',
		order_total: '$435.50',
        Type:'laptop',
		current_order_status: 'PLACED',
		
	},
	{
	
		id: '05',
		customer_name: 'Sumithra',
		Address: 'Cottage Grove, OR 97424',
        Date:'12-7-2024',
		order_total: '$435.50',
        Type:'mobile',
		current_order_status: 'CONFIRMED',
		
	},
	{
		id: '06',
		customer_name: 'Ryan Carroll',
        Address: 'Cottage Grove, OR 97424',
        Date:'12-7-2024',
		order_total: '$435.50',
        Type:'headphones',
		current_order_status: 'SHIPPED',
		
	}
]

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

export default function table() {
  return (
    <div className='bg-white px-4 py-4 rounded-sm border border-gray-200 space-y-4'>
      <div className='w-full bg-white px-4 pt-4 pb-4 rounded-sm border border-gray-200'>
    <strong>Recent Orders</strong>
    <div className='w-full overflow-auto max-h-screen'>
    <table className='min-w-full divide-y divide-gray-200'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>ID</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Customer Name</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Address</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Date</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Order Total</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Type</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Order Status</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {recentOrderData.map((order) => (
                <tr key={order.id}>
                  <td className='px-6 py-4 whitespace-nowrap'>{order.id}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{order.customer_name}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{order.Address}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{order.Date}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{order.order_total}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{order.Type}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{order.current_order_status}</td>
                </tr>
              ))}
            </tbody>
          </table>
    


    <div className='bg-white px-4 pt-4 pb-4 rounded-sm border border-gray-200 flex-1'>
      <strong className='p-4'>Product Stock</strong>
      
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
    </div>
              
</div>
  )
}