import React from 'react'
import {FaCalendarAlt, FaUserMd , FaHeart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
function CommonComponent() {
    return (
        <div className='bg-slate-200 flex justify-center gap-2'>
        <Link to="/form">
         <div className='flex p-4'>
         <FaCalendarAlt size={25} className='text-gray-500' />
         <span className='text-gray-500 font-extrabold'>Book An Appointment</span>
         </div>
         </Link>
        <Link to="/finding-doctors">
        <div className='flex p-4'>
            <FaUserMd size={25} className='text-gray-500' />
            <span className='text-gray-500 font-extrabold'>Find a Doctor</span>
         </div>
        </Link>
        <Link to='/health-checkup'>
        <div className='flex p-4'>
           <FaHeart size={25} className='text-gray-500' />
           <span className='text-gray-500 font-extrabold'>Health Check-Up</span>
         </div>
        </Link>
      </div>
    )
}

export default CommonComponent
