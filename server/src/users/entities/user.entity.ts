import { ObjectType, Field, Int , ID } from '@nestjs/graphql';
import { Form} from 'src/form/entities/form.entity';


@ObjectType({ description: 'User model' })
export class User {
  
  @Field(type=>ID, { description: `id field`})
  id:number

  @Field( { description: 'username field' })
  username: string;

  @Field(()=>[Form],{nullable:true})
  form?:Form[]
   
 }
 