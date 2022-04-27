import { atom } from 'recoil';

type TAuthState = {
  authToken: string;
  refreshToken: string;
  expiresAt: string;
};

const getSavedState = () => {
  const state = localStorage.getItem('auth');
  return state === null ? null : (JSON.parse(state) as TAuthState);
};

export const authState = atom<TAuthState | null>({
  key: 'authState',
  default: getSavedState(),
});
