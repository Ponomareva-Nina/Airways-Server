import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface FlightCreationAttrs {
  id: number;
  flightNumber: string;
  departureAirport: string;
  departureCity: string;
  destinationAirport: string;
  destinationCity: string;
  departureDate: string;
  departureDateTime: string;
  destinationDateTime: string;
  durationMinutes: number;
  flightFare: number;
  tax: number;
  luggageFare: number;
  seats: number;
  booked: number;
  direct: boolean;
  transferAirport: string;
  transferCity: string;
  transferDuration: number;
  transferFlightNumber: string;
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

  @ApiProperty({ example: 'GYD' })
  @Column({ type: DataType.STRING, allowNull: false })
  departureAirport: string;

  @ApiProperty({ example: 'Baku' })
  @Column({ type: DataType.STRING, allowNull: false })
  departureCity: string;

  @ApiProperty({ example: 'AMS' })
  @Column({ type: DataType.STRING, allowNull: false })
  destinationAirport: string;

  @ApiProperty({ example: 'Amsterdam' })
  @Column({ type: DataType.STRING, allowNull: false })
  destinationCity: string;

  @ApiProperty({ example: '2024-02-20' })
  @Column({ type: DataType.STRING, allowNull: false })
  departureDate: string;

  @ApiProperty({ example: '2024-02-20T15:00:00' })
  @Column({ type: DataType.STRING, allowNull: false })
  departureDateTime: string;

  @ApiProperty({ example: '2024-02-20T16:30:00' })
  @Column({ type: DataType.STRING, allowNull: false })
  destinationDateTime: string;

  @ApiProperty({ example: 90 })
  @Column({ type: DataType.INTEGER, allowNull: false })
  durationMinutes: number;

  @ApiProperty({ example: 120.5 })
  @Column({ type: DataType.FLOAT, allowNull: false })
  flightFare: number;

  @ApiProperty({ example: 15.5 })
  @Column({ type: DataType.FLOAT, allowNull: false })
  tax: number;

  @ApiProperty({ example: 20 })
  @Column({ type: DataType.FLOAT, allowNull: false })
  luggageFare: number;

  @ApiProperty({ example: 60 })
  @Column({ type: DataType.INTEGER })
  seats: number;

  @ApiProperty({ example: 10 })
  @Column({ type: DataType.INTEGER })
  booked: number;

  @ApiProperty({ example: true })
  @Column({ type: DataType.BOOLEAN })
  direct: boolean;

  @ApiProperty({ example: 'IST' })
  @Column({ type: DataType.STRING, allowNull: true })
  transferAirport: string;

  @ApiProperty({ example: 'Istanbul' })
  @Column({ type: DataType.STRING, allowNull: true })
  transferCity: string;

  @ApiProperty({ example: 'Istanbul' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  transferDuration: number;

  @ApiProperty({ example: 'MD-223' })
  @Column({ type: DataType.STRING, allowNull: true })
  transferFlightNumber: string;
}
