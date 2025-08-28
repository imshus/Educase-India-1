import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: '',
  });
  const handleChange = (e) => {
    const { name, value, } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    localStorage.setItem("formData",JSON.stringify(formData))
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-start w-full p-4 lg:border lg:border-gray-300 lg:shadow-md lg:w-1/5 min-h-[90%]">
        <h2 className="text-2xl font-bold mb-8">Create your<br />PopX account</h2>
        <form className="space-y-6">
          <div className="relative">
            <div className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600">
              Full Name<span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder=""
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>
          <div className="relative">
            <div className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600">
              Phone number<span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=""
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>
          <div className="relative">
            <div className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600">
              Email address<span className="text-red-500">*</span>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>
          <div className="relative">
            <div className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600">
              Password<span className="text-red-500">*</span>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=""
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>
          <div className="relative">
            <div className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600">
              Company name
            </div>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder=""
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>
          <div className="mt-2">
            <div className="mb-2 text-xs font-medium text-gray-700">
              Are you an Agency?<span className="text-red-500">*</span>
            </div>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  required
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                  className="accent-purple-600"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  required
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                  className="accent-purple-600"
                />
                No
              </label>
            </div>
          </div>
          <button
            type="submit"
            onClick={() => navigate('/login')
            }
            className="mt-64 w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
