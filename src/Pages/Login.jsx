import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpg";

const Login = () => {
  localStorage.clear();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    occupation: '',
    shoppingFrequency: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.age < 18) {
      alert("You must be at least 18 years old to participate.");
      return; // Prevent form submission
    }
    try {
      const response = await axios.post('https://responsibleconsumerism-backend.onrender.com/api/auth/register', formData);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/market');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-100">
       <div className="px-5 h-[100px] w-full mb-10 mt-4 flex justify-center items-center bg-gray-100">
      <div className="flex w-full h-full px-8 items-center bg-gray-200 text-black shadow-md">
        <img src={logo} className='h-[70px] w-[70px] mr-4' alt="logo" />
        <h1 className="font-semibold text-center flex-1 text-[26px]">Study for Human Behaviour in Shopping Interfaces</h1>
      </div>
      </div>
      <div className="bg-white p-10 rounded-2xl  bg-opacity-80">
        <h1 className="leading-[72px] space-grotesk text-[50px] font-semibold text-center text-black mb-4">Enter Your Details</h1>
        <p className="text-[20px] text-center text-white mb-8">Ready to Enhance Your Shopping Experience?</p>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <input
            type="number"
            name="age"
            placeholder="Enter Your Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 outline-none border-2 border-black text-black bg-gray-100 placeholder-black focus:outline-none"
          />
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-black outline-none text-black bg-gray-100 placeholder-black focus:outline-none"
          >
            <option value="" disabled>Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <select
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full px-4 py-2 outline-none border-2 border-black bg-gray-100 text-black placeholder-black focus:outline-none"
          >
            <option value="" disabled>Occupation (working, student, etc.)</option>
            <option value="student">Student</option>
            <option value="working">Working</option>
            <option value="retired">retired</option>
            <option value="others">Others</option>
          </select>
          <select
            name="shoppingFrequency"
            value={formData.shoppingFrequency}
            onChange={handleChange}
            className="w-full px-4 py-2 outline-none border-2 border-black text-black bg-gray-100 placeholder-black focus:outline-none"
          >
            <option value="" disabled>How often do you shop online?</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
          <button
            type="submit"
            className="py-2 bg-[#4462dc] text-white hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
