import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpg";

const BirthdayGift = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/market');
  };

  return (
    <div className="p-6">
      <div className="px-5 w-full mb-10 h-[100px] mt-4 flex justify-center items-center bg-gray-200">
        <div className="flex w-full h-full px-8 items-center bg-gray-200 text-black ">
          <img src={logo} className="h-[70px] w-[70px] mr-4" alt="logo" />
          <h1 className="font-semibold text-center flex-1 text-[26px]">
            Study for Human Behaviour in Shopping Interfaces
          </h1>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Scenario: Your Friend's Upcoming Birthday</h2>
      <p>
        Imagine that your close friend's birthday is coming up next week. You have a budget of £50 to purchase a gift. Below are some options you have found on an online shopping platform. Each product includes its price, a brief description, and details about its social and environmental impact.
      </p>
      <ul className="mt-4 list-disc pl-5">
        <li>
          <strong>Product 1:</strong> Chocolates.
        </li>
        <li>
          <strong>Product 2:</strong> Biscuits.
        </li>
        <li>
          <strong>Product 3:</strong> Coffee.
        </li>
        <li>
          <strong>Product 4:</strong> Tea.
        </li>
        {/* Add more products as needed */}
      </ul>
      <div className="flex justify-center mt-6">
        <button 
          onClick={handleContinue} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BirthdayGift;
