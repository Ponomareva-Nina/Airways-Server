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
}
