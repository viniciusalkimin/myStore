import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailIsUnique } from "../validation/emailIsUnique.validator";

export class UpdateUserDTO {

    @IsOptional()
    name: string;

    @IsOptional()
    @IsEmail()
    @EmailIsUnique({
        message: 'E-mail already use'
    })
    email: string;

    @IsOptional()
    @MinLength(6)
    password: string;
}