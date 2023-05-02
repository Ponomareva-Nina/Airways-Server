import { ApiProperty } from '@nestjs/swagger';

export class getFlightDto {
  @ApiProperty({ example: 'Moscow' })
  departureCity: string;

  @ApiProperty({ example: 'London' })
  destinationCity: string;

  @ApiProperty({ example: '02/05/2023', description: 'MM/DD/YYYY' })
  departureDate: string;
}
