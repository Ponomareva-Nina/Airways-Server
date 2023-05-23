import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Flight } from 'src/flights/flights.model';
import { Passenger } from './models/passenger.model';
import {
  ContactInfoExample,
  FlightExample,
  PassenegerExample,
} from 'src/swagger/examples';
import { ContactInfo } from './models/contact-info.model';
import { User } from 'src/users/users.model';

interface BookingCreationAttrs {
  userId: number;
  forwardFlight: Flight;
  returnFlight: Flight;
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

  @ApiProperty({ example: FlightExample })
  @Column({
    type: DataType.JSON,
  })
  forwardFlight: Flight;

  @ApiProperty({ example: FlightExample })
  @Column({
    type: DataType.JSON,
  })
  returnFlight: Flight;

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
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
