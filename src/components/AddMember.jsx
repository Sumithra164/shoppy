import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa'; 

export default function AddMember() {
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Contact</h1>
      <div className="flex flex-col items-center justify-center border border-gray-500 p-4 rounded-lg shadow-md">
        <form className="w-full max-w-lg">
          <div className="relative mb-4">
            <label htmlFor="photo-upload" className="absolute inset-0 flex items-center justify-center cursor-pointer pt-20">
              <div className="w-32 h-32 bg-gray-200 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-600">
                {photo ? (
                  <img src={photo} alt="Profile" className="w-full h-full rounded-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center text-3xl ">
                    <FaCamera />
                    <span className="ml-2">+</span>
                  </div>
                )}
              </div>
            </label>
            <input
              type="file"
              id="photo-upload"
              className="hidden"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1 pt-40">First Name*</label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                name="firstname"
                id="firstname"
                className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1 pt-40 ">Last Name*</label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                name="lastname"
                id="lastname"
                className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2"
                required
              />
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                id="email"
                className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                name="phonenumber"
                id="phonenumber"
                className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2"
                required
              />
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">Designation*</label>
              <input
                type="text"
                placeholder="Enter Your Designation"
                name="designation"
                id="designation"
                className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="dateofbirth" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth*</label>
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                name="dateofbirth"
                id="dateofbirth"
                className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2"
                required
              />
            </div>
          </div>
          <div className='flex items-center justify-center'>
          <button
            type="submit"
            className=" bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Add Member
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}