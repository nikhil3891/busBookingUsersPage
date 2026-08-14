'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSearchStore } from '@/store/searchStore';
import { ROUTES } from '@/constants/routes';

const COMING_SOON = [
  'About RoadPass',
  'Careers',
  'Become an Operator',
  'Blog',
  'Help Centre',
  // 'Cancellation Policy',
  'Track My Bus',
  'Report an Issue',
];

const POPULAR_ROUTES: { label: string; source: string; destination: string }[] = [
  { label: 'Bengaluru to Chennai', source: 'Bengaluru', destination: 'Chennai' },
  { label: 'Delhi to Manali', source: 'Delhi', destination: 'Manali' },
  { label: 'Mumbai to Pune', source: 'Mumbai', destination: 'Pune' },
  { label: 'Hyderabad to Bengaluru', source: 'Hyderabad', destination: 'Bengaluru' },
];

export const Footer = () => {
  const router = useRouter();
  const { setFilters } = useSearchStore();

  const goToRoute = (source: string, destination: string) => {
    setFilters({ source, destination });
    router.push(ROUTES.BUSES);
  };

  return (
    <footer className="bg-gray-800 text-white p-8 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {COMING_SOON.slice(0, 4).map((label) => (
                <li key={label} className="text-gray-500 cursor-not-allowed" title="Coming soon">
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {COMING_SOON.slice(4).map((label) => (
                <li key={label} className="text-gray-500 cursor-not-allowed" title="Coming soon">
                  {label}
                </li>
              ))}
              <li>
                <Link href={ROUTES.CANCELLATION_POLICY} className="hover:text-white hover:underline">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Popular Routes</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {POPULAR_ROUTES.map((route) => (
                <li key={route.label}>
                  <button
                    onClick={() => goToRoute(route.source, route.destination)}
                    className="hover:text-white hover:underline text-left"
                  >
                    {route.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} RoadPass Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};