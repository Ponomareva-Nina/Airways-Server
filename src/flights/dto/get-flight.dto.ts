import { ApiProperty } from '@nestjs/swagger';

export class getFlightDto {
  @ApiProperty({ example: 'Moscow' })
  departureAirport: string;

  @ApiProperty({ example: 'London' })
  destinationAirport: string;

  @ApiProperty({
    example: '2024-02-19',
    description: 'date in format YYYY-MM-DD',
  })
  departureDate: string;
}
