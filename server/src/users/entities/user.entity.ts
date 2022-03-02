import { ObjectType, Field, Int , ID } from '@nestjs/graphql';

@ObjectType({ description: 'User model' })
export class User {
  
  @Field(type=>ID, { description: `id field`})
  id:number

  @Field( { description: 'username field' })
  username: string;

 }
