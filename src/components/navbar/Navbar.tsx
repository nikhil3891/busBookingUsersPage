'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/constants/routes';

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={ROUTES.HOME} className="text-2xl font-bold" onClick={closeMenu}>
          RoadPass
        </Link>

        <div className="hidden md:flex gap-4 items-center">
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

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? (
              <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3 pb-2">
          <Link href={ROUTES.BUSES} onClick={closeMenu}>
            Buses
          </Link>
          {isAuthenticated ? (
            <>
              <Link href={ROUTES.MY_BOOKINGS} onClick={closeMenu}>
                My Bookings
              </Link>
              <Link href={ROUTES.PROFILE} onClick={closeMenu}>
                {user?.name}
              </Link>
              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="bg-red-500 px-4 py-2 rounded text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href={ROUTES.LOGIN} onClick={closeMenu}>
                Login
              </Link>
              <Link href={ROUTES.REGISTER} onClick={closeMenu}>
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};