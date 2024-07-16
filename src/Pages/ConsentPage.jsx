import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConsentPage = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };

  const handleSubmit = () => {
    if (agreed) {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-[800px]">
        <h1 className="text-2xl font-bold mb-4">Consent to Participate in Research</h1>
        <p><strong>Study Title:</strong> Responsible Consumerism - Developing Ethical and Socially Responsible Shopping Interfaces</p>
        <p><strong>Principal Investigator:</strong> Rajsekaran Ayyappan</p>
        <p><strong>Institution:</strong> University of Strathclyde</p>
        <p><strong>Contact Information:</strong></p>
        <p>Email: rajsekaran.ayyappan@gmail.com</p>
        <p>Phone: 07774886450</p>
        <h2 className="text-xl font-semibold mt-4">Introduction:</h2>
        <p>You are invited to participate in a research study on how different shopping interfaces that list social and environmental details about products might influence consumer preferences and purchasing decisions. This study aims to understand the impact of providing ethical and environmental information on consumer behavior.</p>
        <h2 className="text-xl font-semibold mt-4">Purpose of the Study:</h2>
        <p>The purpose of this study is to investigate how presenting social and environmental evaluations on product search pages affects the choices and preferences of consumers. Your participation will help us understand the importance of such information in online shopping.</p>
        <h2 className="text-xl font-semibold mt-4">Procedures:</h2>
        <p>If you agree to participate, you will be asked to complete the following tasks:</p>
        <ul className="list-disc ml-6">
          <li>Pre-experiment Survey: Answer a series of questions about your shopping habits and attitudes toward ethical and environmental considerations (approx. 5 minutes).</li>
          <li>Shopping Task: Use one of the provided shopping interfaces to evaluate and select products based on given criteria (approx. 10-15 minutes).</li>
          <li>Post-experiment Survey: Answer questions about your decision-making process and satisfaction with the chosen product (approx. 5 minutes).</li>
        </ul>
        <p className="mt-4">Your participation in this study is entirely voluntary. You may choose not to participate or to withdraw at any time without any penalty or loss of benefits to which you are otherwise entitled.</p>
        <p>There are no known risks associated with participating in this study. While there may not be direct benefits to you, your participation will contribute to our understanding of consumer behavior and the design of more ethical and responsible shopping interfaces.</p>
        <p>Your responses will be kept confidential. All data will be anonymized and stored securely. Only the research team will have access to the data, and results will be reported in aggregate form without identifying individual participants.</p>
        <h2 className="text-xl font-semibold mt-4">Contact Information:</h2>
        <p>If you have any questions or concerns about this study or your rights as a participant, please contact Rajsekaran Ayyappan at Rajsekaran.ayyappan@gmail.com or 07774886450.</p>
        <h2 className="text-xl font-semibold mt-4">Consent:</h2>
        <p>By clicking "I Agree" below, you acknowledge that you have read and understood the information above, and you voluntarily agree to participate in this study. You also confirm that you are at least 18 years old.</p>
        <div className="mt-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={agreed}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">I Agree</span>
          </label>
        </div>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
            onClick={handleSubmit}
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
