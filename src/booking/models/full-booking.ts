import { Flight } from 'src/flights/flights.model';
import { ContactInfo } from './contact-info.model';
import { Passenger } from './passenger.model';

export interface FullBookingData {
  id: number;
  paid: boolean;
  forwardFlightId: number;
  returnFlightId: number;
  passengers: Passenger[];
  contactInfo: ContactInfo;
  forwardFlightData: Flight;
  returnFlightData: Flight | null;
}
