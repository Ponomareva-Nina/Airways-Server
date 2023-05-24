import { ApiProperty } from '@nestjs/swagger';

export class UserData {
  @ApiProperty({ example: 'user@gmail.com' })
  id: number;

  @ApiProperty({ example: 'user@gmail.com' })
  email: string;

  @ApiProperty({ example: 'Nina', required: false })
  firstName: string;

  @ApiProperty({ example: 'Ponomareva', required: false })
  lastName: string;

  @ApiProperty({ example: '21.12.1994', required: false })
  dateOfBirth: string;

  @ApiProperty({ example: 'female', required: false })
  sex: string;

  @ApiProperty({ example: '+79811234567', required: false })
  phone: string;

  @ApiProperty({ example: 'Russian Federation', required: false })
  citizenship: string;
}
