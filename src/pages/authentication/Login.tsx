import { useEffect } from 'react';
import { Location, useLocation, useNavigate, Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useUserActions } from '../../_actions';
import { authState } from '../../_state/AuthState';

export function LoginPage() {
  const auth = useRecoilValue(authState);
  const userActions = useUserActions();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as { from?: Location })?.from ?? '/';

  useEffect(() => {
    // redirect to requested location
    if (auth) navigate(from, { replace: true });
  }, [auth]);

  return (
    <div className='loginForm'>
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
              Sign in to your Opencampus account
            </p>

            {/* email */}
            <div>
              <label className='text-sm font-medium'>Email</label>

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
              <label className='text-sm font-medium'>Password</label>

              <div className='relative mt-1'>
                <input
                  type='password'
                  id='password'
                  className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                  placeholder='Enter password'
                />
              </div>
            </div>

            {/* are you forgot password babygirl? */}
            <p className='text-sm text-left text-blue-800'>
              <Link to='/reset-password'>Forgot Password?</Link>
            </p>

            {/* sign in button */}
            <button
              type='submit'
              className='block w-full px-5 py-3 text-sm font-medium text-white bg-blue-800 rounded-lg'
            >
              Sign in
            </button>

            <p className='text-sm text-center text-gray-500'>
              No account?
              <Link to='/signup' className='underline text-blue-800'>
                {' '}
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
