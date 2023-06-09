import { IsEmail, IsNotEmpty, IsObject, IsString, MinLength } from "class-validator";
import { IAnalytics } from "src/interfaces/analytics.interface";

export class UserDto {
    @IsString()
    @IsNotEmpty()
    readonly _id: string;
    //We won't be letting MongoDB generate the _id for us, so we'll need to pass it in from the client. I've decided to use the Firebase auth id for this. This way it will be synchronized with the Firebase auth user id.

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly username: string;

    @IsObject()
    @IsNotEmpty()
    readonly analytics: IAnalytics;
}   