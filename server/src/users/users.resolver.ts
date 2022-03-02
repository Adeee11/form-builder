import { Resolver, Query, Mutation, Args, Int, ID, Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  @UseGuards(JwtAuthGuard) 
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' , description:"argument=> username returns=>user (if exist)"})
  findOne(@Args('username', { type: () => ID }) username: string) {
    return this.usersService.findOne(username);
  }
}
