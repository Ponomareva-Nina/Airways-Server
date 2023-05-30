import { ContactInfo } from 'src/booking/models/contact-info.model';
import { Passenger } from 'src/booking/models/passenger.model';
import { FlightFare } from 'src/flights/models/flight-fare';
import { flightItem } from 'src/flights/models/flight-item';

export const FlightExample: flightItem = {
  id: 1,
  flightNumber: 'SU-6029',
  departureAirport: 'GYD',
  departureCity: 'Baku',
  destinationAirport: 'AMS',
  destinationCity: 'Amsterdam',
  departureDate: '2024-02-20',
  departureDateTime: '2024-02-20T15:00:00',
  destinationDateTime: '2024-02-20T16:30:00',
  durationMinutes: 90,
  flightFare: 120.5,
  tax: 15.5,
  luggageFare: 20,
  seats: 60,
  booked: 10,
  direct: false,
  transferAirport: 'IST',
  transferCity: 'Istanbul',
  transferDuration: 65,
  transferFlightNumber: 'MK-785',
};

export const PassenegerExample: Passenger = {
  category: 'adult',
  firstName: 'Nina',
  lastName: 'Ponomareva',
  sex: 'female',
  dateOfBirth: '1994-12-21',
  specialAssistance: false,
  luggage: 1,
};

export const ContactInfoExample: ContactInfo = {
  countryCode: 'AF',
  dialNumber: '+93',
  number: '1234567',
};

export const FlightFareExample: FlightFare[] = [
  {
    date: '2023-04-20',
    flightFare: 386,
  },
  {
    date: '2023-04-23',
    flightFare: 386,
  },
  {
    date: '2023-04-24',
    flightFare: 386,
  },
];
