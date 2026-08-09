'use client';

import { useEffect } from 'react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Send this to a logging service (e.g. Sentry) once one is wired up.
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <p className="text-5xl mb-4">🚧</p>
      <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
      <p className="text-gray-600 mb-6">
        This page hit an unexpected error. You can try again, or head back home.
      </p>
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => reset()}
          className="bg-blue-600 text-white px-5 py-2 rounded font-semibold hover:bg-blue-700"
        >
          Try again
        </button>
        <a
          href="/"
          className="border border-gray-300 px-5 py-2 rounded font-semibold hover:bg-gray-50"
        >
          Go home
        </a>
      </div>
    </div>
  );
}
