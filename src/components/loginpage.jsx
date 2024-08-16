import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to }) => (
  <Link to={to}>
    <button className="w-full h-12 bg-gradient-to-br from-skyblue-400 to-blue-300 text-white font-medium rounded-lg">
      {children}
    </button>
  </Link>
);

const Loginpage = () => {
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
  };



  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-400 to-purple-500">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center text-2xl font-bold mb-6">Login</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="user" className="block text-lg font-medium mb-1">Username</label>
            <input
              type="text"
              id="user"
              name="email"
              placeholder="Email"
              required
              className="w-full h-12 border border-gray-300 rounded-lg px-4 text-lg focus:border-purple-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="pass" className="block text-lg font-medium mb-1">Password</label>
            <input
              type="password"
              id="pass"
              name="password"
              placeholder="........"
              required
              className="w-full h-12 border border-gray-300 rounded-lg px-4 text-lg focus:border-purple-500"
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="remember-me" className="mr-2" />
              <label htmlFor="remember-me" className="text-lg">Remember me</label>
            </div>
            <Link to="/forget" className="text-purple-600 hover:underline">Forget password</Link>
          </div>
         <Button to="/design">Login</Button>
          <div className="text-center mt-4">
            <p className="text-lg">Not have an account? <Link to="/aregistration" className="text-purple-600 hover:underline">Register here</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
