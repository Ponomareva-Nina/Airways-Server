import { Injectable } from '@nestjs/common';
import { Flight } from './flights.model';
import { InjectModel } from '@nestjs/sequelize';
import { getFlightDto } from './dto/get-flight.dto';
import { flightDto } from './dto/create-flight.dto';

@Injectable()
export class FlightsService {
  constructor(@InjectModel(Flight) private FlightsDB: typeof Flight) {}

  async getAllFlights() {
    const flights = await this.FlightsDB.findAll();
    return flights;
  }

  async createFlight(dto: flightDto) {
    const flight = await this.FlightsDB.create(dto);
    return flight;
  }

  async getFlights(dto: getFlightDto) {
    const flight = await this.FlightsDB.findAll({
      where: {
        departureAirport: dto.departureAirport,
        destinationAirport: dto.destinationAirport,
        departureDate: dto.departureDate,
      },
    });
    return flight;
  }
}
