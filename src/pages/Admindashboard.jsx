import React from 'react'
import Homelayout from '../layout/Homelayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import {Line,Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

export default function AdminDashboard() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position:'bottom',
      },
      title: {
        display: true,
        text: 'Sales vs Orders',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  const labels = [
    '6/30/2024 - 7/6/2024',
    '7/7/2024 - 7/13/2024',
    '7/21/2024 - 7/27/2024',
  ];
  
  const lineData = {
    labels,
    options,
    datasets: [
      {
        label: 'Orders',
        data: [1600, 800, 800],
        borderColor: 'orange',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
      },
      {
        label: 'Sales',
        data: [1500, 1000, 500],
        borderColor: '#26a69a',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
      },
    ],
  };
  
  const pieData = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    options,
    datasets: [
      {
        data: [55.8, 44.2],
        backgroundColor: ['#ff7070', '#4dd0e1'],
        borderWidth: 0,
      },
    ],
  };
  return (
    <Homelayout>
       <div className="flex w-4/5 p-6 justify-center items-center relative mt-10 ">
        <div className="grid grid-cols-2 gap-6 ">
          <div className="bg-white p-4 rounded-lg shadow-md  lg:w-[500px] sm:w-[300px]">
            <div className="flex justify-between items-center mb-4 ">
              <h2 className="text-lg font-semibold">Sales vs Orders</h2>
              <FontAwesomeIcon icon={faInfoCircle} className="text-gray-500 cursor-pointer" />
            </div>
            <Line data={lineData} />          
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md mr-0  ">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Portion of Sales</h2>
              <FontAwesomeIcon icon={faInfoCircle} className="text-gray-500 cursor-pointer" />
            </div>
            <Pie data={pieData}  />
          </div>
        </div>
      </div>         
    </Homelayout>
  )
}