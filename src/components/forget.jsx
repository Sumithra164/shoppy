import React from 'react';
import { Link } from 'react-router-dom';

const Forget = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-400 to-purple-500">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center text-2xl font-bold mb-6">Forgot Password</div>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full h-12 border border-gray-300 rounded-lg px-4 text-lg focus:border-purple-500 transition-all duration-300"
            />
          </div>
          <div className="flex justify-center mb-6">
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-br from-blue-400 to-purple-500 text-white font-medium rounded-lg"
            >
              Send Reset Link
            </button>
          </div>
          <div className="text-center">
            <p className="text-lg">Remembered your password? <Link to="/loginpage" className="text-purple-600 hover:underline">Login here</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forget;
