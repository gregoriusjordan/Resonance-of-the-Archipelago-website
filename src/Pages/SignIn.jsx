import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Quotes from '../Components/Quotes';

const SignIn = ({ onSignIn, prevLocation }) => {
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const password = formData.get('password');

    if (name && password.length >= 8) {
      onSignIn(name);
      navigate(prevLocation || '/');
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    }
  };

  const handleGoBack = () => {
    navigate(prevLocation || '/');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-burgundys'>
      <div className='flex justify-center items-center flex-col mx-4 mt-12'>
        <div className='bg-ivory max-w-[500px] w-full p-4 rounded-lg shadow-lg flex flex-col items-center justify-center mt-16'>
          <div className='flex items-center justify-between w-full mb-5'>
            <h3 className='text-xl font-medium text-burgundy'>
              Sign In
            </h3>
            <button
              onClick={handleGoBack}
              className='text-xl font-bold text-burgundy px-4 py-2 text-center'
            >
              &times;
            </button>
          </div>
          <form className='space-y-5 w-full' onSubmit={handleSignIn}>
            <div>
              <label htmlFor='name' className='block mb-1 text-sm font-medium text-burgundy'>
                Username
              </label>
              <input
                type='text'
                name='name'
                id='name'
                className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5'
                required
                placeholder='Enter username'
              />
            </div>
            <div>
              <label htmlFor='password' className='block mb-1 text-sm font-medium text-burgundy'>
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                className={`bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 ${
                  passwordError ? 'border-red-500' : ''
                }`}
                required
                minLength={8}
                onChange={() => setPasswordError('')}
                placeholder='Enter password'
              />
              {passwordError && (
                <p className='text-red-500 text-xs mt-1'>{passwordError}</p>
              )}
            </div>
            <button
              type='submit'
              className='w-full text-white bg-burgundy focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              Sign In
            </button>
          </form>
        </div>
        <div className='flex justify-center mt-8 w-full'>
          <Quotes />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
