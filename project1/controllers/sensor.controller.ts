import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {SensorDto} from "../models/dtos/sensor.dto";
import {SensorService} from "../services/sensor.service";
import {Roles} from "../services/roles.decorator";
import {UserRole} from "../models/entities/user.entity";
import {RolesGuard} from "../jwt_logic/roles.guard";

@Controller('api/sensor')
@UseGuards(RolesGuard)
export class SensorController {
    constructor(private readonly sensorService: SensorService){}

    @Get()
    @Roles(UserRole.BASIC)
    async getCurrent(){
        return await this.sensorService.getAllData();
    }

    @Post()
    @Roles(UserRole.SENSOR)
    async addData(@Body() sensor: SensorDto){
        return await this.sensorService.addData(sensor)
    }
}
