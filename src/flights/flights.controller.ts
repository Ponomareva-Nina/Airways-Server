import { Body, Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FlightsService } from './flights.service';
import { Flight } from './flights.model';
import { getFlightDto } from './dto/get-flight.dto';

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
}
