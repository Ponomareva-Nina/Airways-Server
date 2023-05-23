import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';

@ApiTags()
@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @ApiOperation({ summary: 'Get all bookings of the user' })
  @ApiResponse({ status: 200, type: Booking, isArray: true })
  @Get()
  getAll() {
    return this.bookingService.getBookings();
  }

  @ApiOperation({ summary: 'Add a booking' })
  @ApiResponse({ status: 200, type: Booking })
  @Post()
  addBooking() {
    return this.bookingService.addBooking();
  }
}
