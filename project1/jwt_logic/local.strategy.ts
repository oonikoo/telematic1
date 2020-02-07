import {AuthService} from "../services/auth.service";
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: false,
        });
    }

    async validate(email, password) {
        const user = await this.authService.login(email, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
