import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Passenger } from './models/passenger.model';
import { ContactInfoExample, PassenegerExample } from 'src/swagger/examples';
import { ContactInfo } from './models/contact-info.model';
import { User } from 'src/users/users.model';

interface BookingCreationAttrs {
  userId: number;
  forwardFlightId: number;
  returnFlightId: number;
  passengers: Passenger[];
  contactInfo: ContactInfo;
}

@Table({ tableName: 'bookings' })
export class Booking extends Model<Booking, BookingCreationAttrs> {
  @ApiProperty({ example: 1 })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 12 })
  @Column({
    type: DataType.INTEGER,
  })
  forwardFlightId: number;

  @ApiProperty({ example: 14 })
  @Column({
    type: DataType.INTEGER,
  })
  returnFlightId: number;

  @ApiProperty({ example: [PassenegerExample] })
  @Column({
    type: DataType.ARRAY(DataType.JSON),
  })
  passengers: Passenger[];

  @ApiProperty({ example: ContactInfoExample })
  @Column({
    type: DataType.JSON,
  })
  contactInfo: ContactInfo;

  @ForeignKey(() => User)
  @ApiProperty({ example: 3 })
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
