import {LoginDto} from "./login.dto";

export class SingUpDto extends LoginDto{
    name?: string;

    confirmPassword?: string;
}
