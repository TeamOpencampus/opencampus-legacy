import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useUserActions } from '../../_actions';
import { RequireAuth } from '../../_components';

const NavLinks: { label: string; icon: string; path: string }[] = [
  { icon: 'dashboard', label: 'Home', path: '/' },
  { icon: 'notifications', label: 'Notifications', path: '/notifications' },
  { icon: 'rss_feed', label: 'Job Feed', path: '/job-feed' },
  { icon: 'account_circle', label: 'My Profile', path: '/profile' },
];

export function DashboardWrapper() {
  const [isOpen, setOpen] = useState(false);
  return (
    <RequireAuth disabled>
      <div className='container'>
        {/* topbar */}
        <nav className='fixed top-0 left-0 h-16 p-4 shadow box-border w-full z-20 bg-slate-100 flex items-center space-x-3 md:space-x-6'>
          {/* hamburger */}
          <button
            className='p-2 rounded active:ring-1 flex items-center'
            onClick={() => setOpen(!isOpen)}
          >
            <span className='material-symbols-outlined'>menu</span>
          </button>
          {/* logo */}
          <div className='flex-1 h-full flex items-center'>
            {/* <div className='h-full w-3/4 md:w-32 bg-slate-50' /> */}
            <p className='text-xl'>OpenCampus</p>
          </div>
          {/* actions */}
          <div className='flex items-center space-x-3 md:space-x-6'>
            <Link to={''} className='flex items-center'>
              <span className='material-symbols-outlined'>search</span>
            </Link>
            <Link to={''} className='flex items-center'>
              <span className='material-symbols-outlined'>notifications</span>
            </Link>
            <ProfileDropdownButton />
          </div>
        </nav>
        {/* sidebar */}
        <aside
          className={`fixed top-0 left-0 h-screen w-3/4 mt-16 z-10 bg-slate-100 ${
            isOpen ? 'block md:w-64' : 'hidden md:w-20'
          } md:block `}
        >
          {/* menu */}
          <ul className='list-none mt-12 px-3 space-y-2'>
            {NavLinks.map((link, key) => (
              <li key={key}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-md ${
                      isActive ? 'bg-blue-600 text-white' : 'hover:bg-slate-200'
                    } `
                  }
                >
                  <span className='material-symbols-outlined'>{link.icon}</span>
                  <span className={`ml-2 ${!isOpen && 'hidden'}`}>
                    {link.label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>

        {/* content */}
        <main
          className={`mt-16 p-6 overflow-y-auto ${
            isOpen ? 'md:ml-64' : 'md:ml-20'
          }`}
        >
          <Outlet />
        </main>
      </div>
    </RequireAuth>
  );
}
function ProfileDropdownButton() {
  const userActions = useUserActions();
  const [open, setOpen] = useState(false);
  return (
    <div className='relative inline-block'>
      <button className='flex items-center' onClick={() => setOpen(!open)}>
        <span className='material-symbols-outlined'>account_circle</span>
      </button>
      <div
        className={`right-0 mt-2 z-30 bg-slate-200 shadow-lg rounded space-y-2 backdrop-blur ${
          open ? 'absolute' : 'hidden'
        }`}
      >
        {/* profile */}
        <div className='flex items-center space-x-2 p-4'>
          <div className='w-8 h-8 rounded-full bg-blue-400' />
          <div className='flex flex-col items-start'>
            <p className='text-gray-900 text-sm'>Some Name</p>
            <p className='text-gray-600 text-xs'>somename@example.com</p>
          </div>
        </div>
        {/* divider */}
        <div className='h-[1px] w-full bg-gray-300' />
        {/* logout */}
        <button
          className='w-full text-left hover:opacity-95 p-4 text-red-500 flex items-center space-x-2'
          onClick={userActions.logout}
        >
          <span className='material-symbols-outlined text-sm'>logout</span>
          <p className='text-sm'>Log Out</p>
        </button>
      </div>
    </div>
  );
}
