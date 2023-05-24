import { ApiProperty } from '@nestjs/swagger';

export class Passenger {
  @ApiProperty({ example: 'adult' })
  category: string;

  @ApiProperty({ example: 'Nina' })
  firstName: string;

  @ApiProperty({ example: 'Ponomareva' })
  lastName: string;

  @ApiProperty({ example: 'female', description: 'male of female' })
  sex: string;

  @ApiProperty({
    example: '1994-12-21',
    description: 'date in format YYYY-MM-DD',
  })
  dateOfBirth: string;

  @ApiProperty({
    example: 'false',
    description: 'true if special assistance needed, otherwise - false',
  })
  specialAssistance: boolean;

  @ApiProperty({
    example: '1',
    description: 'number of luggage places',
  })
  luggage: number;
}
