import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import leftImage from '../../Images/left.jpg';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [criteria, setCriteria] = useState({
    length: false,
    uppercase: false,
    number: false,
    special: false,
  });

  const handlePasswordChange = (value) => {
    setPassword(value);
    setCriteria({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      number: /\d/.test(value),
      special: /[!@#$%^&*]/.test(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    const unmetCriteria = [];
    if (!criteria.length) unmetCriteria.push('at least 8 characters');
    if (!criteria.uppercase) unmetCriteria.push('one uppercase letter');
    if (!criteria.number) unmetCriteria.push('one number');
    if (!criteria.special) unmetCriteria.push('one special character');
  
    if (unmetCriteria.length > 0) {
      alert(`Password must include:\n• ${unmetCriteria.join('\n• ')}`);
      return;
    }
  
    // All checks passed, proceed
    console.log('Submitting form with', { username, email, password });
    // Add actual backend call here
  };

  return (
    <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -30 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
    className="min-h-screen flex overflow-hidden"
    >
      {/* Left Side */}
      <div className="w-[55%]">
        <img src={leftImage} alt="left section" className="w-full h-full object-cover" />
      </div>

      {/* Right Side */}
      <div className="w-[45%] bg-[#254e58] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-[#88bdbc] border border-gray-700 rounded-xl p-8 shadow-lg">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">Create a Seller Account</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="text-white text-sm">Username</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1 px-4 py-2 bg-white border border-gray-400 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white transition"
                placeholder="username"
              />
            </div>

            <div>
              <label className="text-white text-sm">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2 bg-white border border-gray-400 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-white text-sm">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                className="w-full mt-1 px-4 py-2 bg-white border border-gray-400 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white transition"
                placeholder="Create your password"
              />
              <ul className="mt-2 text-xs text-white">
                <li className={criteria.length ? 'text-[#112d32]' : 'text-red-500'}>
                  • At least 8 characters
                </li>
                <li className={criteria.uppercase ? 'text-[#112d32]' : 'text-red-500'}>
                  • One uppercase letter
                </li>
                <li className={criteria.number ? 'text-[#112d32]' : 'text-red-500'}>
                  • One number
                </li>
                <li className={criteria.special ? 'text-[#112d32]' : 'text-red-500'}>
                  • One special character (!@#$...)
                </li>
              </ul>
            </div>

            <div>
              <label className="text-white text-sm">Confirm Password</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full mt-1 px-4 py-2 bg-white border border-gray-400 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white transition"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="!bg-[#254e58] py-2 bg-white border border-gray-600 rounded-md text-white font-semibold hover:bg-gray focus:border-white transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="text-white-400 text-sm text-center mt-6">
            Already a registered user?{' '}
            <Link to="/signin" className="!text-[#4f4a41] underline hover:!text-[#6e6658] transition">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;