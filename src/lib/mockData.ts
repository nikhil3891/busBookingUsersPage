import { Bus, BusDetail } from '@/types/bus';

/**
 * TEMPORARY MOCK DATA
 * -------------------
 * There is no backend/database wired up yet. This file stands in for the
 * `/buses` API so the UI has something real to render and can be tested
 * end-to-end (search -> list -> details -> seats -> booking).
 *
 * Once the real API is ready:
 *   1. Delete this file.
 *   2. Remove the fallback block in `src/services/bus.service.ts` that
 *      imports from here (search for "MOCK DATA FALLBACK").
 * That's it — nothing else depends on this file.
 */

export const MOCK_BUSES: Bus[] = [
  {
    id: '1',
    name: 'Volvo Multi-Axle',
    operatorName: 'RoadPass Travels',
    departureTime: '21:00',
    arrivalTime: '05:30',
    duration: '8h 30m',
    source: 'Bengaluru',
    destination: 'Chennai',
    totalSeats: 40,
    availableSeats: 12,
    price: 899,
    rating: 4.3,
    amenities: ['WiFi', 'Charging Point', 'Blanket', 'Water Bottle'],
    busType: 'AC',
    date: '2026-08-10',
  },
  {
    id: '2',
    name: 'Scania Sleeper',
    operatorName: 'GreenLine Express',
    departureTime: '22:15',
    arrivalTime: '06:45',
    duration: '8h 30m',
    source: 'Bengaluru',
    destination: 'Chennai',
    totalSeats: 32,
    availableSeats: 5,
    price: 1099,
    rating: 4.6,
    amenities: ['WiFi', 'Charging Point', 'Blanket', 'Reading Light'],
    busType: 'SLEEPER',
    date: '2026-08-10',
  },
  {
    id: '3',
    name: 'Non-AC Seater',
    operatorName: 'Sharma Roadways',
    departureTime: '08:00',
    arrivalTime: '15:30',
    duration: '7h 30m',
    source: 'Delhi',
    destination: 'Manali',
    totalSeats: 45,
    availableSeats: 20,
    price: 549,
    rating: 3.8,
    amenities: ['Charging Point'],
    busType: 'NON_AC',
    date: '2026-08-10',
  },
  {
    id: '4',
    name: 'Himalayan Cruiser AC',
    operatorName: 'Himachal Tourism',
    departureTime: '19:30',
    arrivalTime: '08:00',
    duration: '12h 30m',
    source: 'Delhi',
    destination: 'Manali',
    totalSeats: 36,
    availableSeats: 18,
    price: 1299,
    rating: 4.4,
    amenities: ['WiFi', 'Charging Point', 'Blanket', 'Meal'],
    busType: 'AC',
    date: '2026-08-10',
  },
  {
    id: '5',
    name: 'Shivneri AC Seater',
    operatorName: 'MSRTC',
    departureTime: '06:00',
    arrivalTime: '09:30',
    duration: '3h 30m',
    source: 'Mumbai',
    destination: 'Pune',
    totalSeats: 42,
    availableSeats: 30,
    price: 399,
    rating: 4.1,
    amenities: ['Charging Point', 'Water Bottle'],
    busType: 'AC',
    date: '2026-08-10',
  },
  {
    id: '6',
    name: 'Deccan Express',
    operatorName: 'Orange Travels',
    departureTime: '14:00',
    arrivalTime: '21:00',
    duration: '7h 00m',
    source: 'Hyderabad',
    destination: 'Bengaluru',
    totalSeats: 38,
    availableSeats: 9,
    price: 749,
    rating: 4.2,
    amenities: ['WiFi', 'Charging Point', 'Snacks'],
    busType: 'AC',
    date: '2026-08-10',
  },
];

const MOCK_BUS_DETAILS: Record<string, Omit<BusDetail, keyof Bus>> = {
  '1': {
    description:
      'A comfortable AC multi-axle Volvo running the Bengaluru-Chennai corridor nightly.',
    boardingPoints: ['Silk Board', 'Electronic City', 'Attibele'],
    droppingPoints: ['Koyambedu', 'Guindy', 'Tambaram'],
  },
  '2': {
    description: 'Premium sleeper coach with individual reading lights and privacy curtains.',
    boardingPoints: ['Madiwala', 'Silk Board', 'Hosur Road'],
    droppingPoints: ['Koyambedu', 'Chromepet'],
  },
  '3': {
    description: 'Budget-friendly non-AC seater for the scenic Delhi-Manali route.',
    boardingPoints: ['Kashmiri Gate ISBT', 'Majnu Ka Tila'],
    droppingPoints: ['Manali Bus Stand'],
  },
  '4': {
    description: 'AC cruiser with reclining seats and a hot meal stop en route to Manali.',
    boardingPoints: ['Kashmiri Gate ISBT', 'Chandigarh'],
    droppingPoints: ['Manali Bus Stand', 'Mall Road'],
  },
  '5': {
    description: 'The classic Shivneri service connecting Mumbai and Pune every hour.',
    boardingPoints: ['Dadar', 'Swargate'],
    droppingPoints: ['Shivajinagar', 'Wakad'],
  },
  '6': {
    description: 'Fast AC service between Hyderabad and Bengaluru via Kurnool.',
    boardingPoints: ['Mehdipatnam', 'Kukatpally'],
    droppingPoints: ['Madiwala', 'Silk Board'],
  },
};

const matches = (bus: Bus, source?: string, destination?: string, date?: string) => {
  const norm = (s: string) => s.trim().toLowerCase();
  if (source && !norm(bus.source).includes(norm(source))) return false;
  if (destination && !norm(bus.destination).includes(norm(destination))) return false;
  if (date && bus.date !== date) return false;
  return true;
};

export const mockGetAllBuses = (source?: string, destination?: string, date?: string): Bus[] =>
  MOCK_BUSES.filter((bus) => matches(bus, source, destination, date));

export const mockGetBusById = (id: string): BusDetail | undefined => {
  const bus = MOCK_BUSES.find((b) => b.id === id);
  const extra = MOCK_BUS_DETAILS[id];
  if (!bus || !extra) return undefined;
  return { ...bus, ...extra };
};
