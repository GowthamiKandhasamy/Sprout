import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import rightImage from '../../Images/right.jpg';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You'll wire up your backend once your soul returns from backend limbo
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="min-h-screen flex overflow-hidden"
    >
      {/* Left Side - 45% */}
      <div className="w-[45%] bg-[#4f4a41] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-[#6e6658] border border-gray-700 rounded-xl p-8 shadow-lg">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">Welcome back!</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="text-white text-sm">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2 bg-white border border-gray rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-white text-sm">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-2 bg-white border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white transition"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="!bg-[#4f4a41] py-2 bg-white border border-gray-600 rounded-md text-white font-semibold hover:bg-gray focus:border-white transition duration-300"
            >
              Sign In
            </button>
          </form>

          <p className="text-white-400 text-sm text-center mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="!text-[#88bdbc] underline hover:text-gray-200 transition">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - 55% */}
      <div className="w-[55%]">
        <img
          src={rightImage}
          alt="Right section"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default Signin;