import { ApiProperty } from '@nestjs/swagger';

export class createFlightsDto {
  @ApiProperty({ example: '2023-05-15' })
  fromDate: string;

  @ApiProperty({ example: '2023-05-25' })
  toDate: string;
}
