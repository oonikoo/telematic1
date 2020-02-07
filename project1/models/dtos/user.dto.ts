import {UserRole} from "../entities/user.entity";

export class UserDto{
    id?: string;

    email?: string;

    name?: string;

    role?: UserRole;
}
