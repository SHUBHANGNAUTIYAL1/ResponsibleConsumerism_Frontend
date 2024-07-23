import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpg"

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
    occupation: '',
    shoppingFrequency: '',
    role: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (parseInt(formData.age) < 18) {
      alert('You must be at least 18 years old to register.');
      return;
    }

    try {
      console.log(formData);
      const response = await axios.post('https://responsibleconsumerism-backend.onrender.com/api/auth/register', formData);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center animation-backgroundAnimation">
      <div className="flex w-full h-full mb-10 rounded-2xl mt-0 shadow-lg justify-center px-8 bg-white items-center text-black space-x-8 py-10">
        <img src={logo} className='h-[70px] w-[70px]' />
        <h1 className="font-bold text-[26px]">Study for Responsible Consumerism - Developing Ethical and Socially Responsible Shopping Interfaces</h1>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl shadow-black bg-opacity-60">
        <h1 className="leading-[72px] space-grotesk text-[50px] text-center font-semibold text-black mb-4">Enter Your Details</h1>
        <p className="text-[20px] text-center text-white mb-8">Ready to Enhance Your Shopping Experience?</p>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 outline-none border-2 border-black bg-gray-100 text-black placeholder-black focus:outline-none"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 outline-none border-2 border-black bg-gray-100 text-black placeholder-black focus:outline-none"
          />
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            className="w-full px-4 py-2 outline-none border-2 border-black bg-gray-100 text-black placeholder-black focus:outline-none"
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
            <option value="others">Others</option>
          </select>
          <select
            name="shoppingFrequency"
            value={formData.shoppingFrequency}
            onChange={handleChange}
            className="w-full px-4 py-2 outline-none border-2 border-black bg-gray-100 text-black placeholder-black focus:outline-none"
          >
            <option value="" disabled>How often do you shop online?</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-black outline-none text-black bg-gray-100 placeholder-black focus:outline-none"
          >
            <option value="" disabled>Select Role</option>
            <option value="Seller">Seller</option>
            <option value="Buyer">Buyer</option>
          </select>
          <button
            type="submit"
            className="py-2 bg-blue-700 text-white hover:bg-blue-600 transition-colors duration-300"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-[16px] text-center text-black">
          Already a member? <a href="/login" className="text-blue-600 underline">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
