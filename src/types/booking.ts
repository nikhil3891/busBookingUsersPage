export interface Seat {
  id: string;
  seatNumber: string;
  isAvailable: boolean;
  isSelected: boolean;
  price: number;
  tier: 'upper' | 'lower';
}

export interface Booking {
  id: string;
  userId: string;
  busId: string;
  tripId: string;
  seats: Seat[];
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  bookingDate: string;
  journeyDate: string;
  passengers: Passenger[];
}

export interface Passenger {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: 'M' | 'F' | 'O';
  seatNumber: string;
}
