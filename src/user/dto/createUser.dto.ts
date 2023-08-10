import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailIsUnique } from "../validation/emailIsUnique.validator";

export class CreateUserDTO {

    @IsNotEmpty()
    name: string;

    @IsEmail()
    @EmailIsUnique({
        message: 'E-mail already use'
    })
    email: string;

    @MinLength(6)
    password: string;
}