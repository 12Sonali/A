import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faWarehouse, faShoppingCart, faUndo,
     faUsers, faShippingFast, faStore, faPlug, faCalculator, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Homelayout({children}) {
  return (
    <div className="bg-gray-100 font-roboto min-h-screen flex">

      {/* Navbar */}
      <div className='w-full navbar lg:ml-[307px] bg-base-300 mt-0 fixed shadow-md sm:ml-[153px] overflow-hidden   '>       
       <div className="flex justify-between items-center  bg-slate-100 p-4  shadow-md bottom-0 ">
        <Link className="text-2xl font-bold text-purple-600 ml-8  p-2   bottom-0 border-b-2 border-violet-500" to='#'  >Dashboard</Link>
       </div>
      </div>

       {/* Sidebar */}
       <div className="w-1/5 bg-white h-screen shadow-md cursor-pointer ">
        <div className="p-4">
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faChartLine} className="text-purple-700 text-2xl" />
            <span className="ml-2 text-xl font-bold text-purple-700">Dashboard</span>
          </div>
          <ul >
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
              <FontAwesomeIcon icon={faWarehouse} className="text-xl  text-red-500" />
              <span className="ml-2">Inventory</span>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl  text-yellow-500" />
              <span className="ml-2">Order</span>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
              <FontAwesomeIcon icon={faUndo} className="text-xl  text-emerald-400" />
              <span className="ml-2">Returns</span>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
              <FontAwesomeIcon icon={faUsers} className="text-xl  text-fuchsia-500" />
              <span className="ml-2">Customers</span>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
              <FontAwesomeIcon icon={faShippingFast} className="text-xl  text-lime-500" />
              <span className="ml-2">Shipping</span>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
              <FontAwesomeIcon icon={faStore} className="text-xl  text-blue-500" />
              <span className="ml-2">Channel</span>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
              <FontAwesomeIcon icon={faPlug} className="text-xl  text-red-500" />
              <span className="ml-2">Integrations</span>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
              <FontAwesomeIcon icon={faCalculator} className="text-xl  text-orange-500" />
              <span className="ml-2">Calculators</span>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
              <FontAwesomeIcon icon={faChartBar} className="text-xl  text-green-500" />
              <span className="ml-2">Reports</span>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
              <FontAwesomeIcon icon={faCog} className="text-xl text-pink-500" />
              <span className="ml-2">Account</span>
            </li>
          </ul>
        </div>
      </div>
     {children}
    </div>
  )
}