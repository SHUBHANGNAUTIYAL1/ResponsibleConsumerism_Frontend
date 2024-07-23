import React, { useState  } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpg"


const questions = [
  "Overall, I am satisfied with how easy it is to use this system.",
  "It was simple to use this system.",
  "I was able to complete the tasks and scenarios quickly using this system.",
  "I felt comfortable using this system.",
  "It was easy to learn to use this system.",
  "I believe I could become productive quickly using this system.",
  "The system gave error messages that clearly told me how to fix problems.",
  "Whenever I made a mistake using the system, I could recover easily and quickly.",
  "The information (such as online help, on-screen messages, and other documentation) provided with this system was clear.",
  "It was easy to find the information I needed.",
  "The information was effective in helping me complete the tasks and scenarios.",
  "The organization of information on the system screens was clear.",
  "The interface of this system was pleasant.",
  "I liked using the interface of this system.",
  "This system has all the functions and capabilities I expect it to have.",
  "Overall, I am satisfied with this system."
];

const scaleLabels = ["Strongly Agree", "1", "2", "3", "4", "5", "6", "Strongly Disagree", "N/A"];

function Questionnaire() {
    const navigate= useNavigate()
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user._id;
  const [responses, setResponses] = useState(Array(questions.length).fill(null));

  const handleChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://responsibleconsumerism-backend.onrender.com/api/questionnaire/create', {userId, responses });
      alert('Responses submitted successfully!');
      navigate('/login')
    } catch (error) {
      console.error('Error submitting responses:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-2 bg-gray-100">
       <div className="flex w-full h-full mb-10 rounded-2xl mt-0 shadow-lg justify-center px-8 bg-white items-center text-black space-x-8 py-10">
        <img src={logo} className='h-[70px] w-[70px]' />
        <h1 className="font-bold text-[26px]">Study for Responsible Consumerism - Developing Ethical and Socially Responsible Shopping Interfaces</h1>
      </div>
      <h1 className="text-3xl font-bold mb-6">Questionnaire</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        {questions.map((question, index) => (
          <div key={index} className="mb-6">
            <p className="mb-2 font-semibold">{`${index + 1}. ${question}`}</p>
            <div className="flex justify-between">
              {scaleLabels.map((label, i) => (
                <label key={i} className="flex flex-col items-center">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={label}
                    checked={responses[index] === label}
                    onChange={() => handleChange(index, label)}
                    className="form-radio"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Questionnaire;
