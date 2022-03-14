import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateSubmissionInput {

  @Field()
  @IsNotEmpty()
  formId:string;

  @Field({ nullable:true})
  date?:string;

  @Field(() => [String],{nullable:true})
  res?: string[];
}
