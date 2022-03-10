import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { skip } from 'rxjs';

@ObjectType()
export class Submission {
  @Field(() => ID)
  id: string;
 
  @Field()
  formId:string;

  @Field()
  date:Date;

  @Field(() => [String],{nullable:true})
  res?: string[];
   
}
