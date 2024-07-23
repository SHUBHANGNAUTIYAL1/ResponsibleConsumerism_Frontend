import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import ItemModal from '../Components/ItemaModal';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import Research from '../Components/Research';

function Chocolates() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId=user._id
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://responsibleconsumerism-backend.onrender.com/api/product/chocolate');
        setProducts(response.data.products);
        console.log(Products) 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

 

  const handleOpen =async (item) => {
    setSelectedItem(item);
    setOpen(true);
    try {
      const logData = {
          message: `${item.name} is checked`,
          user: userId // Assuming userId is defined in scope
      };

      await axios.post('https://responsibleconsumerism-backend.onrender.com/api/logs/create', logData);
     // Reloading the page after logging
  } catch (error) {
      console.error('Error creating log:', error);
      // Handle error appropriately, e.g., show a message to the user
  }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

 

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className='mt-4 bg-slate-100'>      
        <Research/>
        </div>

      <div className="flex flex-col gap-12 px-20 py-10 bg-slate-100">
        <div>
          <h1 className="text-[40px] font-bold font-serif">Chocolates</h1>
        </div>
        <div className="flex flex-wrap justify-around gap-4">
          {Products.map((sale, index) => (
            <div className='px-5' key={index}>
              <div 
                onClick={() => handleOpen(sale)} 
                className="flex flex-col justify-between items-center bg-white w-[270px] p-4 shadow-md m-2 border rounded-sm border-gray-200 h-[400px]"
              >
                <img src={sale.image} alt={sale.title} className="w-32 h-32 object-contain bg-white" />
                <h2 className="text-lg font-semibold mt-2">{sale.name}</h2>
                <p className="text-sm text-gray-500">{sale.desc}</p>
                <p className="text-lg font-bold mt-2"><CurrencyPoundIcon/>{sale.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedItem && (
        <ItemModal open={open} handleClose={handleClose} item={selectedItem} />
      )}
    </div>
  );
}

export default Chocolates;
