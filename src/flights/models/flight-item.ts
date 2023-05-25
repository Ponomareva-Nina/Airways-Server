export interface flightItem {
  id?: number;
  flightNumber: string;
  departureAirport: string;
  departureCity: string;
  destinationAirport: string;
  destinationCity: string;
  departureDate: string;
  departureDateTime: string;
  destinationDateTime: string;
  durationMinutes: number;
  flightFare: number;
  tax: number;
  luggageFare: number;
  seats: number;
  booked: number;
  direct: boolean;
  transferAirport: string | null;
  transferCity: string | null;
  transferDuration: number | null;
  transferFlightNumber: string | null;
}
