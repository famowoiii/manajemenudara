import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/api/admin/register";
      const response = await axios.post(url, data);
      setSuccessMessage("Registration successful. Please login.");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-blue-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        {successMessage && (
          <div className="text-green-600 mb-4">{successMessage}</div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block mb-1 font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 px-3 hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
