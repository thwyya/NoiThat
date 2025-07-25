import React from 'react'
import { Link } from 'react-router-dom'
import Input from '@/components/Input'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
import { FiEye } from "react-icons/fi";


const Register = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-6">MOODY STUDIO</h2>

      <form className="space-y-4">
        <Input placeholder="Enter your name" />

        <Input placeholder="Enter your e-mail address" />

        <div className="relative">
          <Input placeholder="Enter your password" />
          <FiEye className="absolute right-3 top-2.5 text-gray-500 cursor-pointer h-5 w-5" />
        </div>

        <div className="relative">
          <Input placeholder="Enter your confirm password" />
          <FiEye className="absolute right-3 top-2.5 text-gray-500 cursor-pointer h-5 w-5" />
        </div>        

        <PrimaryButton text="SIGN UP" fullWidth />

        <div className="flex items-center gap-2">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-500 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <Link to="/login">
          <SecondaryButton text="LOGIN" fullWidth />
        </Link>
      </form>
    </div>
  )
}

export default Register