import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { Sensor } from '../models/entities/sensor.entity'
import  { SensorDto } from "../models/dtos/sensor.dto";
import { SensorService } from "../services/sensor.service";
import { SensorController } from "../controllers/sensor.controller";
import { SensorModule } from "./sensor.module";
import {AuthModule} from "./auth.module";
import {APP_GUARD} from "@nestjs/core";
import {RolesGuard} from "../jwt_logic/roles.guard";
import {UserModule} from "./user.module";
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";
import {AppController} from "../controllers/app.controller";
import {AppService} from "../services/app.service";

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        AuthModule,
        UserModule,
        SensorModule
    ],
    controllers: [AppController],
    providers: [
        {
            provide: APP_GUARD,
            useClass: RolesGuard
        },
        AppService
    ],
})
export class AppModule {
    constructor(private readonly connection: Connection) {}
}
