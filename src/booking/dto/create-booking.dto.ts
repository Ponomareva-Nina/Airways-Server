import { Flight } from 'src/flights/flights.model';
import { Passenger } from '../models/passenger.model';
import { ContactInfo } from '../models/contact-info.model';
import { ApiProperty } from '@nestjs/swagger';
import {
  ContactInfoExample,
  FlightExample,
  PassenegerExample,
} from 'src/swagger/examples';

export class createBookingDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  })
  token: string;

  @ApiProperty({ example: FlightExample })
  forwardFlight: Flight;

  @ApiProperty({ example: FlightExample })
  returnFlight: Flight;

  @ApiProperty({ example: [PassenegerExample] })
  passengers: Passenger[];

  @ApiProperty({ example: ContactInfoExample })
  contactInfo: ContactInfo;
}
