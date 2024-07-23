import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

function ItemModal({ open, handleClose, item }) {
  const [totalOrderCost, setTotalOrderCost] = useState(0);

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user._id;
  const purchaseLimit = 50; // Purchase limit

  useEffect(() => {
    if (open) {
      fetchOrders();
    }
  }, [open]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`https://responsibleconsumerism-backend.onrender.com/api/order/user/${userId}`);
      const orders = response.data.orders;
      const totalCost = orders.reduce((acc, order) => acc + order.price, 0);
      setTotalOrderCost(totalCost);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="text-yellow-500">&#9733;</span>); // Unicode character for star
    }
    return stars;
  };

  const handleAddToCart = async () => {
    const newItemCost = item.price;
    const updatedTotalCost = totalOrderCost + newItemCost;

    if (updatedTotalCost <= purchaseLimit) {
      try {
        const orderData = {
          name: item.name,
          image: item.image,
          desc: item.desc,
          price: item.price,
          quantity: 1, // Set the default quantity to 1 or change as needed
          user: userId,
          rating: item.rating,
          label1: item.label1,
          label2: item.label2,
        };

        const response = await axios.post('https://responsibleconsumerism-backend.onrender.com/api/order/create-order', orderData);
        console.log('Order created successfully:', response.data);
        alert("Item added to cart successfully");

        const logData = {
          message: `${item.name} Added to cart`,
          user: userId,
        };

        await axios.post('https://responsibleconsumerism-backend.onrender.com/api/logs/create', logData);
        fetchOrders(); // Refresh orders after adding a new item
      } catch (error) {
        console.error('Error creating order:', error);
      }
    } else {
      alert('Your purchase limit is over.');
    }
  };

  if (!open || !item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-md shadow-md w-[400px] relative">
        <button onClick={handleClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          X
        </button>
        <img src={item.image} alt={item.title} className="w-32 h-32 object-contain bg-white mx-auto" />
        <h2 className="text-lg font-semibold mt-2 text-center">{item.name}</h2>
        <p className="text-sm text-gray-500 text-center">{item.desc}</p>
        <p className="text-lg font-bold mt-2 text-center"><CurrencyPoundIcon /> {item.price}</p>
        <p className="text-sm text-gray-500 text-center">Stock: {item.stock}</p>
        <div className="flex justify-center mt-2">
          {renderStars(item.rating)}
        </div>
        <div className='flex flex-col justify-center w-full'>
          <h3 className='text-center'>Sustainability</h3>
          <div className='flex gap-2 w-full justify-center'>
            <img src={item.label1} className="h-[40px] w-[40px]" alt="" />
            <img src={item.label2} className="h-[40px] w-[40px]" alt="" />
          </div>
        </div>
        <button 
          className="bg-blue-600 text-white rounded-md px-4 py-2 mt-4 mx-auto block hover:bg-blue-700"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
