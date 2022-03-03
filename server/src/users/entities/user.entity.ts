import { ObjectType, Field, Int , ID } from '@nestjs/graphql';




@ObjectType()
export class FormID{
  
  @Field()
  id: string;

  @Field()
  title:string;

}


@ObjectType({ description: 'User model' })
export class User {
  
  @Field(type=>ID, { description: `id field`})
  id:number

  @Field( { description: 'username field' })
  username: string;



  @Field(()=>[FormID],{nullable:true})
  form?:FormID[]
   
 }
