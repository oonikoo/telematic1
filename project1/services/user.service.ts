import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User} from "../models/entities/user.entity";
import { UserDto } from "../models/dtos/user.dto";
import {DeepPartial, ObjectID, Repository, Transaction, TransactionRepository} from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    public create(user: DeepPartial<UserDto>): Promise<UserDto | undefined>{
        return this.userRepository.save(user)
            .then(newUser => UserService.mapUserToDto(newUser));
    }

    public findById(id: ObjectID): Promise<UserDto | undefined> {
        return this.userRepository.findOneOrFail(id)
            .then(getUser => UserService.mapUserToDto(getUser))
    }

    public findByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({email});
    }

    private static mapUserToDto(user: User): UserDto | undefined {
        return (user) ? {
            id: user.id.toHexString(),
            email: user.email,
            name: user.name,
            role: user.role
        } : undefined;
    }
}
