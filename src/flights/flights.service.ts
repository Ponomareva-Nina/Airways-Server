import {
  Injectable,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Flight } from './flights.model';
import { InjectModel } from '@nestjs/sequelize';
import { flightItem } from './models/flight-item';
import { getFlightDto } from './dto/get-flight.dto';
import { FlightFare } from './models/flight-fare';
import { getFlightsFareDto } from './dto/get-flights-fare.dto';
import { Op } from 'sequelize';

@Injectable()
export class FlightsService {
  constructor(@InjectModel(Flight) private FlightsDB: typeof Flight) {}

  async getAllFlights() {
    const flights = await this.FlightsDB.findAll();
    return flights;
  }

  async getFlightById(id: string) {
    const flight = await this.FlightsDB.findOne({
      where: {
        id: Number(id),
      },
    });
    if (!flight) {
      throw new BadRequestException('flight not found');
    }
    return flight;
  }

  async createFlight(dto: flightItem) {
    const isExist = await this.FlightsDB.findOne({
      where: {
        departureAirport: dto.departureAirport,
        destinationAirport: dto.destinationAirport,
        departureDateTime: dto.departureDateTime,
      },
    });
    if (!isExist) {
      const flight = await this.FlightsDB.create(dto);
      return flight;
    } else {
      return isExist;
    }
  }

  async getFlights(dto: getFlightDto) {
    const flights = await this.FlightsDB.findAll({
      where: {
        departureAirport: dto.departureAirport,
        destinationAirport: dto.destinationAirport,
        departureDate: dto.departureDate,
      },
    });
    return flights;
  }

  async updateSeatsOnFlight(id: number, seats: number): Promise<void> {
    const flight = await this.FlightsDB.findOne({
      where: { id },
    });
    if (!flight) {
      throw new BadRequestException('flight not found');
    }
    const bookedSeats = flight.booked;
    if (bookedSeats + seats > flight.seats) {
      throw new HttpException(
        `lack of seats for the flight ${flight.departureCity} - ${flight.destinationCity}`,
        HttpStatus.FORBIDDEN,
      );
    }
    await this.FlightsDB.update(
      {
        booked: bookedSeats + seats,
      },
      {
        where: { id: Number(id) },
      },
    );
  }

  public generateRandomAdditionalTax(): number {
    const maxTax = 70;
    const multiplier = Math.random();
    return Math.floor(maxTax * multiplier);
  }

  public async getFlightsFare(
    flighsFareDto: getFlightsFareDto,
  ): Promise<Array<FlightFare>> {
    const toDate = new Date(flighsFareDto.toDate);
    const toDateInSec = new Date(flighsFareDto.toDate).setDate(
      toDate.getDate() + 1,
    );
    const flights = await this.FlightsDB.findAll({
      where: {
        departureAirport: flighsFareDto.departureAirport,
        destinationAirport: flighsFareDto.destinationAirport,
        departureDateTime: {
          [Op.and]: {
            [Op.gte]: new Date(flighsFareDto.fromDate),
            [Op.lte]: new Date(toDateInSec),
          },
        },
      },
    });
    const res: FlightFare[] = flights.map((flight) => {
      return {
        date: flight.departureDate,
        flightFare: flight.flightFare + flight.tax,
      };
    });
    return res;
  }
}
