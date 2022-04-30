import React from 'react';
import { Link } from 'react-router-dom';

export function VerifyPage() {
  return (
    <div className='VerifyForm'>
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-lg mx-auto'>
          <h1 className='text-2xl font-bold text-center text-blue-800 sm:text-3xl'>
            Greetings! from Opencampus
          </h1>

          <p className='max-w-md mx-auto mt-4 text-center text-gray-500'>
            an integrated campus hiring and training automation platform
          </p>

          <form
            action=''
            className='p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-lg'
          >
            <p className='text-lg font-medium'>
              Enter the code sent to your Email
            </p>

            {/* verification code */}
            <div>
              <div className='relative mt-1'>
                <input
                  type='text'
                  id='verification-code'
                  className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                  placeholder='Enter code here'
                />
              </div>
            </div>

            {/* verify button */}
            <button
              type='submit'
              className='block w-full px-5 py-3 text-sm font-medium text-white bg-blue-800 rounded-lg'
            >
              Verify
            </button>
          </form>

          {/* alert notification starts*/}
          <div className='alter-notification'>
            <div
              className='flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
              role='alert'
            >
              <svg
                className='inline flex-shrink-0 mr-3 w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <div>Oops! Wrong Code</div>
            </div>
            <div
              className='flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800'
              role='alert'
            >
              <svg
                className='inline flex-shrink-0 mr-3 w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <div>Your Email has been verified Successfully!</div>
            </div>
          </div>
          {/* alert notification ends*/}
        </div>
      </div>
    </div>
  );
}
