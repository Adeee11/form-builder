import { Resolver, Query, Mutation, Args, Int, ID, Context, Parent, ResolveField } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { FormID, User } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FormService } from 'src/form/form.service';


@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService,
              private readonly formService:FormService  
    ) {}


    @ResolveField('form',()=>[FormID])
    async form(@Parent() form) {
      const { username } = form;
      return this.formService.findRelatedToUser(username);
    }


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
