import React, { useState } from 'react';

function ItemModal({ open, handleClose, item }) {
  const [newStock, setNewStock] = useState(item ? item.stock : '');

  if (!open || !item) return null;

  const handleStockChange = (e) => {
    setNewStock(e.target.value);
  };

  const handleStockUpdate = () => {
    handleUpdateStock(newStock);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-md shadow-md w-[400px] relative">
        <button onClick={handleClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          X
        </button>
        <img src={item.image} alt={item.title} className="w-32 h-32 object-contain bg-white mx-auto" />
        <h2 className="text-lg font-semibold mt-2 text-center">{item.name}</h2>
        <p className="text-sm text-gray-500 text-center">{item.desc}</p>
        <p className="text-lg font-bold mt-2 text-center"> E .{item.price}</p>
        <p className="text-sm text-gray-500 text-center">Stock: {item.stock}</p>
        
        <div className="mt-4 flex flex-col items-center">
          <input 
            type="number" 
            value={newStock} 
            onChange={handleStockChange} 
            className="border border-gray-300 p-2 rounded-md mb-2"
          />
          <button 
            onClick={handleStockUpdate} 
            className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-2"
          >
            Update Stock
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <button 
            
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Sell to Retailer
          </button>
          <button 
            
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Sell to Government
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
