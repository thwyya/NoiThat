import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-6">MOODY STUDIO</h2>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Enter your e-mail address"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <div className="relative">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">👁️</span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-1">
            <input type="checkbox" /> Remember me
          </label>
          <Link to="#" className="text-gray-500 hover:underline">
            Forgot password?
          </Link>
        </div>

        <button
          type="button"
          className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition"
        >
          LOGIN
        </button>

        <div className="flex items-center gap-2">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <Link
          to="/register"
          className="w-full border border-gray-300 py-2 rounded block text-center hover:bg-gray-50"
        >
          SIGN UP
        </Link>
      </form>
    </div>
  )
}

export default Login