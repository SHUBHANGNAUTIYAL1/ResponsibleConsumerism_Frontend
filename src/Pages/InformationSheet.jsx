import React from 'react';
import { useNavigate } from 'react-router-dom';
import Research from '../Components/Research';
import logo from "../assets/logo.jpg"

const InformationSheet = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/consent');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="flex w-full h-full mb-10 rounded-2xl shadow-lg justify-center px-8 bg-white items-center text-black space-x-8 py-10">
       <img src={logo} className='h-[70px] w-[70px]' />
       <h1 className="font-bold    text-[26px]">Study for Responsible Consumerism - Developing Ethical and Socially Responsible Shopping Interfaces</h1>
    </div>
      <div className="bg-white p-8 rounded shadow-lg max-w-3xl w-full">
        <h1 className="text-2xl text-center font-bold mb-4">Information Sheet</h1>
        <section className="mb-4">
          <h2 className="text-xl font-semibold">Introduction</h2>
          <p className="mt-2">
            You are invited to participate in a research study on how different shopping interfaces that list social and environmental details about products might influence consumer preferences and purchasing decisions. This study aims to understand the impact of providing this information on consumer behaviour.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-semibold">Purpose of the Study</h2>
          <p className="mt-2">
            The purpose of this study is to investigate how presenting social and environmental evaluations on product search pages affects consumer choices and preferences. We aim to understand whether consumers are more likely to choose products with positive ratings, how this information influences the prioritization of product features, and if it enhances the overall shopping experience. Additionally, we seek to identify trends in consumer behaviour and assess the potential for promoting more sustainable and socially responsible purchasing decisions. Your participation will help us understand the importance of such information in online shopping.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-semibold">If you agree to participate, you will be asked to complete the following tasks:</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Pre-experiment Survey: Answer some basic questions about you and your shopping habits by registering.</li>
            <li>Shopping Task: Use one of the provided shopping interfaces to evaluate and select products based on given criteria.</li>
            <li>Post-experiment Survey: Answer questions about your shopping experience on the website and satisfaction with the chosen product.</li>
          </ul>
        </section>
        <p className="mb-4">
          If you agree to participate in this study, please proceed to the next page to accept your consent form.
        </p>
        <div className="w-full flex justify-center">
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          NEXT &gt;
        </button>
        </div>
      </div>
    </div>
  );
};

export default InformationSheet;
