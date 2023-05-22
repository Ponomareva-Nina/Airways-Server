import { ApiProperty } from '@nestjs/swagger';

export class authUserDto {
  @ApiProperty({ example: 'user@gmail.com' })
  readonly email: string;

  @ApiProperty({ example: 'myPassword' })
  readonly password: string;
}
