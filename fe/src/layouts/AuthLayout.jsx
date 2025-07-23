import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex w-1/2 flex-col justify-center items-center p-8 bg-white shadow-lg">
        <Outlet />
      </div>

      <div className="hidden md:flex w-1/2">
        <img
          src="https://i.pinimg.com/1200x/90/72/8e/90728ecf6a761e0b203c2599c122c6f8.jpg"
          alt="Decor"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default AuthLayout