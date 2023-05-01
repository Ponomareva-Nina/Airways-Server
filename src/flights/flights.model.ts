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
  flightFare: string;
  tax: string;
  luggageFare: string;
  seats: string;
  booked: string;
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

  @Column({ type: DataType.STRING, allowNull: false })
  flightFare: string;

  @Column({ type: DataType.STRING, allowNull: false })
  tax: string;

  @Column({ type: DataType.STRING, allowNull: false })
  luggageFare: string;

  @Column({ type: DataType.STRING })
  seats: string;

  @Column({ type: DataType.STRING })
  booked: string;
}
