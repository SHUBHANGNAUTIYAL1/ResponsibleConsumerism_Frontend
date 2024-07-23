import React, { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/logo.jpg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
    const userId = user._id;
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`https://responsibleconsumerism-backend.onrender.com/api/order/user/${userId}`);
        setOrderCount(response.data.orders.length);
        console.log(response.data.orders.length) // Adjust based on your backend response
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Handle the search query submission here
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <nav className="bg-white p-4 px-10 flex gap-10 justify-between items-center">
      <div className="text-blue-600 text-[30px] flex items-center gap-10 font-bold">
        <img src={logo} className='h-[70px] w-[70px]' alt="logo" />
        <div>ShopEase</div>
      </div>
      <div className="w-[70%] flex">
        <form onSubmit={handleSearchSubmit} className="relative flex-grow mx-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="w-full p-2 pl-10 border bg-blue-50 rounded-md border-none outline-none"
          />
          <div className="absolute left-3 top-2.5 text-gray-500 flex items-center">
            <SearchIcon />
          </div>
        </form>
        <div className='flex ml-20 gap-10 items-center'>
          <div className="relative" onClick={goToCart}>
            <ShoppingCartIcon />
            {orderCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {orderCount}
              </div>
            )}
          </div>
          <LogoutIcon onClick={handleLogout} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
