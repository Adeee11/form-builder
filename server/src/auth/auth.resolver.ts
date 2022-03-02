import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import { GglAuthGuard } from './gql-auth.guard';

@Resolver()
export class AuthResolver {
    constructor(private authService:AuthService){}

    
    @Mutation(()=>LoginResponse)
    @UseGuards(GglAuthGuard)
    login(@Args('loginUserInput') loginUserInput:LoginUserInput){
    
        return this.authService.login(loginUserInput);
    }


    @Mutation(()=>User)
    signUp(@Args('loginUserInput') loginUserInput: LoginUserInput){
       return  this.authService.signUp(loginUserInput)
    }
}
