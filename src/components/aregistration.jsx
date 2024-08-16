import React, { useState } from 'react';

const Aregistration = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    number: '',
    password: '',
    confirm: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-400 to-purple-500">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="text-2xl font-semibold mb-6">Registration Form</div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter your name"
                value={formData.fullname}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg focus:border-purple-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-2">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg focus:border-purple-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg focus:border-purple-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-2">Phone Number</label>
              <input
                type="text"
                name="number"
                placeholder="Enter your phone number"
                value={formData.number}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg focus:border-purple-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg focus:border-purple-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirm"
                placeholder="Confirm your password"
                value={formData.confirm}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg focus:border-purple-500"
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <span className="font-medium mb-2">Gender</span>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                  className="hidden"
                />
                <span className="w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center">
                  {formData.gender === 'Male' && <span className="w-3 h-3 bg-blue-400 rounded-full"></span>}
                </span>
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                  className="hidden"
                />
                <span className="w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center">
                  {formData.gender === 'Female' && <span className="w-3 h-3 bg-blue-400 rounded-full"></span>}
                </span>
                <span>Female</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === 'Other'}
                  onChange={handleChange}
                  className="hidden"
                />
                <span className="w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center">
                  {formData.gender === 'Other' && <span className="w-3 h-3 bg-blue-400 rounded-full"></span>}
                </span>
                <span>Other</span>
              </label>
            </div>
          </div>
          <button type="submit" className="w-full h-12 bg-gradient-to-br from-blue-400 to-purple-500 text-white font-medium rounded-lg">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Aregistration;
