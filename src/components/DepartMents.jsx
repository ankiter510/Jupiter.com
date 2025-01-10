import React from 'react';
import stomac from '../surgeryIcons/stomac.png';
import breast from '../surgeryIcons/breast.png';
import monitor from '../surgeryIcons/monitor.png';
import heart from '../surgeryIcons/heart.png';
import body from '../surgeryIcons/body.jpg';
import teeth from '../surgeryIcons/teeth.png';
import { Link } from 'react-router-dom';
function DepartMents() {
  return (
    <div className="bg-slate-100 mt-3 overflow-hidden sm:64">
      <div className="flex justify-center">
        <h1 className="text-gray-900 font-extrabold text-4xl p-4">Specialised departments for your every need</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
          <h3 className="text-xl font-semibold text-gray-800 flex">
        <img src={stomac} alt=" stomac" className='h-8 w-8 pr-2'/>
            Bariatric Surgery
            </h3>
            <p className='place-items-start p-3 text-gray-700'>
                If you are in search of bariatric surgery<br />
                treatments in Pune, you quest ends at our<br />
                 Bariatric Surgery....
            </p>
            <Link to='/surgery-specialist'>
            <h1 className='text-blue-500 hover:text-orange-400 underline font-extrabold'>Know More</h1>
            </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
          <h3 className="text-xl font-semibold text-gray-800 flex">
          <img src={breast} alt=" stomac" className='h-8 w-8 pr-2'/>
          Breast Care Center
          </h3>
          <p className='place-items-start p-3 text-gray-700'>
                We have all-Women's team of<br />
                passionate professionals who can assist<br />
                you with any breast-related c....
            </p>
           <Link to='/health'>
           <h1 className='text-blue-500 hover:text-orange-400 underline font-extrabold'>Know More</h1>
           </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
        <h3 className="text-xl font-semibold text-gray-800 flex">
        <img src={monitor} alt=" stomac" className='h-8 w-8 pr-2'/>
            Cardiac Surgery
            </h3>
            <p className='place-items-start p-3 text-gray-700'>
                At our esteemed Cadiac Surgery hospital<br />
                in Pune, we are dedicated to providing <br />
                exemplary cardiac su...
            </p>
            <Link to='/health-c'>
            <h1 className='text-blue-500 hover:text-orange-400 underline font-extrabold'>Know More</h1>
            </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
        <h3 className="text-xl font-semibold text-gray-800 flex">
        <img src={heart} alt=" stomac" className='h-8 w-8 pr-2'/>
            Cardiology
            </h3>
            <p className='place-items-start p-3 text-gray-700'>
                Welcome to our Cardiology Hospital in<br />
                 Pune, where we deliver comprehensive <br />
                 cardiac care. Our accompl...
            </p>
            <Link to='/health-c'>
            <h1 className='text-blue-500 hover:text-orange-400 underline font-extrabold'>Know More</h1>
            </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
        <h3 className="text-xl font-semibold text-gray-800 flex">
        <img src={body} alt=" stomac" className='h-8 w-8 pr-2'/>
            Chest Medicine
            </h3>
            <p className='place-items-start p-3 text-gray-700'>
               Jupiters Pulmonology Hospital in Pune<br />
                represent a facility dedicated to the  <br />
                diagnosis and tr...
            </p>
            <Link to='/health-c'>
            <h1 className='text-blue-500 hover:text-orange-400 underline font-extrabold'>Know More</h1>
            </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
        <h3 className="text-xl font-semibold text-gray-800 flex">
        <img src={teeth} alt=" stomac" className='h-8 w-8 pr-2'/>
            Dental Care
            </h3>
            <p className='place-items-start p-3 text-gray-700'>
               At Jupiter hospital, our Denatal care<br />
                department stands as a renowed care <br />
                center, celebrayed for its...
            </p>
            <Link to='/health-c'>
            <h1 className='text-blue-500 hover:text-orange-400 underline font-extrabold'>Know More</h1>
            </Link>
        </div>
      </div>
      <div className='flex justify-center m-2'>
     <Link to='/department'>
     <button className="bg-blue-600 hover:bg-blue-400 text-white mb-2 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none flex items-center justify-center">
  See All
</button>
     </Link>

      </div>
    </div>
  );
}

export default DepartMents;
