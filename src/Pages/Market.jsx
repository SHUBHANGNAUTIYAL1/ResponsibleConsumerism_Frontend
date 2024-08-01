import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import MarketTopBanner from '../Components/MarketTopBanner';

import Footer from '../Components/Footer';

import Chocolates from '../Components/Chocolates';
import Shoes from '../Components/Shoes';
import Biscuit from '../Components/Biscuit';
import Cofee from '../Components/Cofee';
import Research from '../Components/Research';

function Market() {
  

  return (
    <div className='flex w-full flex-col bg-gray-100'>
      <Navbar />
      <Research />
      <MarketTopBanner />
     
      <Cofee />
      <Chocolates />
      <Shoes />
      <Biscuit />
      <Footer />
      
   

    </div>
  );
}

export default Market;
