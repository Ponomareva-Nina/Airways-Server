import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';
import { createBookingDto } from './dto/create-booking.dto';
import { Token } from 'src/auth/models/token.model';

@ApiTags('Bookings')
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
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description:
      'Booking already exists or one of the passengers already registered for this flight.',
  })
  @Post()
  addBooking(@Body() dto: createBookingDto) {
    return this.bookingService.addBooking(dto);
  }

  @ApiOperation({ summary: 'Edit the booking' })
  @ApiResponse({ status: 200, type: Booking })
  @Patch(':id')
  editBooking(@Param('id') id: string, @Body() dto: createBookingDto) {
    return this.bookingService.editBooking(id, dto);
  }

  @ApiOperation({ summary: 'Delete the booking' })
  @ApiResponse({ status: 200, type: Array<void>, isArray: true })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Booking with this id does not exist',
  })
  @Delete(':id')
  deleteBooking(@Param('id') id: string, @Query() dto: Token) {
    return this.bookingService.deleteBooking(id, dto);
  }
}
