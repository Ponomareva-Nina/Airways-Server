import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';
import { createBookingDto } from './dto/create-booking.dto';
import { Token } from 'src/auth/models/token.model';

@ApiTags()
@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @ApiOperation({ summary: 'Get all bookings of the user' })
  @ApiResponse({ status: 200, type: Booking, isArray: true })
  @Get()
  getAll(@Query() dto: Token) {
    return this.bookingService.getBookings(dto);
  }

  @ApiOperation({ summary: 'Add a booking' })
  @ApiResponse({ status: 200, type: Booking })
  @Post()
  addBooking(@Body() dto: createBookingDto) {
    return this.bookingService.addBooking(dto);
  }
}
