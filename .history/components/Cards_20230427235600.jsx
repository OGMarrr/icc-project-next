import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import student from '../assets/student.jpg'
import school from '../assets/school.jpg'
import third from '../assets/third.jpg'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-80 mx-auto mt-[-3rem] bg-white' src={school} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Our School</h2>
              
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Discover who we are and why ICC is one of the best schools around!</p>
              </div>
              
          </div>       

          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-80 mx-auto mt-[-3rem] bg-white' src={student} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Academics</h2>
              
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>We offer a variety of courses that cater to every student!</p>
              </div>
             
          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-80 mx-auto mt-[-3rem] bg-white' src={third} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Enroll Today</h2>
              
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Download our list of Enrollment requirements and be part of ICC.</p>
              </div>
             
          </div>
      </div>
    </div>
  );
};

export default Cards;
