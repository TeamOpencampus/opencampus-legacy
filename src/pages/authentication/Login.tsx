import { useEffect } from 'react';
import { Location, useLocation, useNavigate } from 'react-router-dom';
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
    <div className='container p-4'>
      <p>LoginPage</p>
      <button
        className='border p-1 rounded'
        onClick={() => userActions.login('', '')}
      >
        Log In
      </button>
    </div>
  );
}
