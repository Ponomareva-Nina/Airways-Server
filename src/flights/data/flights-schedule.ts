import { flightsScheduleItem } from '../models/flight-schedule-item';

export const flightsSchedule: Array<flightsScheduleItem> = [
  {
    departureAirport: 'GYD',
    departureCity: 'Baku',
    destinationAirport: 'IST',
    destinationCity: 'Istanbul',
    days: [0, 2, 4, 6],
    time: '15:00:00',
    durationMinutes: 200,
    flightNumber: 'SU-5288',
    flightFare: 370.0,
    tax: 50.0,
    luggageFare: 35.0,
    seats: 150,
    direct: true,
  },
  {
    departureAirport: 'IST',
    departureCity: 'Istanbul',
    destinationAirport: 'GYD',
    destinationCity: 'Baku',
    days: [1, 3, 5],
    time: '11:25:00',
    durationMinutes: 200,
    flightNumber: 'SU-5288',
    flightFare: 390.0,
    tax: 50.0,
    luggageFare: 35.0,
    seats: 150,
    direct: true,
  },
  {
    departureAirport: 'GYD',
    departureCity: 'Baku',
    destinationAirport: 'SVO',
    destinationCity: 'Moscow',
    days: [1, 3, 5, 6],
    time: '09:15:00',
    durationMinutes: 180,
    flightNumber: 'SU-6010',
    flightFare: 258.5,
    tax: 18.5,
    luggageFare: 25.0,
    seats: 140,
    direct: true,
  },
  {
    departureAirport: 'SVO',
    departureCity: 'Moscow',
    destinationAirport: 'GYD',
    destinationCity: 'Baku',
    days: [0, 2, 4, 5],
    time: '13:00:00',
    durationMinutes: 190,
    flightNumber: 'SU-6022',
    flightFare: 260.0,
    tax: 19.0,
    luggageFare: 25.0,
    seats: 140,
    direct: true,
  },
  {
    departureAirport: 'IST',
    departureCity: 'Istanbul',
    destinationAirport: 'DME',
    destinationCity: 'Moscow',
    days: [1, 3, 5],
    time: '22:00:00',
    durationMinutes: 190,
    flightNumber: 'FZ-727',
    flightFare: 330.0,
    tax: 22.0,
    luggageFare: 25.0,
    seats: 150,
    direct: true,
  },
  {
    departureAirport: 'DME',
    departureCity: 'Moscow',
    destinationAirport: 'IST',
    destinationCity: 'Istanbul',
    days: [0, 2, 4, 6],
    time: '18:30:00',
    durationMinutes: 190,
    flightNumber: 'FZ-729',
    flightFare: 330.0,
    tax: 23.0,
    luggageFare: 25.0,
    seats: 150,
    direct: true,
  },
  {
    departureAirport: 'IST',
    departureCity: 'Istanbul',
    destinationAirport: 'DXB',
    destinationCity: 'Dubai',
    days: [0, 1, 3, 5],
    time: '12:00:00',
    durationMinutes: 240,
    flightNumber: 'FX-735',
    flightFare: 336.0,
    tax: 30.0,
    luggageFare: 26.5,
    seats: 180,
    direct: true,
  },
  {
    departureAirport: 'DXB',
    departureCity: 'Dubai',
    destinationAirport: 'IST',
    destinationCity: 'Istanbul',
    days: [1, 2, 4, 6],
    time: '15:55:00',
    durationMinutes: 260,
    flightNumber: 'FX-735',
    flightFare: 312.0,
    tax: 30.0,
    luggageFare: 26.5,
    seats: 180,
    direct: true,
  },
  {
    departureAirport: 'DME',
    departureCity: 'Moscow',
    destinationAirport: 'DXB',
    destinationCity: 'Dubai',
    days: [1, 4, 6],
    time: '12:00:00',
    durationMinutes: 240,
    flightNumber: 'SU-320',
    flightFare: 280.0,
    tax: 25.0,
    luggageFare: 25.0,
    seats: 174,
    direct: true,
  },
  {
    departureAirport: 'DXB',
    departureCity: 'Dubai',
    destinationAirport: 'DME',
    destinationCity: 'Moscow',
    days: [2, 3, 5],
    time: '15:55:00',
    durationMinutes: 260,
    flightNumber: 'SU-320',
    flightFare: 300.0,
    tax: 25.0,
    luggageFare: 25.0,
    seats: 174,
    direct: true,
  },
  {
    departureAirport: 'GYD',
    departureCity: 'Baku',
    destinationAirport: 'DXB',
    destinationCity: 'Dubai',
    days: [1, 2, 3],
    time: '19:20:00',
    durationMinutes: 180,
    flightNumber: 'FZ-707',
    flightFare: 265.0,
    tax: 28.0,
    luggageFare: 30.0,
    seats: 150,
    direct: true,
  },
  {
    departureAirport: 'DXB',
    departureCity: 'Dubai',
    destinationAirport: 'GYD',
    destinationCity: 'Baku',
    days: [0, 4, 5, 6],
    time: '08:55:00',
    durationMinutes: 195,
    flightNumber: 'FZ-707',
    flightFare: 273.0,
    tax: 28.0,
    luggageFare: 30.0,
    seats: 150,
    direct: true,
  },
  {
    departureAirport: 'PVG',
    departureCity: 'Shanghai PuDong',
    destinationAirport: 'DXB',
    destinationCity: 'Dubai',
    days: [1, 2, 3],
    time: '09:45:00',
    durationMinutes: 340,
    flightNumber: 'CX-363',
    flightFare: 527.0,
    tax: 50.0,
    luggageFare: 50.0,
    seats: 180,
    direct: true,
  },
  {
    departureAirport: 'DXB',
    departureCity: 'Dubai',
    destinationAirport: 'PVG',
    destinationCity: 'Shanghai PuDong',
    days: [0, 4, 5, 6],
    time: '11:15:00',
    durationMinutes: 325,
    flightNumber: 'CX-363',
    flightFare: 530.0,
    tax: 50.0,
    luggageFare: 50.0,
    seats: 180,
    direct: true,
  },
  {
    departureAirport: 'PVG',
    departureCity: 'Shanghai PuDong',
    destinationAirport: 'DME',
    destinationCity: 'Moscow',
    days: [0, 1, 3, 4],
    time: '11:40:00',
    durationMinutes: 560,
    flightNumber: '777-300ER',
    flightFare: 535.0,
    tax: 50.0,
    luggageFare: 50.0,
    seats: 186,
    direct: true,
  },
  {
    departureAirport: 'DME',
    departureCity: 'Moscow',
    destinationAirport: 'PVG',
    destinationCity: 'Shanghai PuDong',
    days: [0, 2, 5, 6],
    time: '07:15:00',
    durationMinutes: 575,
    flightNumber: '777-300ER',
    flightFare: 520.0,
    tax: 50.0,
    luggageFare: 50.0,
    seats: 186,
    direct: true,
  },
  {
    departureAirport: 'PVG',
    departureCity: 'Shanghai PuDong',
    destinationAirport: 'IST',
    destinationCity: 'Istanbul',
    days: [0, 1, 3, 5],
    time: '16:40:00',
    durationMinutes: 640,
    flightNumber: '777-301ER',
    flightFare: 1598.0,
    tax: 50.0,
    luggageFare: 50.0,
    seats: 186,
    direct: true,
  },
  {
    departureAirport: 'IST',
    departureCity: 'Istanbul',
    destinationAirport: 'PVG',
    destinationCity: 'Shanghai PuDong',
    days: [2, 4, 5, 6],
    time: '12:55:00',
    durationMinutes: 640,
    flightNumber: '777-301ER',
    flightFare: 1697.0,
    tax: 50.0,
    luggageFare: 50.0,
    seats: 186,
    direct: true,
  },
  {
    departureAirport: 'AMS',
    departureCity: 'Amsterdam',
    destinationAirport: 'IST',
    destinationCity: 'Istanbul',
    days: [0, 1, 2, 4, 6],
    time: '14:40:00',
    durationMinutes: 195,
    flightNumber: 'TK-7768',
    flightFare: 175.0,
    tax: 22.0,
    luggageFare: 35.0,
    seats: 150,
    direct: true,
  },
  {
    departureAirport: 'IST',
    departureCity: 'Istanbul',
    destinationAirport: 'AMS',
    destinationCity: 'Amsterdam',
    days: [1, 3, 5, 6],
    time: '19:25:00',
    durationMinutes: 185,
    flightNumber: 'TK-7768',
    flightFare: 180.0,
    tax: 22.0,
    luggageFare: 35.0,
    seats: 150,
    direct: true,
  },
  {
    departureAirport: 'AMS',
    departureCity: 'Amsterdam',
    destinationAirport: 'DXB',
    destinationCity: 'Dubai',
    days: [1, 3, 5, 6],
    time: '02:55:00',
    durationMinutes: 380,
    flightNumber: 'KL-428',
    flightFare: 640.0,
    tax: 55.0,
    luggageFare: 45.0,
    seats: 180,
    direct: true,
  },
  {
    departureAirport: 'DXB',
    departureCity: 'Dubai',
    destinationAirport: 'AMS',
    destinationCity: 'Amsterdam',
    days: [0, 2, 4, 6],
    time: '23:05:00',
    durationMinutes: 385,
    flightNumber: 'KL-429',
    flightFare: 695.0,
    tax: 55.0,
    luggageFare: 45.0,
    seats: 180,
    direct: true,
  },
  {
    departureAirport: 'AMS',
    departureCity: 'Amsterdam',
    destinationAirport: 'PVG',
    destinationCity: 'Shanghai PuDong',
    days: [0, 2, 4, 6],
    time: '01:25:00',
    durationMinutes: 380,
    flightNumber: 'MU-771',
    flightFare: 960.0,
    tax: 55.0,
    luggageFare: 45.0,
    seats: 186,
    direct: true,
  },
  {
    departureAirport: 'PVG',
    departureCity: 'Shanghai PuDong',
    destinationAirport: 'AMS',
    destinationCity: 'Amsterdam',
    days: [1, 3, 5, 6],
    time: '20:15:00',
    durationMinutes: 385,
    flightNumber: 'MU-771',
    flightFare: 985.0,
    tax: 55.0,
    luggageFare: 45.0,
    seats: 186,
    direct: true,
  },
  {
    departureAirport: 'AMS',
    departureCity: 'Amsterdam',
    destinationAirport: 'GYD',
    destinationCity: 'Baku',
    days: [0, 3, 4, 5, 6],
    time: '05:45:00',
    durationMinutes: 480,
    flightNumber: 'TK-7703',
    flightFare: 530.0,
    tax: 50.0,
    luggageFare: 45.0,
    seats: 180,
    direct: false,
    transferAirport: 'IST',
    transferCity: 'Istanbul',
    transferDuration: 65,
    transferFlightNumber: 'MK-715',
  },
  {
    departureAirport: 'GYD',
    departureCity: 'Baku',
    destinationAirport: 'AMS',
    destinationCity: 'Amsterdam',
    days: [1, 2, 3, 5, 6],
    time: '20:15:00',
    durationMinutes: 540,
    flightNumber: 'TK-7721',
    flightFare: 529.5,
    tax: 50.5,
    luggageFare: 45.0,
    seats: 180,
    direct: false,
    transferAirport: 'IST',
    transferCity: 'Istanbul',
    transferDuration: 75,
    transferFlightNumber: 'MK-721',
  },
];
