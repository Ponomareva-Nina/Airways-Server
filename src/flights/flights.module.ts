import { Module } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { FlightsController } from './flights.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Flight } from './flights.model';

@Module({
  providers: [FlightsService],
  controllers: [FlightsController],
  imports: [SequelizeModule.forFeature([Flight])],
})
export class FlightsModule {}
