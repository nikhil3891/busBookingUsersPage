import Link from 'next/link';
import { Bus, Mail, Phone } from 'lucide-react';
import { ROUTES } from '@/constants/routes';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About RoadPass', href: '#' },
      // { label: 'Careers', href: '#' },
      { label: 'Become an Operator Add your own bus', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Centre', href: '#' },
      { label: 'Cancellation Policy', href: '#' },
      { label: 'Track My Bus', href: '#' },
      { label: 'Report an Issue', href: '#' },
    ],
  },
  {
    title: 'Popular Routes',
    links: [
      { label: 'Bengaluru to Chennai', href: '#' },
      { label: 'Delhi to Manali', href: '#' },
      { label: 'Mumbai to Pune', href: '#' },
      { label: 'Hyderabad to Bengaluru', href: '#' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-line bg-midnight text-white">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link href={ROUTES.HOME} className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber text-ink">
              <Bus size={18} strokeWidth={2.5} />
            </span>
            RoadPass
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Search, compare and book bus tickets from operators across the country. Live seat maps, instant e-tickets, easy cancellations.
          </p>
          <div className="mt-5 flex gap-3">
            {['f', 'in', 'x'].map((label) => (
              <span key={label} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white/80 hover:bg-white/20">
                {label}
              </span>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/50">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-amber">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} RoadPass Technologies. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><Phone size={14} /> 1800-123-4567</span>
            <span className="flex items-center gap-1.5"><Mail size={14} /> support@roadpass.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
