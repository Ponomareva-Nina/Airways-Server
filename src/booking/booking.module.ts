import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Booking } from './booking.model';
import { AuthModule } from 'src/auth/auth.module';
import { FlightsModule } from 'src/flights/flights.module';

@Module({
  controllers: [BookingController],
  providers: [BookingService],
  imports: [
    AuthModule,
    FlightsModule,
    SequelizeModule.forFeature([User, Booking]),
  ],
})
export class BookingModule {}
