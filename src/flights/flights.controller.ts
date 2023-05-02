import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FlightsService } from './flights.service';
import { Flight } from './flights.model';

@ApiTags('Flights')
@Controller('flights')
export class FlightsController {
  constructor(private flightsService: FlightsService) {}

  @ApiOperation({ summary: 'Get all flights' })
  @ApiResponse({ status: 200, type: Array<Flight> })
  @Get()
  getAll() {
    return this.flightsService.getAllFlights();
  }
}
