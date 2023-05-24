import { ApiProperty } from '@nestjs/swagger';

export class ContactInfo {
  @ApiProperty({ example: 'AF' })
  countryCode: string;

  @ApiProperty({ example: '+93' })
  dialNumber: string;

  @ApiProperty({ example: '1234567' })
  number: string;
}
