import { ApiProperty } from '@nestjs/swagger';

export class getFlightsFareDto {
  @ApiProperty({ example: 'GYD' })
  departureAirport: string;

  @ApiProperty({ example: 'AMS' })
  destinationAirport: string;

  @ApiProperty({
    example: '2023-04-20',
    description: 'date in format YYYY-MM-DD',
  })
  fromDate: string;

  @ApiProperty({
    example: '2023-04-25',
    description: 'date in format YYYY-MM-DD',
  })
  toDate: string;
}
