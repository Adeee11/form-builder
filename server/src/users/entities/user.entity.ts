import { ObjectType, Field, Int , ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  
  @Field(type=>ID)
  id:number

  @Field( { description: 'name field (user Name)' })
  username: string;

 


}
