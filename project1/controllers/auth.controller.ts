import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { LoginDto } from "../models/dtos/login.dto";
import { SingUpDto } from "../models/dtos/singUp.dto";
import {AuthService} from "../services/auth.service";
import {AuthGuard} from "@nestjs/passport";

@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('login')
    @UseGuards(AuthGuard('local'))
    public async login(@Body() login: LoginDto, @Req() req) {
        return await this.authService.signIn(req.user);
    }

    @Post('singup')
    async signUp(@Body() userDto:SingUpDto){
        return await this.authService.singUp(userDto);
    }
}
