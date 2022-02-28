import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {



  @Field( { description: 'Name field (placeholder)' })
  username: string;

  @Field()
  password:string;
  
}
