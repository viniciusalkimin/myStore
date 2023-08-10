import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailsIsUniqueValidator implements ValidatorConstraintInterface{

    constructor(private userRepository: UserRepository){
    }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const userExistsByEmail = await this.userRepository.userExistsByEmail(value);
        return !userExistsByEmail;
    }
}

export const EmailIsUnique = (validationOptions: ValidationOptions) => {
    return (object: Object, propertie: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: propertie,
            options: validationOptions,
            constraints: [],
            validator: EmailsIsUniqueValidator
        });
    }
}