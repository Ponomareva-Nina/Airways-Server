export interface flightsScheduleItem {
  departureAirport: string;
  departureCity: string;
  destinationAirport: string;
  destinationCity: string;
  days: Array<number>;
  time: string;
  durationMinutes: number;
  flightNumber: string;
  flightFare: number;
  tax: number;
  luggageFare: number;
  seats: number;
  direct: boolean;
  transferAirport?: string;
  transferCity?: string;
  transferDuration?: number;
  transferFlightNumber?: string;
}
