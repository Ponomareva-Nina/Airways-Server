import { flightsScheduleItem } from '../models/flight-schedule-item';

export const flightsSchedule: Array<flightsScheduleItem> = [
  {
    departureAirport: 'GYD',
    destinationAirport: 'ABZ',
    days: [0, 2, 4, 6],
    time: '15:00:00',
    durationMinutes: 90,
    flightNumber: 'SU-5288',
    flightFare: 128.5,
    tax: 12.0,
    luggageFare: 20.0,
    seats: 50,
  },
  {
    departureAirport: 'ABZ',
    destinationAirport: 'GYD',
    days: [1, 3, 5],
    time: '09:00:00',
    durationMinutes: 120,
    flightNumber: 'SU-5288',
    flightFare: 128.5,
    tax: 12.0,
    luggageFare: 20.0,
    seats: 50,
  },
];
