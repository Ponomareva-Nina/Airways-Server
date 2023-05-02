import { Injectable } from '@nestjs/common';
import { Flight } from './flights.model';
import { InjectModel } from '@nestjs/sequelize';
import { getFlightDto } from './dto/get-flight.dto';

@Injectable()
export class FlightsService {
  constructor(@InjectModel(Flight) private FlightsDB: typeof Flight) {}

  async getAllFlights() {
    const flights = await this.FlightsDB.findAll();
    return flights;
  }

  async getFlight(dto: getFlightDto) {
    const flight = await this.FlightsDB.findAll(dto);
    return flight;
  }
}
