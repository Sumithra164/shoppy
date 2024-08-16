import React from 'react';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/consts/pnav';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const linkClasses = 'flex items-center font-light gap-2 px-3 py-2 hover:bg-neutral-50 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function Myinside() {
  return (
    <div className='flex flex-col w-52 p-4 bg-amber-300 text-black overflow-y-auto h-screen'>
      <div className='flex items-center gap-2 px-1 py-3'>
        <span className='text-neutral-100 text-lg'>My mail</span>
      </div>
      <div className='flex-1 py-8 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.filter(item => item.key !== 'logout').map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? 'bg-neutral-300 text-black' : 'text-black',
        linkClasses
      )}
    >
      <span className='text-xl'>{item.icon}</span>
      {item.label}
    </Link>
  );
}
