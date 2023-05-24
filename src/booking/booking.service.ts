import { BadRequestException, Injectable } from '@nestjs/common';
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
    const dtoMistakes = this.checkBookingDto(dto);
    if (dtoMistakes.length) {
      throw new BadRequestException(dtoMistakes);
    }

    const user = await this.authService.getUserByToken(dto.token);
    if (!user) {
      throw new BadRequestException('Incorrect token');
    }

    const booking = await this.bookingsDB.create({
      userId: user.id,
      forwardFlight: dto.forwardFlight,
      returnFlight: dto.returnFlight || null,
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

  async editBooking(id: string, dto: createBookingDto) {
    const user = await this.authService.getUserByToken(dto.token);
    if (!user) {
      throw new BadRequestException('Incorrect token');
    }

    const booking = await this.getBookingById(Number(id));
    if (!booking) {
      throw new BadRequestException('Booking with this id does not exist');
    }

    await this.bookingsDB.update(
      {
        forwardFlight: dto.forwardFlight,
        returnFlight: dto.returnFlight || null,
        passengers: dto.passengers,
        contactInfo: dto.contactInfo,
      },
      {
        where: { id: Number(id) },
      },
    );
    return await this.getBookingById(Number(id));
  }

  private async getBookingById(id: number) {
    const booking = await this.bookingsDB.findOne({
      where: {
        id: Number(id),
      },
    });
    return booking;
  }

  private checkBookingDto(dto: createBookingDto) {
    const mistakes = [];
    if (!dto.token) {
      mistakes.push('token is not provided');
    }
    if (!dto.forwardFlight) {
      mistakes.push('forward flight is not provided');
    }
    if (!dto.contactInfo) {
      mistakes.push('contact info is not provided');
    }
    if (!dto.passengers) {
      mistakes.push('passengers info is not provided');
    }
    return mistakes;
  }
}
