import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { createUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { User } from 'src/users/users.model';
import { Token } from './models/token.model';
import { authUserDto } from './dto/auth-user.dto';

@ApiTags('Registartion and authorisation')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @ApiOkResponse({ status: 200, type: Token })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Incorect email or password',
  })
  @ApiBadRequestResponse({ type: Token })
  login(@Body() authDto: authUserDto) {
    return this.authService.login(authDto);
  }

  @ApiOperation({ summary: 'Register new user' })
  @ApiResponse({ status: 200, type: Token })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'User with such email already exists',
  })
  @Post('/registration')
  registration(@Body() userDto: createUserDto) {
    return this.authService.register(userDto);
  }
}
