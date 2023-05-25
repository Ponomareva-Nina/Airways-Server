import { BadRequestException, Injectable } from '@nestjs/common';
import { createBookingDto } from './dto/create-booking.dto';
import { Booking } from './booking.model';
import { InjectModel } from '@nestjs/sequelize';
import { AuthService } from 'src/auth/auth.service';
import { Token } from 'src/auth/models/token.model';
import { FlightsService } from 'src/flights/flights.service';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking) private bookingsDB: typeof Booking,
    private authService: AuthService,
    private flightsService: FlightsService,
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

    const isBookingExist = await this.isUserBookingExist(dto, user.id);
    if (isBookingExist) {
      throw new BadRequestException(
        'Booking already exists or one of the passengers already registered for this flight.',
      );
    }

    const booking = await this.bookingsDB.create({
      userId: user.id,
      forwardFlightId: dto.forwardFlightId,
      returnFlightId: dto.returnFlightId || null,
      passengers: dto.passengers,
      contactInfo: dto.contactInfo,
    });
    await this.addSeats(dto);
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
        forwardFlightId: dto.forwardFlightId,
        returnFlightId: dto.returnFlightId || null,
        passengers: dto.passengers,
        contactInfo: dto.contactInfo,
      },
      {
        where: { id: Number(id) },
      },
    );
    await this.deleteSeats(booking);
    await this.addSeats(dto);
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
    if (!dto.forwardFlightId) {
      mistakes.push('forward flight id is not provided');
    }
    if (!dto.contactInfo) {
      mistakes.push('contact info is not provided');
    }
    if (!dto.passengers) {
      mistakes.push('passengers info is not provided');
    }
    return mistakes;
  }

  private async isUserBookingExist(dto: createBookingDto, userId: number) {
    const bookings = await this.bookingsDB.findAll({
      where: {
        userId,
        forwardFlightId: dto.forwardFlightId,
        returnFlightId: dto.returnFlightId,
      },
    });
    let isDuplicated = false;
    if (bookings.length) {
      bookings.forEach((booking) => {
        booking.passengers.forEach((item) => {
          const passenger = dto.passengers.find(
            (pas) =>
              pas.firstName === item.firstName &&
              pas.lastName === item.lastName &&
              pas.dateOfBirth === item.dateOfBirth,
          );
          if (passenger) {
            isDuplicated = true;
            return;
          }
        });
      });
    }
    return isDuplicated;
  }

  async deleteBooking(id: string) {
    const booking = await this.getBookingById(Number(id));
    if (!booking) {
      throw new BadRequestException('Booking with this id does not exist');
    }
    await this.deleteSeats(booking);
    return await booking.destroy();
  }

  private async addSeats(dto: createBookingDto) {
    await this.flightsService.updateSeatsOnFlight(
      dto.forwardFlightId,
      dto.passengers.length,
    );
    if (dto.returnFlightId) {
      await this.flightsService.updateSeatsOnFlight(
        dto.returnFlightId,
        dto.passengers.length,
      );
    }
  }

  private async deleteSeats(booking: Booking) {
    await this.flightsService.updateSeatsOnFlight(
      booking.forwardFlightId,
      booking.passengers.length * -1,
    );
    if (booking.returnFlightId) {
      await this.flightsService.updateSeatsOnFlight(
        booking.returnFlightId,
        booking.passengers.length * -1,
      );
    }
  }
}
