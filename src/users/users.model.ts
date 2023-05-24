import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Уникальный id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'user@gmail.com' })
  @Column({ type: DataType.STRING, unique: true })
  email: string;

  @ApiProperty({ example: 'myPassword123' })
  @Column({ type: DataType.STRING })
  password: string;

  @ApiProperty({ example: 'Nina' })
  @Column({ type: DataType.STRING })
  firstName: string;

  @ApiProperty({ example: 'Ponomareva' })
  @Column({ type: DataType.STRING })
  lastName: string;

  @ApiProperty({ example: '21.12.1994' })
  @Column({ type: DataType.STRING })
  dateOfBirth: string;

  @ApiProperty({ example: 'female' })
  @Column({ type: DataType.STRING })
  sex: string;

  @ApiProperty({ example: '+79811234567' })
  @Column({ type: DataType.STRING, unique: true })
  phone: string;

  @ApiProperty({ example: 'Russian Federation' })
  @Column({ type: DataType.STRING, allowNull: true })
  citizenship: string;

  @ApiProperty({ example: [] })
  @HasMany(() => Booking)
  bookings: Array<Booking>;
}
