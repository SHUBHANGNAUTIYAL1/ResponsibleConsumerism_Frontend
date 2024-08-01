import React, { useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ItemModal from './ItemaModal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

function Cloths() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://responsibleconsumerism-backend.onrender.com/api/product/tea');
        setProducts(response.data.products.slice(0, 5)); // Limit to 5 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const handleSubmit = () => {
    navigate('/tea');
  };

  return (
    <div className="w-full h-[500px] flex flex-col mt-5 px-5">
      <div className='flex flex-col gap-4 p-5 bg-white shadow-md'>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-[24px]">Tea</h1>
          <div onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-800 rounded-full w-[30px] h-[30px] flex items-center justify-center text-white font-semibold">
            <ArrowForwardIosIcon style={{ fontSize: 16 }} />
          </div>
        </div>
        <div className='flex items-center justify-around'>
          {products.map((product, index) => (
            <div className="flex flex-col justify-between items-center bg-white w-[290px] p-4 shadow-md m-2 border rounded-sm border-gray-200 h-[430px]" key={index} onClick={() => handleOpen(product)}>
              <img src={product.image} alt={product.title} className="w-32 h-32 object-contain bg-white" />
              <h2 className="text-lg font-semibold mt-2 text-center">{product.name}</h2>
              <p className="text-sm text-gray-500 text-center">{product.desc}</p>
              <p className="text-lg font-bold mt-2"><CurrencyPoundIcon/> {product.price}</p>
              <div className='text-sm text-gray-500 text-center flex items-center justify-center font-bold gap-2'><p>Ethical Score :</p> <div className="h-[30px] w-[30px] flex items-center justify-center rounded-full text-white bg-green-600">{product.score}</div></div>
              <div className='flex flex-col justify-center w-full'>
                <h3 className='text-center'>Sustainability</h3>
                <div className='flex gap-2 w-full justify-center'>
                  <img src={product.label1} className="h-[40px] w-[40px]" alt="" />
                  <img src={product.label2} className="h-[40px] w-[40px]" alt="" />
                </div>
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

export default Cloths;
