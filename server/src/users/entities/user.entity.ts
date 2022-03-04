import { ObjectType, Field, Int , ID } from '@nestjs/graphql';
import { FormDataRes } from 'src/form/entities/form.entity';




@ObjectType()
export class FormObj{
  
  @Field()
  id: string;

  @Field()
  title:string;

  @Field(()=>[FormDataRes],{nullable:true})
  formData?:FormDataRes[];

}


@ObjectType({ description: 'User model' })
export class User {
  
  @Field(type=>ID, { description: `id field`})
  id:number

  @Field( { description: 'username field' })
  username: string;

  @Field(()=>[FormObj],{nullable:true})
  form?:FormObj[]
   
 }
