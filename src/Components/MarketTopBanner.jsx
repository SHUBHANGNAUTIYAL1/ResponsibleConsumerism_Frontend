import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { title: 'Coffee', icon: '☕', path: '/coffee' },
  { title: 'Chocolate', icon: '🍫', path: '/chocolates' },
  { title: 'Tea', icon: '🍵', path: '/tea' },
 
  { title: 'Biscuits', icon: '🍪', path: '/biscuits' },

];

function MarketTopBanner() {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <div className="px-5 h-[150px] mt-4 flex justify-center items-center bg-gray-100">
      <div className="flex w-full h-full justify-between px-20 items-center bg-white shadow-md space-x-8">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center cursor-pointer" 
            onClick={() => handleCategoryClick(category.path)}
          >
            <div className="text-[50px] mb-1">{category.icon}</div>
            <div className="text-sm font-bold">{category.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketTopBanner;
