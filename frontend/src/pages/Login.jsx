import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/api/admin/login";
      const { data: res } = await axios.post(url, data);
      Cookies.set("access_token", res.token, {
        expires: 7,
        // Hapus opsi 'secure: true' saat menggunakan HTTP
        sameSite: "Strict",
      });
      window.location = "/admin";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-blue-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block mb-1 font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Enter your username"
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
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 px-3 hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
