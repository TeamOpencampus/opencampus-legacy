import { Popover } from '@headlessui/react';
import clsx from 'clsx';
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
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <RequireAuth disabled>
      <div className='container'>
        {/* topbar */}
        <nav className='fixed top-0 left-0 h-16 p-4 shadow box-border w-full z-20 bg-slate-100 flex items-center space-x-3 md:space-x-6'>
          {/* hamburger */}
          <button
            className='p-2 rounded active:ring-1 flex items-center'
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className='material-symbols-outlined'>menu</span>
          </button>
          {/* logo */}
          <div className='flex-1 md:flex-initial h-full flex items-center'>
            {/* <div className='h-full w-3/4 md:w-32 bg-slate-50' /> */}
            <p className='text-xl'>OpenCampus</p>
          </div>
          <div className='hidden md:block flex-1 px-8'>
            <input
              type='text'
              className='bg-slate-200 py-2 px-4 text-sm border-0 rounded-lg w-full max-w-md'
              placeholder='Search here...'
            />
          </div>
          {/* actions */}
          <div className='flex items-center space-x-3 md:space-x-6'>
            <Link to={''} className='flex items-center md:hidden'>
              <span className='material-symbols-outlined'>search</span>
            </Link>
            <Link to={''} className='flex items-center'>
              <span className='material-symbols-outlined'>notifications</span>
            </Link>
            <ProfileDropdownButton />
          </div>
        </nav>
        {/* sidebar */}
        <Sidebar isExpanded={isExpanded} />
        {/* content */}
        <main
          className={`mt-16 p-6 overflow-y-auto ${
            isExpanded ? 'md:ml-56' : 'md:ml-20'
          }`}
        >
          <Outlet />
        </main>
      </div>
    </RequireAuth>
  );
}

function Sidebar({ isExpanded }: { isExpanded: boolean }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-3/4 mt-16 z-10 bg-slate-50 ${
        isExpanded ? 'block md:w-56' : 'hidden md:w-20'
      } md:block md:border-r-[1px] md:border-r-black/5 `}
    >
      {/* menu */}
      <ul className='list-none mt-12 px-3 space-y-2'>
        {NavLinks.map((link, key) => (
          <li key={key}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  `flex items-center px-4 py-2 rounded-md`,
                  isActive
                    ? 'bg-slate-200 text-gray-800'
                    : 'hover:bg-slate-100 text-gray-600'
                )
              }
            >
              <span className='material-symbols-outlined'>{link.icon}</span>
              <span className={clsx('ml-2', !isExpanded && 'hidden')}>
                {link.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function ProfileDropdownButton() {
  const userActions = useUserActions();
  return (
    <Popover className='relative'>
      <Popover.Button className='flex items-center'>
        <span className='material-symbols-outlined'>account_circle</span>
      </Popover.Button>

      <Popover.Panel className='absolute z-30 right-0 mt-4 bg-white/75 border border-black/10 backdrop-blur rounded'>
        {/* profile */}
        <div className='flex items-center space-x-2 p-4'>
          <div className='w-8 h-8 rounded-full bg-blue-400' />
          <div className='flex flex-col items-start'>
            <p className='text-gray-900 text-sm'>Some Name</p>
            <p className='text-gray-600 text-xs'>somename@example.com</p>
            <Popover.Button
              as={Link}
              to='/profile'
              className='text-blue-500 text-xs mt-1'
            >
              View Profile
            </Popover.Button>
          </div>
        </div>
        {/* divider */}
        <div className='h-[1px] w-full bg-black/5' />
        {/* logout */}
        <button
          className='w-full text-left hover:opacity-95 p-4 text-red-500 hover:bg-gray-50 flex items-center space-x-2'
          onClick={userActions.logout}
        >
          <span className='material-symbols-outlined text-sm'>logout</span>
          <p className='text-sm'>Log Out</p>
        </button>
      </Popover.Panel>
    </Popover>
  );
}
