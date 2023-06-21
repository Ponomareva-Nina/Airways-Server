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
import { GoogleTokenPayload, TokenPayload } from './models/token-payload.model';
import { UserData } from './models/userData';
import { Token } from './models/token.model';

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

  async authWithGoogle(credentials: string) {
    const decoded = this.jwtService.decode(credentials) as GoogleTokenPayload;
    console.log(decoded);
    if (decoded && decoded.email) {
      const user = await this.userService.getUserByEmail(decoded.email);
      console.log(user);
      if (user) {
        return this.generateToken(user);
      }
      if (!user) {
        const newUser = await this.userService.createUser({
          firstName: decoded.given_name,
          lastName: decoded.family_name,
          email: decoded.email,
          password: null,
          dateOfBirth: null,
          sex: null,
          phone: null,
          citizenship: null,
        });
        return this.generateToken(newUser);
      }
    }
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
    const payload = { id: user.id, email: user.email };
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

  public async getUserData(dto: Token): Promise<UserData> {
    const userId = this.getIdFromToken(dto.token);
    if (!userId) {
      throw new HttpException('Incorrect token', HttpStatus.BAD_REQUEST);
    }
    const user = await this.userService.getUserById(userId);
    if (!user) {
      throw new HttpException('User is not found', HttpStatus.BAD_REQUEST);
    }
    const userData: UserData = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth,
      sex: user.sex,
      phone: user.phone,
      citizenship: user.citizenship,
    };
    return userData;
  }

  private getIdFromToken(token: string) {
    try {
      const decoded = this.jwtService.decode(token);
      if (decoded) {
        return (decoded as TokenPayload).id || null;
      }
    } catch (error: unknown) {
      if (error) {
        console.log((error as Error).message);
      }
      return null;
    }
  }
}
