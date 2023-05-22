import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { createUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private UserDB: typeof User) {}

  async createUser(dto: createUserDto) {
    const user = await this.UserDB.create(dto);
    return user;
  }

  async getAllUsers() {
    const users = await this.UserDB.findAll();
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.UserDB.findOne({
      where: {
        email,
      },
    });
    return user;
  }

  async getUserByPhone(phone: string) {
    const user = await this.UserDB.findOne({
      where: {
        phone: phone,
      },
    });
    return user;
  }
}
