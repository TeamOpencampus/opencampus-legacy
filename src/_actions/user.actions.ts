import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { authState } from '../_state';

export { useUserActions };

const AUTH_KEY = 'auth';

function useUserActions() {
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();
  return { login, logout, signup };

  function signup(
    fname: string,
    lname: string,
    email: string,
    password: string
  ) {}
  function login(email: string, password: string) {
    const token = {
      authToken: '',
      refreshToken: '',
      expiresAt: '',
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(token));
    setAuth(token);
  }
  function logout() {
    localStorage.removeItem(AUTH_KEY);
    setAuth(null);
    navigate('/');
  }
}
