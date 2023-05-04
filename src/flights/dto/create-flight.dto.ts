import { ApiProperty } from '@nestjs/swagger';

export class flightDto {
  flightNumber: string;
  departureAirport: string;
  destinationAirport: string;
  departureDate: string;
  destinationDate: string;
  flightFare: number;
  tax: number;
  luggageFare: number;
  seats: number;
}

export class createFlightsDto {
  @ApiProperty({ example: '2023-05-15' })
  fromDate: string;

  @ApiProperty({ example: '2023-05-25' })
  toDate: string;
}
