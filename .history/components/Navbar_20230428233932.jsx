import React, { useState } from 'react';


const Navbar = () => {
  const [nav, setNav] = useState(false);

 

  return (
    <div className='bg-[#1e3a8a] flex justify-between items-center h-24   mx-auto px-4 text-white'>
      <img className='w-20 mx-auto mt-2' src="/immaculada.png" alt="/" />
      <h1 className='w-full text-xl font-bold text-[#fbbf24]'>IMMACULADA CONCEPTION COLLEGE </h1>
      <ul className='hidden md:flex'>
        <button className='p-4 hover:bg-base rounded'>Home</button>
        <button className='p-4 hover:bg-[#37CDBE] rounded'>News</button>
        <button className='p-4 hover:bg-[#fbbf24] opacity-5 rounded'>Events</button>
        <button className='p-4 hover:bg-[#fbbf24] rounded'>Admissions</button>
        <button className='p-4 hover:bg-[#fbbf24] rounded'>Affiliates</button>
        <button className='p-4 hover:bg-[#fbbf24] rounded'>Organization</button>
        <button className='p-4 hover:bg-[#fbbf24] rounded'>Contact</button>
      </ul>
     
     

    </div>
  );
};

export default Navbar;
