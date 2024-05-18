import React, { useState } from 'react';

const SignIn = ({ isVisible, onClose, onSignIn }) => {
  const [username, setUsername] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');

    if (name) {
      onSignIn(name);
    }
  };

  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center font-bhadra text-burgundy'>
      <div className='bg-ivory w-[500px] p-4 rounded-lg shadow-lg font-bhadra text-burgundy'>
        <div className='flex justify-end mb-2'>
          <button className='text-black text-xl' onClick={onClose}>
            &times;
          </button>
        </div>
        <h3 className='mb-5 text-xl font-medium font-bhadra text-burgundy'>
          Sign In
        </h3>
        <form className='space-y-5' onSubmit={handleSignIn}>
          <div>
            <label htmlFor='name' className='block mb-1 text-sm font-medium font-bhadra text-burgundy'>
              Username
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 font-bhadra text-burgundy'
              required
              placeholder='Enter username'
            />
          </div>
          <div>
            <label htmlFor='password' className='block mb-1 text-sm font-medium font-bhadra text-burgundy'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 font-bhadra text-burgundy'
              required
              placeholder='Enter password'
            />
          </div>
          <button
            type='submit'
            className='w-full text-white bg-burgundy focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn;
