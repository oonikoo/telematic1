import {JwtService} from '@nestjs/jwt';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "./user.service";
import {JwtPayload} from "../jwt_logic/jwt-payload";
import {CryptoService} from "./crypto.service";
import {User, UserRole} from "../models/entities/user.entity"
import {UserDto} from "../models/dtos/user.dto";
import {ObjectID} from "typeorm";
import {SingUpDto} from "../models/dtos/singUp.dto";
import {TokenDto} from "../models/dtos/token.dto";
import {UserResponse} from "../models/responses/user.response";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly cryptoService: CryptoService,
        private readonly jwtService: JwtService
    ){}

    private getTokenPayload(user: User | UserDto): JwtPayload {
        if(typeof user.id === "object"){
            return {
                id: user.id.toString(),
                email: user.email,
                role: user.role
            };
        }
        return {
            id: user.id,
            email: user.email,
            role: user.role
        };
    }

    public async singUp(userDto: SingUpDto): Promise<TokenDto>{
        return await this.userService.findByEmail(userDto.email)
            .then(existingUser => {
                if(existingUser && existingUser.id){
                    throw new Error('Email already exists');
                }
                const password = this.cryptoService.hashPassword(userDto.password);
                const user = {
                    email: userDto.email,
                    name: userDto.name,
                    password: password.hash,
                    salt: password.salt,
                    role: UserRole.BASIC
                };

                const expiresIn = '1d';
                return this.userService.create(user)
                    .then(newUser => {
                       const token = this.jwtService.sign(this.getTokenPayload(newUser), { expiresIn });
                       return { token, "user":user.name };
                    });
            });
    }

    public async login(email, password){
        return await this.userService.findByEmail(email)
            .then(user => {
               if(user && user.id){
                   return this.cryptoService.checkPassword(user.password, user.salt, password)
                       ? Promise.resolve(user)
                       : Promise.reject(new UnauthorizedException('Invalid email or password'));
               } else {
                   return Promise.reject(new UnauthorizedException('Invalid email or password'));
               }
            })
            .catch(err => Promise.reject(err));
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.userService.findByEmail(payload.email);
    }

    public async signIn(user): Promise<UserResponse> {
        const expiresIn = '1d';
        const token = this.jwtService.sign(this.getTokenPayload(user), { expiresIn });
        return { token, "name":user.name, "email":user.email, "role":user.role };
    }

}
