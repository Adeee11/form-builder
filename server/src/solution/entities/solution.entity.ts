import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Solution {
  @Field(() => ID)
  id: string;
 
  @Field()
  formId:string;

  @Field()
  date:string;

  @Field(() => [String],{nullable:true})
  res?: string[];
   
}
