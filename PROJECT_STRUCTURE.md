# Bus Booking Website - Project Structure

## Overview
This is a Next.js frontend application for a bus booking system with a modular, scalable architecture.

## Folder Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Home page with search form
│   ├── layout.tsx                # Root layout
│   ├── buses/page.tsx            # Bus listing page
│   ├── bus/[id]/page.tsx         # Bus details page
│   ├── seats/[tripId]/page.tsx   # Seat selection page
│   ├── booking/page.tsx          # Booking details page
│   ├── payment/page.tsx          # Payment page
│   ├── profile/page.tsx          # User profile page
│   ├── my-bookings/page.tsx      # User bookings page
│   └── globals.css               # Global styles
│
├── components/                   # Reusable React components
│   ├── navbar/Navbar.tsx         # Navigation bar
│   ├── footer/Footer.tsx         # Footer component
│   ├── bus-card/BusCard.tsx      # Bus card component
│   ├── seat-layout/SeatLayout.tsx # Seat selection layout
│   ├── search-form/SearchForm.tsx # Search form
│   └── booking-summary/BookingSummary.tsx # Booking summary
│
├── services/                     # API service layer
│   ├── api.ts                    # Generic API client
│   ├── bus.service.ts            # Bus-related API calls
│   ├── booking.service.ts        # Booking-related API calls
│   └── auth.service.ts           # Authentication API calls
│
├── hooks/                        # Custom React hooks
│   ├── useAuth.ts                # Authentication hook
│   ├── useBuses.ts               # Fetch buses hook
│   └── useBooking.ts             # Booking management hook
│
├── store/                        # Zustand state management
│   ├── authStore.ts              # Authentication state
│   ├── bookingStore.ts           # Booking state
│   └── searchStore.ts            # Search filters state
│
├── types/                        # TypeScript type definitions
│   ├── bus.ts                    # Bus types
│   ├── booking.ts                # Booking types
│   └── user.ts                   # User types
│
├── lib/                          # Utility libraries
│   ├── axios.ts                  # Axios instance with interceptors
│   └── helpers.ts                # Helper functions
│
└── constants/                    # Application constants
    └── routes.ts                 # Route definitions
```

## Key Features

### State Management
- **Zustand** for lightweight state management
- Separate stores for auth, booking, and search
- Easy integration with React components

### API Layer
- **Axios** for HTTP requests
- Centralized service files for different domains
- Automatic token injection in headers
- Error handling in services

### Type Safety
- Full TypeScript support
- Well-defined types for all entities
- Type-safe API responses

### Custom Hooks
- `useAuth` - Authentication state and methods
- `useBuses` - Fetch and manage buses
- `useBooking` - Manage booking state and submission

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build
```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## Workflow

### Adding a New Feature

1. **Create Types** - Define in `src/types/`
2. **Create Service** - Add API calls in `src/services/`
3. **Create Store** (if needed) - Add state in `src/store/`
4. **Create Hook** (if needed) - Add custom hook in `src/hooks/`
5. **Create Components** - Add UI components in `src/components/`
6. **Create Page** - Add route handler in `src/app/`

### Updating Services

- Update `src/lib/axios.ts` for request/response interceptors
- Update `src/services/` for API endpoints
- Services should be pure and not contain UI logic

### Managing State

- Use Zustand stores for global state
- Use React state for component-local state
- Update stores through hooks

## API Integration

The application connects to a backend API. Update `NEXT_PUBLIC_API_URL` in `.env.local` to point to your backend.

### Expected API Endpoints

- `GET /api/buses` - Get all buses
- `GET /api/buses/{id}` - Get bus details
- `POST /api/bookings` - Create booking
- `GET /api/auth/me` - Get current user
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

## Technologies

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **Axios** - HTTP client

## Next Steps

1. Implement seat selection component
2. Implement payment integration
3. Add user authentication pages
4. Add booking confirmation page
5. Add error boundaries and loading states
