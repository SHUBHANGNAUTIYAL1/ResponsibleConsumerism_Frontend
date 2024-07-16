import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

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
    <div
      className="min-h-screen w-full flex items-center justify-center animation-backgroundAnimation"
      style={{ backgroundImage: `url(${'https://www.shutterstock.com/image-photo/full-body-profile-photo-cool-600nw-2017000508.jpg'})`, backgroundSize: 'cover' }}
    >
      <div className="bg-green-900 p-10 rounded-xl shadow-xl bg-opacity-60">
        <h1 className="leading-[72px] space-grotesk text-[70px] text-center text-[#84DC44] mb-4">GET IN TOUCH</h1>
        <p className="text-[20px] text-center text-white mb-8">Ready to Enhance Your Shopping Experience?</p>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 outline-none border-2 border-white bg-green-900 text-green-500 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 outline-none border-2 border-white bg-green-900 text-green-500 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            className="w-full px-4 py-2 outline-none border-2 border-white bg-green-900 text-green-500 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            name="occupation"
            placeholder="Occupation (working, student, etc.)"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full px-4 py-2 outline-none border-2 border-white bg-green-900 text-green-500 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            name="shoppingFrequency"
            value={formData.shoppingFrequency}
            onChange={handleChange}
            className="w-full px-4 py-2 outline-none border-2 border-white bg-green-900 text-green-500 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>How often do you shop online?</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Rarely">Rarely</option>
          </select>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-white outline-none text-green-500 bg-green-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>Select Role</option>
            <option value="Seller">Seller</option>
            <option value="Buyer">Buyer</option>
          </select>
          <button
            type="submit"
            className="py-2 bg-[#84DC44] text-white hover:bg-green-600 transition-colors duration-300"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-[16px] text-center text-white">
          Already a member? <a href="/login" className="text-green-300 underline">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
