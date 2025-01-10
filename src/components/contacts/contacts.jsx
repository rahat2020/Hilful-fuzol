"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const isDisbaled =
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.message;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-extrabold text-center text-brand mb-6">
            Contact Us
          </h2>
          <form className="space-y-6">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-regular-300 p-2 rounded-md shadow-lg sm:text-sm"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-regular-300 p-2 rounded-md shadow-lg sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-regular-300 p-2 rounded-md shadow-lg sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-regular-300 rounded-md shadow-lg p-2 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isDisbaled}
                onClick={handleSubmit}
                className={`w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-white bg-brand hover:bg-green-500 ${
                  isDisbaled && "bg-green-500 cursor-not-allowed"
                }`}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
