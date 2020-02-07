import {JwtModule} from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Logger, Module } from '@nestjs/common';
import { UserService } from "../services/user.service";
import { CryptoService } from "../services/crypto.service";
import {UserModule} from "./user.module";
import {AuthController} from "../controllers/auth.controller";
import {AuthService} from "../services/auth.service";
import {JwtStrategy} from "../jwt_logic/jwt.strategy";
import {LocalStrategy} from "../jwt_logic/local.strategy";
import {SensorService} from "../services/sensor.service";
import {SensorModule} from "./sensor.module";

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'my_secret_key',
            signOptions: {
                expiresIn: '1d',
            },
        }),
        UserModule,
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtStrategy,
        LocalStrategy,
        CryptoService,
        Logger,
    ],
    exports: [PassportModule, AuthService, JwtModule],
})
export class AuthModule {}
