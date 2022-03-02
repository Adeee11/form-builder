import {InputType , Field} from '@nestjs/graphql';
import { IsNotEmpty, MinLength} from 'class-validator';

@InputType()
export class LoginUserInput{
    
    @Field()
    @IsNotEmpty()
    username:string;
    
    @Field()
    @IsNotEmpty()
    @MinLength(5, {
        message: 'password should not be less than 5 digit',
      })
    password:string;
}