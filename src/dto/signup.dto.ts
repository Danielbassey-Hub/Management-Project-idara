import { IsNotEmpty, IsString, IsOptional, MinLength, MaxLength, Matches, IsEmail } from "class-validator";
import { Roles } from "../enum/role";

export class signupDTO{
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    firstName:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    lastName:string;

    @IsString()
    // @MinLength(3)
    @IsOptional()
    middleName?: string;

    @IsNotEmpty()  
    @IsString()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8,{message:'sorry you must put in at least 8 characters'})
    @MaxLength(16,{message:'Password must not be more than 16 characters'})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, {message:'password must contain at least one uppercase,one number and one special character'})  
    password:string;    
      
   @IsOptional()
   role:Roles
}