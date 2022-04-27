import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../_state/AuthState';

export const RequireAuth: React.FC<{ children: JSX.Element }> = (props) => {
  const location = useLocation();
  const auth = useRecoilValue(authState);
  if (auth === null) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  return props.children;
};
