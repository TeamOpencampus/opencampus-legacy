import { Route, Routes } from 'react-router-dom';
import { LoginPage, SignupPage } from './pages/authentication';
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
    </Routes>
  );
}

export default App;
