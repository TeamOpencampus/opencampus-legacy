import { Outlet } from 'react-router-dom';
import { useUserActions } from '../../_actions';
import { RequireAuth } from '../../_components';

export function DashboardWrapper() {
  const userActions = useUserActions();
  return (
    <RequireAuth>
      <>
        <h1>DashboardWrapper</h1>
        <button
          className='border p-1 rounded'
          onClick={() => userActions.logout()}
        >
          Log Out
        </button>
        <Outlet />
      </>
    </RequireAuth>
  );
}
