import React, { useState } from 'react';
import logo from "../assets/logo.jpg";
import { useNavigate } from 'react-router-dom';

const ConsentPage = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (agreed) {
      // Logic for form submission
      navigate('/login');
      // Redirect to login page or next step
    } else {
      alert('Please agree to the consent form before proceeding.');
    }
  };

  return (
    <div className="flex flex-col  items-center min-h-screen bg-gray-100 p-4">
      <div className="flex w-full h-[100px] mb-10 rounded-2xl shadow-lg  mt-10 px-8 bg-gray-200 items-center text-black space-x-8 py-10">
        <img src={logo} className="h-[70px] w-[70px]" alt="Logo" />
        <h1 className="font-bold text-[26px]">Study for Human Behaviour in Shopping Interfaces</h1>
      </div>
      <div className="bg-white p-8 rounded shadow-lg max-w-3xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Consent to Participate in Research</h1>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>I confirm that I am over 18 years of age and understand that my participation in this study is voluntary and that I can choose to withdraw at any time without penalty or loss of benefits.</li>
          <li>I acknowledge that there are no known risks associated with participating in this study.</li>
          <li>I understand that there may not be direct benefits to me from participating, but my involvement will help in understanding consumer behaviour and improving shopping interfaces.</li>
          <li>I am aware that my responses will be kept confidential, and all data will be anonymized and securely stored.</li>
          <li>I understand that only the research team will have access to the data, and the results will be reported in aggregate form without identifying individual participants.</li>
          <li>I consent to participate in the pre-experiment survey, shopping task, and post-experiment survey, and I agree to the conditions outlined above.</li>
        </ul>
        <p className="mb-4">Consent:</p>
        <p className="mb-4">By clicking "I Agree" below, you acknowledge that you have read and understood the information above, and you voluntarily agree to participate in this study.</p>
        <div className="flex flex-col items-center mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>I agree</span>
          </label>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className={`bg-blue-500 text-white py-2 px-4 rounded ${!agreed ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            disabled={!agreed}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPage;
