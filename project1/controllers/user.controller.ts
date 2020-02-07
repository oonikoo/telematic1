import { Controller, Get, Post, Put, Delete, Body, Param, Req } from '@nestjs/common';
import { UserDto } from "../models/dtos/user.dto";
import {DeepPartial, ObjectID} from "typeorm";
import {User} from "../models/entities/user.entity";
import {UserService} from "../services/user.service";

@Controller('api/user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async create(@Body() user: UserDto){
        return await this.userService.create(user);
    }

    @Get()
    async getById(@Param('id') id:ObjectID){
        return await this.userService.findById(id);
    }
    @Get('email')
    async getByEmail(@Param('email') email:string){
        return await this.userService.findByEmail(email);
    }
}
