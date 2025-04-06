import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step1_Account = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    // Save credentials temporarily or send to backend
    navigate('/register/step2');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Create Account</h2>
      <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="input mt-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="btn mt-4" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1_Account;