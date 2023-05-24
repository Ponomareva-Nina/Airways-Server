import { ContactInfo } from 'src/booking/models/contact-info.model';
import { Passenger } from 'src/booking/models/passenger.model';
import { flightItem } from 'src/flights/models/flight-item';

export const FlightExample: flightItem = {
  id: 1,
  flightNumber: 'SU-6029',
  departureAirport: 'GYD',
  departureCity: 'Baku',
  destinationAirport: 'ABZ',
  destinationCity: 'Aberdeen',
  departureDate: '2024-02-20',
  departureDateTime: '2024-02-20T15:00:00',
  destinationDateTime: '2024-02-20T16:30:00',
  durationMinutes: 90,
  flightFare: 120.5,
  tax: 15.5,
  luggageFare: 20,
  seats: 60,
  booked: 10,
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
