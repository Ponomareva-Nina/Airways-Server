import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { createBookingDto } from './dto/create-booking.dto';
import { Booking } from './booking.model';
import { InjectModel } from '@nestjs/sequelize';
import { AuthService } from 'src/auth/auth.service';
import { Token } from 'src/auth/models/token.model';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking) private bookingsDB: typeof Booking,
    private authService: AuthService,
  ) {}

  async addBooking(dto: createBookingDto) {
    const user = await this.authService.getUserByToken(dto.token);
    if (!user) {
      throw new BadRequestException('Incorrect token');
    }

    const booking = await this.bookingsDB.create({
      userId: user.id,
      forwardFlight: dto.forwardFlight,
      returnFlight: dto.returnFlight,
      passengers: dto.passengers,
      contactInfo: dto.contactInfo,
    });
    return booking;
  }

  async getBookings(dto: Token) {
    const user = await this.authService.getUserByToken(dto.token);
    if (!user) {
      throw new BadRequestException('Incorrect token');
    }
    const bookings = await this.bookingsDB.findAll({
      where: {
        userId: user.id,
      },
    });
    return bookings;
  }
}
