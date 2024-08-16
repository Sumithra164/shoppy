import React, { useState } from 'react';

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
		
	},
	{
		id: '07',
		customer_name: 'Ryan Carroll',
        Address: 'Cottage Grove, OR 97424',
        Date:'12-7-2024',
		order_total: '$435.50',
        Type:'headphones',
		current_order_status: 'SHIPPED',
		
	},
	{
		id: '08',
		customer_name: 'Ryan Carroll',
        Address: 'Cottage Grove, OR 97424',
        Date:'12-7-2024',
		order_total: '$435.50',
        Type:'headphones',
		current_order_status: 'SHIPPED',
		
	},
	{
		id: '09',
		customer_name: 'Ryan Carroll',
        Address: 'Cottage Grove, OR 97424',
        Date:'12-7-2024',
		order_total: '$435.50',
        Type:'headphones',
		current_order_status: 'SHIPPED',
		
	}

];

export default function Table() {
  const [filters, setFilters] = useState({
    orderType: '',
    orderStatus: '',
    date: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters({
      orderType: '',
      orderStatus: '',
      date: '',
    });
  };

  
  const filteredData = recentOrderData.filter((order) => {
    return (
      (filters.orderType === '' || order.Type === filters.orderType) &&
      (filters.orderStatus === '' || order.current_order_status === filters.orderStatus) &&
      (filters.date === '' || order.Date === filters.date)
    );
  });

  return (
    <div className='bg-white px-4 pt-4 pb-4 rounded-sm border border-gray-200 flex-1 w-full'>
      <strong>Order Lists</strong>
      <div className='mb-4 flex gap-4'>
        <select
          name="orderType"
          value={filters.orderType}
          onChange={handleFilterChange}
          className="border rounded p-2"
        >
          <option value="">Order Type</option>
          <option value="laptop">Laptop</option>
          <option value="mobile">Mobile</option>
          <option value="headphones">Headphones</option>
          <option value="earpods">EarPods</option>
        </select>

        <select
          name="orderStatus"
          value={filters.orderStatus}
          onChange={handleFilterChange}
          className="border rounded p-2"
        >
          <option value="">Order Status</option>
          <option value="PLACED">Placed</option>
          <option value="CONFIRMED">Confirmed</option>
          <option value="SHIPPED">Shipped</option>
          <option value="DELIVERED">Delivered</option>
        </select>

        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
          className="border rounded p-2"
        />

        <button
          onClick={resetFilters}
          className="bg-red-500 text-white rounded p-2"
        >
          Reset Filters
        </button>
      </div>
      <div className='w-full overflow-auto max-h-screen'>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Date</th>
              <th>Order Total</th>
              <th>Type</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer_name}</td>
                <td>{order.Address}</td>
                <td>{order.Date}</td>
                <td>{order.order_total}</td>
                <td>{order.Type}</td>
                <td>{order.current_order_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
