import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface FlightCreationAttrs {
  id: number;
  flightNumber: string;
  departureCity: string;
  destinationCity: string;
  departureDate: string;
  destinationDate: string;
  departureTime: string;
  destinationTime: string;
  flightFare: number;
  tax: number;
  luggageFare: number;
  seats: number;
  booked: number;
}

@Table({ tableName: 'flights' })
export class Flight extends Model<Flight, FlightCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  flightNumber: string;

  @Column({ type: DataType.STRING, allowNull: false })
  departureCity: string;

  @Column({ type: DataType.STRING, allowNull: false })
  destinationCity: string;

  @Column({ type: DataType.STRING, allowNull: false })
  departureDate: string;

  @Column({ type: DataType.STRING, allowNull: false })
  destinationDate: string;

  @Column({ type: DataType.STRING, allowNull: false })
  departureTime: string;

  @Column({ type: DataType.STRING, allowNull: false })
  destinationTime: string;

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
