import { Route, Routes } from 'react-router-dom';
import {
  LoginPage,
  ResetPage,
  ResetPageAction,
  SignupPage,
  VerifyPage,
} from './pages/authentication';
import {
  DashboardWrapper,
  DiscoverPage,
  HomePage,
  NotificationPage,
  ProfilePage,
} from './pages/dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashboardWrapper />}>
        <Route index element={<HomePage />} />
        <Route path='discover' element={<DiscoverPage />} />
        <Route path='notifications' element={<NotificationPage />} />
        <Route path='profile' element={<ProfilePage />} />
      </Route>
      <Route path='login' element={<LoginPage />} />
      <Route path='signup' element={<SignupPage />} />
      <Route path='reset-password'>
        <Route index element={<ResetPage />} />
        <Route path=':token' element={<ResetPageAction />} />
      </Route>
      <Route path='verify-email' element={<VerifyPage />} />
    </Routes>
  );
}

export default App;
