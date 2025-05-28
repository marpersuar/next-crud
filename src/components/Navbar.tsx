'use client';

import { useAuthenticator } from '@aws-amplify/ui-react';
import ArrowRightEndOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightEndOnRectangleIcon';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import BellIcon from '@heroicons/react/24/outline/BellIcon';
import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';
import Image from 'next/image';

export default function Navbar() {
  const { signOut, user } = useAuthenticator((context) => [context.user]);

  return (
    <div className="navbar sticky top-0 bg-base-100 z-10 shadow-md">
      <div className="flex justify-between w-full">
        {/* eslint jsx-a11y/label-has-associated-control: off */}
        <label htmlFor="left-sidebar-drawer" className="btn btn-square drawer-button lg:hidden">
          <Bars3Icon className="h-6 w-6" />
        </label>
        <label className="input flex items-center gap-2 focus:ring-0">
          <MagnifyingGlassIcon className="h-6 w-6" />
          <input type="text" name="search" placeholder="Buscar" />
        </label>
        <div className="flex justify-end gap-2">
          <button type="button" className="btn btn-ghost btn-circle disabled:bg-inherit" disabled>
            <div className="indicator">
              <BellIcon className="h-6 w-6" />
            </div>
          </button>
          <div className="dropdown dropdown-end">
            <span role="button" tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <Image src="https://gravatar.com/avatar/?d=mp&s=32" height={32} width={32} alt="Perfil" />
                </div>
              </div>
            </span>
            <ul
              role="tree"
              tabIndex={0}
              className="dropdown-content menu w-56 mt-4 p-2 z-[1] shadow bg-base-100 rounded-box"
            >
              <li className="justify-between">
                <span>
                  {user?.attributes?.given_name} {user?.attributes?.family_name}
                </span>
              </li>
              <div className="divider py-2 m-0" />
              <li>
                <button type="button" onClick={signOut}>
                  <ArrowRightEndOnRectangleIcon className="h-6 w-6" />
                  <span>Cerrar sesión</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
