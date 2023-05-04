import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FlightsService } from './flights.service';
import { Flight } from './flights.model';
import { getFlightDto } from './dto/get-flight.dto';
import { createFlightsDto, flightDto } from './dto/create-flight.dto';
import { flightsSchedule } from './data/flights-schedule';

@ApiTags('Flights')
@Controller('flights')
export class FlightsController {
  constructor(private flightsService: FlightsService) {}

  @ApiOperation({ summary: 'Get all flights' })
  @ApiResponse({ status: 200, type: Array<Flight> })
  @Get('/all')
  getAll() {
    return this.flightsService.getAllFlights();
  }

  @ApiOperation({ summary: 'Get flights by values' })
  @ApiResponse({ status: 200, type: Array<Flight> })
  @Get()
  getFlights(@Body() flightDto: getFlightDto) {
    return this.flightsService.getFlights(flightDto);
  }

  @ApiOperation({ summary: 'Generate flights' })
  @ApiResponse({ status: 200, type: Flight })
  @Post()
  generateFlights(@Body() data: createFlightsDto) {
    const from = new Date(data.fromDate);
    const to = new Date(data.toDate);
    const current = from;

    while (current < to) {
      const currentDay = current.getDay();

      flightsSchedule.forEach((flight) => {
        flight.days.forEach((day) => {
          if (day === currentDay) {
            const [hours, min, sec] = flight.time.split(':');

            const flightDto: flightDto = {
              departureAirport: flight.departureAirport,
              destinationAirport: flight.destinationAirport,
              flightNumber: flight.flightNumber,
              departureDate: new Date(
                current.setUTCHours(Number(hours), Number(min), Number(sec)),
              ).toJSON(),
              destinationDate: new Date(
                current.setTime(
                  current.getTime() + flight.durationMinutes * 60 * 1000,
                ),
              ).toJSON(),
              flightFare: flight.flightFare,
              tax: flight.tax,
              luggageFare: flight.luggageFare,
              seats: flight.seats,
            };
            this.flightsService.createFlight(flightDto);
          }
        });
      });
      current.setDate(current.getDate() + 1);
    }
  }
}
