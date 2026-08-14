import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'RoadPass - Book Your Tickets',
  description: 'Easy and affordable bus ticket booking platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="min-h-screen ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
