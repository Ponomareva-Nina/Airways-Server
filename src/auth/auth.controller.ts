import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { createUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Token } from './models/token.model';
import { authUserDto } from './dto/auth-user.dto';
import { UserData } from './models/userData';

@ApiTags('Registartion and authorisation')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  @ApiOperation({ summary: 'Get user data by token' })
  @ApiOkResponse({ status: 200, type: UserData })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Incorect token',
  })
  getUser(@Query() dto: Token) {
    return this.authService.getUserData(dto);
  }

  @Post('/login')
  @ApiOperation({ summary: 'Login user' })
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

  @ApiOperation({ summary: 'Auth with Google' })
  @ApiResponse({ status: 200, type: Token })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Credentials not ok',
  })
  @Post('/google')
  authWithGoogle(@Body() credentials: Token) {
    return this.authService.authWithGoogle(credentials.token);
  }
}
