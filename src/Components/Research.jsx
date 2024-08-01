import React from 'react';
import logo from '../assets/logo.jpg';

function Research() {
  return (
    <div className="px-5 h-[100px] mt-4 flex justify-center items-center bg-gray-100">
      <div className="flex w-full h-full px-8 items-center bg-gray-200 text-black shadow-md">
        <img src={logo} className='h-[70px] w-[70px] mr-4' alt="logo" />
        <h1 className="font-semibold text-center flex-1 text-[26px]">Study for Human Behaviour in Shopping Interfaces</h1>
      </div>
    </div>
  );
}

export default Research;
