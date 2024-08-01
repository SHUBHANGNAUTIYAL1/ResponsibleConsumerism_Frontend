import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpg";

function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <div className="px-5 h-[100px] w-full mb-10 mt-4 flex justify-center items-center bg-gray-100">
        <div className="flex w-full h-full px-8 items-center bg-gray-200 text-black shadow-md">
          <img src={logo} className='h-[70px] w-[70px] mr-4' alt="logo" />
          <h1 className="font-semibold text-center flex-1 text-[26px]">Study for Human Behaviour in Shopping Interfaces</h1>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Thank You!</h1>
      <p className="text-xl mb-4">Thank you for participating in the survey</p>
    
    </div>
  );
}

export default ThankYou;
