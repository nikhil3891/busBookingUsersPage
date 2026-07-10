export interface Bus {
  id: string;
  name: string;
  operatorName: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  source: string;
  destination: string;
  totalSeats: number;
  availableSeats: number;
  price: number;
  rating: number;
  amenities: string[];
  busType: 'AC' | 'NON_AC' | 'SLEEPER';
  date: string;
}

export interface BusDetail extends Bus {
  description: string;
  boardingPoints: string[];
  droppingPoints: string[];
}
