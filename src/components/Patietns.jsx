import React from 'react'
import image1 from '../slideImages/slide4.webp';
import video from '../videos/v1.webp';
import image2 from '../slideImages/image5.webp';
function Patietns() {
    return (
        <div className='bg-slate-100'>
            <div className='flex justify-center m-3 p-3'>
                <h1 className='text-4xl text-gray-800 font-extrabold'>Providing comprehensive care to patients</h1>
            </div>
            <div className='flex justify-center'>
                <p className='text-gray-800 p-2'>Everyone deserves to have their medical needs met end-to-end. With this in mind, Jupiter Hospital has Asia’s Finest Neuro Rehabilitation Centre in Thane, as<br />
                     well as a centre in Indore, to care for individuals who require extensive care to recover from injuries of various kinds.</p>
            </div>
            <div className=' justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="col-span-1 m-5">
      <img src={image1} alt="Large" className="w-[700px] h-[500px]" />
      </div>

      <div className="col-span-1 grid grid-rows-2 gap-4">
      <div>
      <video className="w-full h-auto" controls>
      <source src={video} type="video/mp4" />
       Your browser does not support the video tag.
       </video>
       </div>
        </div>
        <div>
          <img src={image2} alt="Small 2" className="w-full h-auto" />
        </div>
      </div>
    </div>
    <div className='flex justify-center m-2'>
      <button className="bg-blue-600 hover:bg-blue-400 text-white mb-2 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none flex items-center justify-center">
  View All
</button>
</div>
        </div>
    )
}

export default Patietns
