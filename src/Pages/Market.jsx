import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import MarketTopBanner from '../Components/MarketTopBanner';
import HeroCarasoule from '../Components/HeroCarasoule';
import TopSelling from '../Components/TopSelling';
import Pest from "../Components/pest";
import Tools from "../Components/Tools";
import Seeds from "../Components/seeds";
import Footer from '../Components/Footer';
import Cloths from '../Components/Cloths';
import Chocolates from '../Components/Chocolates';
import Shoes from '../Components/Shoes';
import Biscuit from '../Components/Biscuit';
import Cofee from '../Components/Cofee';
import Research from '../Components/Research';

function Market() {
  const [isModalOpen, setIsModalOpen] = useState(true);



  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex w-full flex-col bg-gray-100'>
      <Navbar />
      <Research />
      <MarketTopBanner />
      <HeroCarasoule />
      <TopSelling />
      <Cofee />
      <Chocolates />
      <Shoes />
      <Biscuit />
      <Footer />
      
   

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-red-500 hover:text-red-800">
              X
            </button>
            <h2 className="text-2xl font-bold mb-4">Scenario: Your Friend's Upcoming Birthday</h2>
            <p>Imagine that your close friend's birthday is coming up next week. You have a budget of £50 to purchase a gift. Below are some options you have found on an online shopping platform. Each product includes its price, a brief description, and details about its social and environmental impact.</p>
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
             
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Market;
