import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSolutionInput {

  @Field()
  formId:string;

  @Field()
  date:string;

  @Field(() => [String],{nullable:true})
  res?: string[];
}
