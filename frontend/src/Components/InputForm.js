import React, { useState } from 'react';
import MessagesServices from '../Services/services';
import ErrorMessage from './ErrorMessage';

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await MessagesServices.askQuestion(inputValue);
      setResponseMessage(response.data.message); // Adjust based on your API response
    } catch (error) {
      setError(error.response.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md"
      >
        <h2 className="text-lg font-bold mb-4">Simple Form</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="input"
          >
            Input:
          </label>
          <input
            type="text"
            id="input"
            value={inputValue}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {responseMessage && (
          <p className="mt-4 text-green-500">{responseMessage}</p>
        )}
        {error && <ErrorMessage error={error} />}
      </form>
    </div>
  );
};

export default SimpleForm;
