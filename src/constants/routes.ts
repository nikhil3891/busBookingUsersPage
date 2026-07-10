export const ROUTES = {
  HOME: '/',
  BUSES: '/buses',
  BUS_DETAIL: (id: string) => `/bus/${id}`,
  SEATS: (tripId: string) => `/seats/${tripId}`,
  BOOKING: '/booking',
  PAYMENT: '/payment',
  PROFILE: '/profile',
  MY_BOOKINGS: '/my-bookings',
  LOGIN: '/login',
  REGISTER: '/register',
} as const;
