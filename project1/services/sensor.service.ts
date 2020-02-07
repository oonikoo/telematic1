import { Injectable } from '@nestjs/common';
import {Sensor} from '../models/entities/sensor.entity'
import  {SensorDto} from "../models/dtos/sensor.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository, Transaction, TransactionRepository } from 'typeorm';

@Injectable()
export class SensorService {
    constructor(
        @InjectRepository(Sensor)
        private readonly sensorRepository: Repository<Sensor>
    ){}

    public addData(sensor: DeepPartial<SensorDto>) : Promise<SensorDto | undefined> {
        return this.sensorRepository.save(sensor)
            .then(newData => SensorService.mapSensorToDto(newData));
    }

    public  getAllData():Promise<SensorDto[]>{
        return this.sensorRepository.find({ select: ["latitude", "longitude", "temperature"] })
            .then(getData => SensorService.mapSensorsToDto(getData))
    }

    private static mapSensorToDto(sensor: Sensor): SensorDto | undefined {
        return sensor ? {
            latitude: sensor.latitude,
            longitude: sensor.longitude,
            temperature: sensor.temperature
        } : undefined;
    }

    private static mapSensorsToDto(sensors: Sensor[]): SensorDto[]{
        const mapping:SensorDto[] = [{}];
        sensors.map(function (sensor) {
            mapping.push(
                {
                    latitude: sensor.latitude,
                    longitude: sensor.longitude,
                    temperature: sensor.temperature
                }
            )
        });
        return mapping;
    }
}
