import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';
import { FlightsModule } from './flights/flights.module';
import { Flight } from './flights/flights.model';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';
import { Booking } from './booking/booking.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Flight, Booking],
      autoLoadModels: true,
    }),
    UsersModule,
    FlightsModule,
    AuthModule,
    BookingModule,
  ],
})
export class AppModule {}
