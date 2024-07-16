import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
  const handlelogout=()=>{
    navigate('/login')
  }
  const GoToCart=()=>{
     navigate('/cart')
  }

  return (
    <nav className="bg-white  p-4 px-10 flex gap-10 justify-between items-center">
      <div className="text-blue-600 text-[30px] font-bold">ShopEase</div>
      <div className="w-[60%] flex">
      <form onSubmit={handleSearchSubmit} className="relative flex-grow mx-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="w-full  p-2 pl-10 border  bg-blue-50 rounded-md border-none outline-none"
        />
         <div className="absolute left-3 top-2.5 text-gray-500 flex items-center">
         <SearchIcon/>
        </div>
      </form>
      </div>
      <div className="relative">
        <button
          onClick={toggleMenu}
          className=" bg-white rounded-full w-[50px] h-[50px]"
        >
       <AccountCircleIcon style={{height:40 , width:40}}/>
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
            <button
              onClick={GoToCart}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
            >
              Cart
            </button>
            <button
              onClick={handlelogout}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
