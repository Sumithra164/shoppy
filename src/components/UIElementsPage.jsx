
import React from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const pieData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const doughnutData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const UIElementsPage = () => {
  return (
    <div className="p-8 space-y-8 max-h-screen overflow-x-auto">
      <div className="flex flex-col space-y-4">
      
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Bar Charts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <Bar data={barData} />
            </div>
            <div className="col-span-1">
              <Bar data={barData} />
            </div>
            <div className="col-span-1">
              <Bar data={barData} />
            </div>
          </div>
        </div>

        {/* Pie Chart Card */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Pie Charts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <Pie data={pieData} />
            </div>
            <div className="col-span-1">
              <Pie data={pieData} />
            </div>
            <div className="col-span-1">
              <Pie data={pieData} />
            </div>
          </div>
        </div>

        {/* Doughnut Chart Card */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Doughnut Charts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <Doughnut data={doughnutData} />
            </div>
            <div className="col-span-1">
              <Doughnut data={doughnutData} />
            </div>
            <div className="col-span-1">
              <Doughnut data={doughnutData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIElementsPage;
