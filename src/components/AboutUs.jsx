import React from 'react';
import imag from '../../public/images/math.jpg';

function AboutUs() {
  return (
    <div id='AboutUs' className='md:px-14 p-4 max-w-screen-lg mx-auto'>
      <h1 className="text-2xl md:text-5xl font-semibold text-blue-600 font-poppins text-center"> Our Featuers</h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
        <div className='md:w-2/5 text-center md:text-left order-2 md:order-1'>
          <h2 className='md:text-5xl text-4xl font-bold text-text mb-5 leading-normal'>Innovating Education for  <span className='text-[#366cff]'>a Brighter Future</span></h2>
          <p className='text-gray-500 text-lg mb-7'>Our platform leverages cutting-edge technology to enhance the learning experience, making education more accessible and engaging for students worldwide.</p>
          <button className='bg-black text-white py-2 px-4 rounded-lg'>Learn More</button>
        </div>
        <div className='md:w-1/2 order-1 md:order-2'>
          <img src={imag} alt='image' className='w-[300px] h-auto rounded-lg shadow-lg'/>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
        <div className='md:w-1/2 order-1 md:order-1'>
          <img src={imag} alt='image' className='w-[300px] h-auto rounded-lg shadow-lg'/>
        </div>
        <div className='md:w-2/5 text-center md:text-left order-1 md:order-2'>
          <h2 className='md:text-5xl text-4xl font-bold text-text mb-5 leading-normal'>Empowering Teachers with <span className='text-[#366cff]'>Advanced Tools</span></h2>
          <p className='text-gray-500 text-lg mb-7'>We provide educators with the tools they need to create dynamic and interactive lessons, helping them to inspire and motivate their students.</p>
          <button className='bg-black text-white py-2 px-4 rounded-lg'>Learn More</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
        <div className='md:w-2/5 text-center md:text-left order-2 md:order-1'>
          <h2 className='md:text-5xl text-4xl font-bold text-text mb-5 leading-normal'>Achieving Student Success through <span className='text-[#366cff]'>Personalized Learning </span> </h2>
          <p className='text-gray-500 text-lg mb-7'>Our focus is on student success, providing personalized learning paths and resources to help each student achieve their full potential.</p>
          <button className='bg-black text-white py-2 px-4 rounded-lg'>Learn More</button>
        </div>
        <div className='md:w-1/2 order-1 md:order-2'>
          <img src={imag} alt='image' className='w-[300px] h-auto rounded-lg shadow-lg'/>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;