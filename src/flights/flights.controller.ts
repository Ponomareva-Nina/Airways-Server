import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FlightsService } from './flights.service';
import { Flight } from './flights.model';
import { getFlightDto } from './dto/get-flight.dto';
import { createFlightsDto } from './dto/create-flight.dto';
import { flightsSchedule } from './data/flights-schedule';
import { flightItem } from './models/flight-item';
import { getFlightsFareDto } from './dto/get-flights-fare.dto';
import { FlightFareExample } from 'src/swagger/examples';

@ApiTags('Flights')
@Controller('flights')
export class FlightsController {
  constructor(private flightsService: FlightsService) {}

  @ApiOperation({ summary: 'Get all flights' })
  @ApiResponse({ status: 200, type: Flight, isArray: true })
  @Get('/all')
  getAll() {
    return this.flightsService.getAllFlights();
  }

  @ApiOperation({ summary: 'Get flights fare statistics for the period' })
  @ApiResponse({
    status: 200,
    isArray: true,
    schema: { example: FlightFareExample },
  })
  @Get('/fare')
  getFlightsFare(@Query() flightsFareDto: getFlightsFareDto) {
    return this.flightsService.getFlightsFare(flightsFareDto);
  }

  @ApiOperation({ summary: 'Get flights by values' })
  @ApiResponse({ status: 200, type: Flight, isArray: true })
  @Get()
  getFlights(@Query() flightDto: getFlightDto) {
    return this.flightsService.getFlights(flightDto);
  }

  @ApiOperation({ summary: 'Get flight by id' })
  @ApiResponse({ status: 200, type: Flight })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Flight not found',
  })
  @Get(':id')
  getFlightById(@Param('id') id: string) {
    return this.flightsService.getFlightById(id);
  }

  @ApiOperation({ summary: 'Generate flights' })
  @ApiResponse({ status: 200, type: Flight, isArray: true })
  @Post()
  generateFlights(@Body() data: createFlightsDto) {
    const from = new Date(data.fromDate);
    const to = new Date(data.toDate);
    const current = from;
    const result: Array<Promise<Flight>> = [];

    while (current <= to) {
      flightsSchedule.forEach((flight) => {
        flight.days.forEach((day) => {
          const currentDay = current.getDay();
          if (day === currentDay) {
            const today = new Date(current.toDateString());
            const [hours, min, sec] = flight.time.split(':');

            const flightDto: flightItem = {
              departureAirport: flight.departureAirport,
              departureCity: flight.departureCity,
              destinationAirport: flight.destinationAirport,
              destinationCity: flight.destinationCity,
              flightNumber: flight.flightNumber,
              departureDate: today.toJSON().split('T')[0],
              departureDateTime: new Date(
                today.setUTCHours(Number(hours), Number(min), Number(sec)),
              ).toJSON(),
              destinationDateTime: new Date(
                today.setTime(
                  today.getTime() + flight.durationMinutes * 60 * 1000,
                ),
              ).toJSON(),
              durationMinutes: flight.durationMinutes,
              flightFare:
                flight.flightFare +
                this.flightsService.generateRandomAdditionalTax(),
              tax: flight.tax,
              luggageFare: flight.luggageFare,
              seats: flight.seats,
              booked: 0,
              direct: flight.direct,
              transferAirport: flight.transferAirport || null,
              transferCity: flight.transferCity || null,
              transferDuration: flight.transferDuration || null,
              transferFlightNumber: flight.transferFlightNumber || null,
            };
            const res = this.flightsService.createFlight(flightDto);
            result.push(res);
          }
        });
      });
      current.setDate(current.getDate() + 1);
    }
    return Promise.all(result);
  }
}
