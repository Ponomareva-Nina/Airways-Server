export interface flightsScheduleItem {
  departureAirport: string;
  destinationAirport: string;
  days: Array<number>;
  time: string;
  durationMinutes: number;
  flightNumber: string;
  flightFare: number;
  tax: number;
  luggageFare: number;
  seats: number;
}
