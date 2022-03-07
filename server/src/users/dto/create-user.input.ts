import { InputType, Int, Field } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class CreateUserInput {

  @Field( { description: 'username field' })
  username: string;

  @Field({ description: 'password field' })
  password:string;
  

  
}
