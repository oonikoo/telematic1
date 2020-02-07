import { Module } from '@nestjs/common';
import { Sensor } from '../models/entities/sensor.entity'
import  { SensorDto } from "../models/dtos/sensor.dto";
import { SensorService } from "../services/sensor.service";
import { SensorController } from "../controllers/sensor.controller";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([Sensor])],
    controllers: [SensorController],
    providers: [SensorService]
})
export class SensorModule {}
