import { ApiProperty } from '@nestjs/swagger';

export class createUserDto {
  @ApiProperty({ example: 'user@gmail.com' })
  readonly email: string;

  @ApiProperty({ example: 'myPassword' })
  readonly password: string;

  @ApiProperty({ example: 'Nina', required: false })
  firstName: string;

  @ApiProperty({ example: 'Ponomareva', required: false })
  lastName: string;

  @ApiProperty({ example: '21.12.1994', required: false })
  dateOfBirth: string;

  @ApiProperty({ example: 'female', required: false })
  sex: string;

  @ApiProperty({ example: '+79811234567', required: false })
  pnone: string;

  @ApiProperty({ example: 'Russian Federation', required: false })
  citizenship: string;
}
