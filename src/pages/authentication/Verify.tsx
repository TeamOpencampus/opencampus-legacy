import React from 'react';

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
        </div>
      </div>
    </div>
  );
}
