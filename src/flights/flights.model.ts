import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface FlightCreationAttrs {
  id: number;
  flightNumber: string;
  departureAirport: string;
  destinationAirport: string;
  departureDate: string;
  departureDateTime: string;
  destinationDateTime: string;
  flightFare: number;
  tax: number;
  luggageFare: number;
  seats: number;
  booked: number;
}

@Table({ tableName: 'flights' })
export class Flight extends Model<Flight, FlightCreationAttrs> {
  @ApiProperty({ example: 1 })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'SU-6029' })
  @Column({ type: DataType.STRING, allowNull: false })
  flightNumber: string;

  @ApiProperty({ example: 'SVO' })
  @Column({ type: DataType.STRING, allowNull: false })
  departureAirport: string;

  @ApiProperty({ example: 'GYD' })
  @Column({ type: DataType.STRING, allowNull: false })
  destinationAirport: string;

  @ApiProperty({ example: '2024-02-20T15:00:00' })
  @Column({ type: DataType.STRING, allowNull: false })
  departureDate: string;

  @ApiProperty({ example: '2024-02-20T15:00:00' })
  @Column({ type: DataType.STRING, allowNull: false })
  departureDateTime: string;

  @ApiProperty({ example: '2024-02-20T16:30:00' })
  @Column({ type: DataType.STRING, allowNull: false })
  destinationDateTime: string;

  @Column({ type: DataType.FLOAT, allowNull: false })
  flightFare: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  tax: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  luggageFare: number;

  @Column({ type: DataType.INTEGER })
  seats: number;

  @Column({ type: DataType.INTEGER })
  booked: number;
}