'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/constants/routes';

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
        <Link href={ROUTES.HOME} className="text-2xl font-bold">
          RoadPass
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
          <Link href={ROUTES.HOME}>Home</Link>
          <Link href={ROUTES.BUSES}>Buses</Link>
          {isAuthenticated ? (
            <>
              <Link href={ROUTES.MY_BOOKINGS}>My Bookings</Link>
              <Link href={ROUTES.PROFILE}>{user?.name}</Link>
              <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href={ROUTES.LOGIN}>Login</Link>
              <Link href={ROUTES.REGISTER}>Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
