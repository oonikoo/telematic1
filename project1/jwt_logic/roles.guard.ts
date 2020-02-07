import { CanActivate, ExecutionContext, ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector, private readonly jwtService: JwtService) {
        if (!this.reflector) {
            this.reflector = new Reflector();
        }
        if (!this.jwtService) {
            this.jwtService = new JwtService({
                secret: 'my_secret_key',
                signOptions: {
                    expiresIn: '1d'
                }
            });
        }
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if(!roles){
            return true;
        }
        const request = context.switchToHttp().getRequest();
        if(request.headers.authorization){
            const token = request.headers.authorization.split(' ')[1];
            let user;
            try{
                user = this.jwtService.verify(token);
            } catch (e) {
                throw new UnauthorizedException();
            }
            if(!user.role || !roles.includes(user.role)){
                throw new ForbiddenException();
            }
        } else {
            throw new UnauthorizedException();
        }
        return true;
    }
}
