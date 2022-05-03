import { Link } from 'react-router-dom';

export function SignupPage() {
  return (
    <div className='SignupForm'>
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-lg mx-auto'>
          <h1 className='text-2xl font-bold text-center text-blue-800 sm:text-3xl'>
            Join Opencampus to get hired by top MNCs
          </h1>

          <p className='max-w-md mx-auto mt-4 text-center text-gray-500'>
            an integrated campus hiring and training automation platform
          </p>

          <form
            action=''
            className='p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl'
          >
            <p className='text-lg font-medium'>
              Create your Opencampus account today!
            </p>
            {/* write your name here, don't be shy */}
            <div className='relative mt-1'>
              <label className='text-sm font-medium' htmlFor='firstname'>
                First Name
              </label>
              <div className='relative mt-1'>
                <input
                  type='text'
                  id='firstname'
                  className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                  placeholder='Enter first name'
                />
              </div>
            </div>
            <div>
              <label className='text-sm font-medium' htmlFor='lastname'>
                Last Name
              </label>
              <div className='relative mt-1'>
                <input
                  type='text'
                  id='lastname'
                  className='w-full p-4 pr-12  text-sm border-gray-200 rounded-lg shadow-sm'
                  placeholder='Enter last name'
                />
              </div>
            </div>

            {/* email */}
            <div>
              <label className='text-sm font-medium' htmlFor='email'>
                Email
              </label>
              <div className='relative mt-1'>
                <input
                  type='email'
                  id='email'
                  className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                  placeholder='Enter email'
                />
              </div>
            </div>

            {/* password */}
            <div>
              <label className='text-sm font-medium' htmlFor='password'>
                Password
              </label>

              <div className='relative mt-1'>
                <input
                  type='password'
                  id='password'
                  className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                  placeholder='Enter password'
                />
              </div>
            </div>

            {/* checkbox */}
            <div className='flex items-start mb-6'>
              <div className='flex items-center h-5'>
                <input
                  id='terms'
                  type='checkbox'
                  value=''
                  className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'
                />
              </div>

              {/* for final release */}
              {/* <label className="ml-2 text-sm font-medium text-gray-900">I agree with the <Link to="#" className="text-blue-600 hover:underline">terms and conditions</Link> and <Link to="#" className="text-blue-600 hover:underline">privacy policy</Link></label> */}

              <label className='ml-2 text-sm font-medium text-gray-900'>
                I agree to pay the said amount whenever Opencampus claims
              </label>
            </div>

            {/* sign up button */}
            <button
              type='submit'
              className='block w-full px-5 py-3 text-sm font-medium text-white bg-blue-800 rounded-lg'
            >
              Create Account
            </button>

            <p className='text-sm text-center text-gray-500'>
              Already have account?
              <Link to='/login' className='underline text-blue-800'>
                {' '}
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
