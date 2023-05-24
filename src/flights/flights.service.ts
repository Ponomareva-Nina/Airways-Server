import { Injectable, BadRequestException } from '@nestjs/common';
import { Flight } from './flights.model';
import { InjectModel } from '@nestjs/sequelize';
import { flightItem } from './models/flight-item';
import { getFlightDto } from './dto/get-flight.dto';

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
        departureDate: dto.departureDate,
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

  async bookSeatsOnFlight(id: number, seats: number): Promise<void> {
    const flight = await this.FlightsDB.findOne({
      where: { id },
    });
    if (!flight) {
      throw new BadRequestException('flight not found');
    }
    const bookedSeats = flight.booked;
    await this.FlightsDB.update(
      {
        booked: bookedSeats + seats,
      },
      {
        where: { id: Number(id) },
      },
    );
  }
}
