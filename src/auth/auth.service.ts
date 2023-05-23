import {
  HttpException,
  Injectable,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/users.model';
import { authUserDto } from './dto/auth-user.dto';
import { TokenPayload } from './models/token-payload.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(authUserDto: authUserDto) {
    const user = await this.validateUser(authUserDto);
    return this.generateToken(user);
  }

  async register(userDto: createUserDto) {
    const isEmailExist = await this.userService.getUserByEmail(userDto.email);
    const isPhoneExist = await this.userService.getUserByPhone(userDto.phone);
    if (isEmailExist) {
      throw new HttpException(
        'User with such email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (isPhoneExist) {
      throw new HttpException(
        'User with such phone number already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const _hashPassword = await bcrypt.hash(userDto.password, 3);
    const user = await this.userService.createUser({
      ...userDto,
      password: _hashPassword,
    });

    return this.generateToken(user);
  }

  private generateToken(user: User) {
    const payload = { id: user.id, email: user.email, phone: user.phone };
    return { token: this.jwtService.sign(payload) };
  }

  private async validateUser(authUserDto: authUserDto) {
    const user = await this.userService.getUserByEmail(authUserDto.email);
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(
        authUserDto.password,
        user.password,
      );
      if (isPasswordCorrect) {
        return user;
      }
    }

    throw new UnauthorizedException({ message: 'Incorrect email or password' });
  }

  public async getUserByToken(token: string) {
    const userId = this.getIdFromToken(token);
    if (userId) {
      return await this.userService.getUserById(userId);
    }
    return null;
  }

  private getIdFromToken(token: string) {
    const decoded = this.jwtService.decode(token);
    if (decoded) {
      return (decoded as TokenPayload).id;
    }
  }
}
