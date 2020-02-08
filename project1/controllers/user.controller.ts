import { Controller, Get, Post, Put, Delete, Body, Param, Req } from '@nestjs/common';
import { UserDto } from "../models/dtos/user.dto";
import {DeepPartial, ObjectID} from "typeorm";
import {User} from "../models/entities/user.entity";
import {UserService} from "../services/user.service";

@Controller('api/user')
export class UserController {
    constructor(private readonly userService: UserService){}

}
