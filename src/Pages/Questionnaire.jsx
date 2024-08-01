import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpg";

const questions = [
  "I was able to complete the tasks and scenarios quickly using this system.",
  "I felt comfortable using this system.",
  "The system gave error messages that clearly told me how to fix problems.",
  "Whenever I made a mistake using the system, I could recover easily and quickly.",
  "The information (such as online help, on-screen messages, and other documentation) provided with this system was clear.",
  "It was easy to find the information I needed.",
  "The information was effective in helping me complete the tasks and scenarios.",
  "The organization of information on the system screens was clear.",
  "The information was effective in helping me complete the tasks and scenarios.",
  "The interface of this system was pleasant.",
  "This system has all the functions and capabilities I expect it to have.",
  "I did not encounter any crashes or significant downtime while using the website.",
  "The system responded quickly to my inputs and actions.",
  "I would recommend this system to others based on my experience.",
  "Overall, I am satisfied with this system."
];

const scaleLabels = ["Strongly Agree", "1", "2", "3", "4", "5", "6", "Strongly Disagree", "N/A"];

function Questionnaire() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.newUser._id;
  const [responses, setResponses] = useState(Array(questions.length).fill(null));
  const [page, setPage] = useState(0);

  const handleChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://responsibleconsumerism-backend.onrender.com/api/questionnaire/create', { userId, responses });
      alert('Responses submitted successfully!');
      navigate('/thankyou');
    } catch (error) {
      console.error('Error submitting responses:', error);
    }
  };

  const questionsPerPage = 8;
  const startIndex = page * questionsPerPage;
  const endIndex = Math.min(startIndex + questionsPerPage, questions.length);
  const currentQuestions = questions.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col min-h-screen items-center p-2 bg-gray-100">
      <div className="px-5 h-[100px] w-full mb-10 mt-4 flex justify-center items-center bg-gray-100">
        <div className="flex w-full h-full px-8 items-center bg-gray-200 text-black shadow-md">
          <img src={logo} className='h-[70px] w-[70px] mr-4' alt="logo" />
          <h1 className="font-semibold text-center flex-1 text-[26px]">Study for Human Behaviour in Shopping Interfaces</h1>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-6">Questionnaire</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        {currentQuestions.map((question, index) => (
          <div key={startIndex + index} className="mb-6">
            <p className="mb-2 font-semibold">{`${startIndex + index + 1}. ${question}`}</p>
            <div className="flex justify-between">
              {scaleLabels.map((label, i) => (
                <label key={i} className="flex flex-col items-center">
                  <input
                    type="radio"
                    name={`question-${startIndex + index}`}
                    value={label}
                    checked={responses[startIndex + index] === label}
                    onChange={() => handleChange(startIndex + index, label)}
                    className="form-radio"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 disabled:bg-gray-300"
          >
            Previous
          </button>
          {endIndex < questions.length ? (
            <button
              type="button"
              onClick={() => setPage(page + 1)}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Questionnaire;
