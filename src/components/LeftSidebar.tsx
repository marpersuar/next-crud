'use client';

import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import UsersIcon from '@heroicons/react/24/outline/UsersIcon';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Route } from '@/types/route';

const routes: Route[] = [
  {
    path: '/',
    icon: <Squares2X2Icon className="h-6 w-6" />,
    title: 'Panel',
  },
  {
    path: '/users',
    icon: <UsersIcon className="h-6 w-6" />,
    title: 'Usuarios',
  },
  {
    path: '/configuration',
    icon: <Cog6ToothIcon className="h-6 w-6" />,
    title: 'Configuración',
  },
];

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <aside className="drawer-side z-30 overflow-hidden">
      {/* eslint jsx-a11y/label-has-associated-control: off */}
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay" />
      <div className="flex w-80 h-[4rem] items-center justify-center bg-base-100">
        <Link href="/">
          <Image className="mask mask-squircle w-10" src="/logo.svg" height={40} width={40} alt="Lorem Ipsum" />
        </Link>
      </div>
      <ul className="menu w-80 h-[calc(100vh-4rem)] bg-base-100">
        {routes.map((route, index) => (
          <li key={index}>
            <Link href={route.path} className={pathname === route.path ? 'font-semibold bg-base-200' : 'font-normal'}>
              {route.icon} {route.title}
              {pathname === route.path ? (
                <span
                  className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
                  aria-hidden="true"
                />
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
