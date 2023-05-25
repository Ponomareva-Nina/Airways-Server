import { ApiProperty } from '@nestjs/swagger';

export class getFlightDto {
  @ApiProperty({ example: 'GYD' })
  departureAirport: string;

  @ApiProperty({ example: 'AMS' })
  destinationAirport: string;

  @ApiProperty({
    example: '2024-02-20',
    description: 'date in format YYYY-MM-DD',
  })
  departureDate: string;
}
